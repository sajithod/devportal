import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import { notifyManager } from '../core/notifyManager';
import { noop, parseMutationArgs } from '../core/utils';
import { MutationObserver } from '../core/mutationObserver';
import { useQueryClient } from './QueryClientProvider';
import { shouldThrowError } from './utils'; // HOOK

export function useMutation(arg1, arg2, arg3) {
  var mountedRef = React.useRef(false);

  var _React$useState = React.useState(0),
      forceUpdate = _React$useState[1];

  var options = parseMutationArgs(arg1, arg2, arg3);
  var queryClient = useQueryClient();
  var obsRef = React.useRef();

  if (!obsRef.current) {
    obsRef.current = new MutationObserver(queryClient, options);
  } else {
    obsRef.current.setOptions(options);
  }

  var currentResult = obsRef.current.getCurrentResult();
  React.useEffect(function () {
    mountedRef.current = true;
    var unsubscribe = obsRef.current.subscribe(notifyManager.batchCalls(function () {
      if (mountedRef.current) {
        forceUpdate(function (x) {
          return x + 1;
        });
      }
    }));
    return function () {
      mountedRef.current = false;
      unsubscribe();
    };
  }, []);
  var mutate = React.useCallback(function (variables, mutateOptions) {
    obsRef.current.mutate(variables, mutateOptions).catch(noop);
  }, []);

  if (currentResult.error && shouldThrowError(undefined, obsRef.current.options.useErrorBoundary, [currentResult.error])) {
    throw currentResult.error;
  }

  return _extends({}, currentResult, {
    mutate: mutate,
    mutateAsync: currentResult.mutate
  });
}