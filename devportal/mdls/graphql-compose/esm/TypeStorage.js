import { isFunction } from './utils/is';
import { inspect } from './utils/misc'; // TypeStorage has all methods from Map class

export class TypeStorage {
  constructor() {
    this.types = new Map(); // alive proper Flow type casting in autosuggestions for class with Generics

    /* :: return this; */
  }

  get size() {
    return this.types.size;
  }

  clear() {
    this.types.clear();
  }

  delete(typeName) {
    return this.types.delete(typeName);
  }

  entries() {
    return this.types.entries();
  }

  forEach(callbackfn, thisArg) {
    return this.types.forEach(callbackfn, thisArg);
  }

  get(typeName) {
    const v = this.types.get(typeName);

    if (!v) {
      throw new Error(`Type with name ${inspect(typeName)} does not exists`);
    }

    return v;
  }

  has(typeName) {
    return this.types.has(typeName);
  }

  keys() {
    return this.types.keys();
  }

  set(typeName, value) {
    this.types.set(typeName, value);
    return this;
  }

  values() {
    return this.types.values();
  }

  add(value) {
    if (value) {
      let typeName;

      if (value.getTypeName && value.getTypeName.call) {
        // $FlowFixMe
        typeName = value.getTypeName();
      } else if (value.name) {
        typeName = value.name;
      }

      if (typeName) {
        this.set(typeName, value);
        return typeName;
      }
    }

    return null;
  }

  hasInstance(typeName, ClassObj) {
    if (!this.has(typeName)) return false;
    const existedType = this.get(typeName);

    if (existedType && existedType instanceof ClassObj) {
      return true;
    }

    return false;
  }

  getOrSet(typeName, typeOrThunk) {
    const existedType = this.types.get(typeName);

    if (existedType) {
      return existedType;
    }

    const gqType = isFunction(typeOrThunk) ? typeOrThunk(this) : typeOrThunk;

    if (gqType) {
      this.set(typeName, gqType);
    }

    return gqType;
  }

}