/* eslint-disable no-use-before-define */
import { ObjectTypeComposer } from '../ObjectTypeComposer';
import { InputTypeComposer } from '../InputTypeComposer';
import { InterfaceTypeComposer } from '../InterfaceTypeComposer';
import { Resolver } from '../Resolver';
import { unwrapTC } from './typeHelpers';

/**
 * fieldName
 * @argName
 * #resolver
 */
export function typeByPath(src, path) {
  const parts = Array.isArray(path) ? path : String(path).split('.');

  if (parts.length === 0) {
    return src;
  }

  if (src instanceof ObjectTypeComposer) {
    return typeByPathTC(src, parts);
  } else if (src instanceof InputTypeComposer) {
    return typeByPathITC(src, parts);
  } else if (src instanceof Resolver) {
    return typeByPathRSV(src, parts);
  } else if (src instanceof InterfaceTypeComposer) {
    return typeByPathIFTC(src, parts);
  }

  return src;
}
export function typeByPathTC(tc, parts) {
  if (!tc) return undefined;
  if (parts.length === 0) return tc;
  const name = parts[0];
  if (!name) return undefined;
  const nextName = parts[1];

  if (name.startsWith('$')) {
    const restParts = parts.slice(1);
    const resolver = tc.getResolver(name.substring(1));

    if (resolver) {
      if (restParts.length > 0) {
        return typeByPathRSV(resolver, restParts);
      }

      return resolver;
    }

    return undefined;
  }

  if (nextName && nextName.startsWith('@')) {
    const argTC = tc.getFieldArg(name, nextName.substring(1)).type;
    return processType(argTC, parts.slice(2));
  }

  const fieldTC = tc.getField(name).type;
  return processType(fieldTC, parts.slice(1));
}
export function typeByPathITC(itc, parts) {
  if (!itc) return undefined;
  if (parts.length === 0) return itc;
  const fieldTC = itc.getField(parts[0]).type;
  return processType(fieldTC, parts.slice(1));
}
export function typeByPathRSV(rsv, parts) {
  if (!rsv) return undefined;
  if (parts.length === 0) return rsv;
  const name = parts[0];
  if (!name) return undefined;

  if (name.startsWith('@')) {
    const argName = name.substring(1);
    const arg = rsv.getArg(argName);
    if (!arg) return undefined;
    const argTC = rsv.getArg(argName).type;
    return processType(argTC, parts.slice(1));
  }

  return processType(rsv.type, parts);
}
export function typeByPathIFTC(tc, parts) {
  if (!tc) return undefined;
  if (parts.length === 0) return tc;
  const name = parts[0];
  if (!name) return undefined;
  const nextName = parts[1];

  if (name.startsWith('$')) {
    // Interface does not have resolvers
    return undefined;
  }

  if (nextName && nextName.startsWith('@')) {
    const argTC = tc.getFieldArg(name, nextName.substring(1)).type;
    return processType(argTC, parts.slice(2));
  }

  const fieldTC = tc.getField(name).type;
  return processType(fieldTC, parts.slice(1));
}
export function processType(type, restParts) {
  if (!type) return undefined;
  const tc = unwrapTC(type);

  if (tc instanceof ObjectTypeComposer) {
    if (restParts.length > 0) {
      return typeByPathTC(tc, restParts);
    }

    return tc;
  } else if (tc instanceof InputTypeComposer) {
    if (restParts.length > 0) {
      return typeByPathITC(tc, restParts);
    }

    return tc;
  } else if (tc instanceof InterfaceTypeComposer) {
    if (restParts.length > 0) {
      return typeByPathIFTC(tc, restParts);
    }

    return tc;
  }

  if (restParts.length > 0) {
    return undefined;
  }

  return tc;
}