import React, { useContext, useState } from 'react';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

var MDXContext = /*#__PURE__*/React.createContext({});
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = React.useContext(MDXContext); // Custom merge via a function prop

  if (isFunction(components)) {
    return components(contextComponents);
  }

  return _objectSpread2(_objectSpread2({}, contextComponents), components);
};
var MDXProvider = function MDXProvider(_ref) {
  var components = _ref.components,
      children = _ref.children,
      disableParentContext = _ref.disableParentContext;
  var allComponents = useMDXComponents(components);

  if (disableParentContext) {
    allComponents = components;
  }

  return /*#__PURE__*/React.createElement(MDXContext.Provider, {
    value: allComponents
  }, children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/React.createElement(React.Fragment, {}, children);
  }
};
var MDXCreateElement = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return /*#__PURE__*/React.createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return /*#__PURE__*/React.createElement(Component, _objectSpread2({
    ref: ref
  }, etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';
function createElement (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return React.createElement.apply(null, createElementArgArray);
  }

  return React.createElement.apply(null, args);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

const InputContext = /*#__PURE__*/React.createContext({});
const useInputByKey = key => {
  const context = useContext(InputContext) || {};
  const result = context[key];
  return result === null || result === void 0 ? void 0 : result.value;
};
const useInput = ({
  type = `text`,
  label,
  key = `123`
}) => {
  const contextVal = useInputByKey(key) || ``;
  const [val, setVal] = useState(contextVal);

  const Input = props => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, label), /*#__PURE__*/React.createElement("input", _extends({}, props, {
    type: type,
    value: val,
    onChange: e => setVal(e.target.value)
  })));

  return [Input, val];
};
InputContext.Provider;

const ResourceContext = /*#__PURE__*/React.createContext([]);
const useResource = key => {
  const context = useContext(ResourceContext);
  const result = context.find(c => c.resourceDefinitions._key === key);
  return result || {};
};
ResourceContext.Provider;

// this file has the best name
const useProvider = provider => {
  // const context = useContext(ResourceContext)
  // const result = context.find(c => c.resourceDefinitions._key === key)
  // return result
  const providers = {
    contentful: {
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    }
  };
  return providers[provider];
}; // export const ResourceProvider = ResourceContext.Provider

const transformCodeForEval = jsx => `${jsx}

  return React.createElement(MDXProvider, { components },
    React.createElement(MDXContent, props)
  );`;

var StepRenderer = (({
  children: srcCode,
  scope,
  components,
  ...props
}) => {
  const fullScope = {
    mdx: createElement,
    MDXProvider,
    React,
    // need to pass both so that we can guarantee the components we need are passed to MDXProvider for shortcodes and we also need some components to be in direct scope
    ...components,
    components,
    props,
    useInput,
    useInputByKey,
    useResource,
    useProvider,
    ...scope
  };
  const scopeKeys = Object.keys(fullScope);
  const scopeValues = Object.values(fullScope);
  const fn = new Function(...scopeKeys, transformCodeForEval(srcCode));
  return fn(...scopeValues);
});

/**
 * This is entry point for `gatsby-recipes/components`
 */
console.log(StepRenderer);

export { StepRenderer };
//# sourceMappingURL=components.js.map
