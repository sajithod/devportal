"use strict";

var _TypeStorage = require("../TypeStorage");

var _graphql = require("../graphql");

var _ObjectTypeComposer = require("../ObjectTypeComposer");

var _InputTypeComposer = require("../InputTypeComposer");

var _ScalarTypeComposer = require("../ScalarTypeComposer");

var _EnumTypeComposer = require("../EnumTypeComposer");

var _InterfaceTypeComposer = require("../InterfaceTypeComposer");

var _UnionTypeComposer = require("../UnionTypeComposer");

let typeStorage;
beforeEach(() => {
  typeStorage = new _TypeStorage.TypeStorage();
});
describe('typeStorage', () => {
  it('should be instance of Map', () => {
    expect(typeStorage).toBeInstanceOf(_TypeStorage.TypeStorage);
  });
  it('should work `get`, `set`, `has`, `clear` methods and `size` property', () => {
    expect(typeStorage.size).toEqual(0);
    typeStorage.set('MyType', _graphql.GraphQLString);
    expect(typeStorage.get('MyType')).toEqual(_graphql.GraphQLString);
    expect(typeStorage.has('MyType')).toEqual(true);
    expect(typeStorage.size).toEqual(1);
    typeStorage.clear();
    expect(typeStorage.size).toEqual(0);
  });
  describe('getOrSet() method', () => {
    it('should return existed value', () => {
      typeStorage.set('MyType', _graphql.GraphQLString);
      expect(typeStorage.getOrSet('MyType', () => 'SomeOtherType')).toEqual(_graphql.GraphQLString);
    });
    it('should set new type as function and return type, if key not exists', () => {
      expect(typeStorage.getOrSet('MyType', () => _graphql.GraphQLString)).toEqual(_graphql.GraphQLString);
      expect(typeStorage.get('MyType')).toEqual(_graphql.GraphQLString);
    });
    it('should provide itself in callback as first arg', () => {
      typeStorage.getOrSet('MyType5', s => {
        expect(s).toBe(typeStorage);
        return _graphql.GraphQLString;
      });
    });
    it('should set new type and return it, if key not exists', () => {
      expect(typeStorage.getOrSet('MyType', _graphql.GraphQLString)).toEqual(_graphql.GraphQLString);
      expect(typeStorage.get('MyType')).toEqual(_graphql.GraphQLString);
    });
    it('should not set new value if it is empty', () => {
      expect(typeStorage.getOrSet('MyType', () => null)).toEqual(null);
      expect(typeStorage.has('MyType')).toEqual(false);
    });
  });
  describe('add()', () => {
    it('should add ObjectTypeComposer', () => {
      const tc = _ObjectTypeComposer.ObjectTypeComposer.createTemp('User');

      const typeName = typeStorage.add(tc);
      expect(typeName).toBe('User');
      expect(typeStorage.get('User')).toBe(tc);
    });
    it('should add InputTypeComposer', () => {
      const itc = _InputTypeComposer.InputTypeComposer.createTemp('UserInput');

      const typeName = typeStorage.add(itc);
      expect(typeName).toBe('UserInput');
      expect(typeStorage.get('UserInput')).toBe(itc);
    });
    it('should add ScalarTypeComposer', () => {
      const stc = _ScalarTypeComposer.ScalarTypeComposer.createTemp('UserScalar');

      const typeName = typeStorage.add(stc);
      expect(typeName).toBe('UserScalar');
      expect(typeStorage.get('UserScalar')).toBe(stc);
    });
    it('should add EnumTypeComposer', () => {
      const etc = _EnumTypeComposer.EnumTypeComposer.createTemp('UserEnum');

      const typeName = typeStorage.add(etc);
      expect(typeName).toBe('UserEnum');
      expect(typeStorage.get('UserEnum')).toBe(etc);
    });
    it('should add GraphQLObjectType', () => {
      const t = new _graphql.GraphQLObjectType({
        name: 'NativeType',
        fields: () => {}
      });
      const typeName = typeStorage.add(t);
      expect(typeName).toBe('NativeType');
      expect(typeStorage.get('NativeType')).toBe(t);
    });
    it('should add InterfaceTypeComposer', () => {
      const iftc = _InterfaceTypeComposer.InterfaceTypeComposer.createTemp('UserInterface');

      const typeName = typeStorage.add(iftc);
      expect(typeName).toBe('UserInterface');
      expect(typeStorage.get('UserInterface')).toBe(iftc);
    });
    it('should add UnionTypeComposer', () => {
      const utc = _UnionTypeComposer.UnionTypeComposer.createTemp('UserUnion');

      const typeName = typeStorage.add(utc);
      expect(typeName).toBe('UserUnion');
      expect(typeStorage.get('UserUnion')).toBe(utc);
    });
  });
});