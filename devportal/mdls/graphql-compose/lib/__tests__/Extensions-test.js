"use strict";

var _ = require("..");

var _EnumTypeComposer = require("../EnumTypeComposer");

var _InputTypeComposer = require("../InputTypeComposer");

var _InterfaceTypeComposer = require("../InterfaceTypeComposer");

var _ScalarTypeComposer = require("../ScalarTypeComposer");

var _ObjectTypeComposer = require("../ObjectTypeComposer");

var _UnionTypeComposer = require("../UnionTypeComposer");

beforeEach(() => {
  _.schemaComposer.clear();
});
describe('Extensions', () => {
  describe('ObjectTypeComposer', () => {
    it('has type Extensions methods', () => {
      const tc = _ObjectTypeComposer.ObjectTypeComposer.create({
        name: 'Foo',
        fields: {
          id: 'ID!',
          name: 'String',
          nonExistingType: 'Bar',
          thunkedFieldType: {
            type: () => 'String'
          }
        }
      }, _.schemaComposer);

      testTypeExtensions(tc);
    });
    it('has field Extensions methods', () => {
      const tc = _ObjectTypeComposer.ObjectTypeComposer.create({
        name: 'Foo',
        fields: {
          id: 'ID!',
          name: 'String',
          nonExistingType: 'Bar',
          thunkedFieldType: {
            type: () => 'String'
          }
        }
      }, _.schemaComposer);

      testFieldExtensions(tc);
    });
    it('has type extension initializers', () => {
      const tc = _ObjectTypeComposer.ObjectTypeComposer.create({
        name: 'Foo',
        fields: {
          id: 'ID!',
          name: 'String',
          nonExistingType: 'Bar',
          thunkedFieldType: {
            type: () => 'String'
          }
        },
        extensions: {
          tags: ['generated']
        }
      }, _.schemaComposer);

      expect(tc.getExtensions()).toEqual({
        tags: ['generated']
      });
    });
    it('has field extension initializers', () => {
      const tc = _ObjectTypeComposer.ObjectTypeComposer.create({
        name: 'Foo',
        fields: {
          id: 'ID!',
          name: {
            type: 'String',
            extensions: {
              noFilter: true
            }
          },
          nonExistingType: {
            type: 'Bar',
            extensions: {
              noFilter: true
            }
          },
          thunkedFieldType: {
            type: () => 'String',
            extensions: {
              noFilter: true
            }
          }
        }
      }, _.schemaComposer);

      testFieldExtensionsInitializers(tc);
    });
    it('has field arg Extensions methods', () => {
      const tc = _ObjectTypeComposer.ObjectTypeComposer.create({
        name: 'Foo',
        fields: {
          fieldWithArgs: {
            type: 'String!',
            args: {
              argId: 'ID!',
              argName: {
                type: 'String'
              },
              argNonExistingType: {
                type: 'Bar'
              },
              argThunked: {
                type: () => 'Bar'
              }
            }
          }
        }
      }, _.schemaComposer);

      testFieldArgExtensions(tc, 'fieldWithArgs');
    });
    it('has fieldArg extension initializers', () => {
      const tc = _ObjectTypeComposer.ObjectTypeComposer.create({
        name: 'Foo',
        fields: {
          fieldWithArgs: {
            type: 'String',
            args: {
              argId: 'ID!',
              argName: {
                type: 'String',
                extensions: {
                  noFilter: true
                }
              },
              argNonExistingType: {
                type: 'Bar',
                extensions: {
                  noFilter: true
                }
              },
              argThunked: {
                type: () => 'Bar',
                extensions: {
                  noFilter: true
                }
              }
            }
          }
        }
      }, _.schemaComposer);

      testFieldArgExtensionsInitializers(tc);
    });
  });
  describe('InputTypeComposer', () => {
    it('has type Extensions methods', () => {
      const tc = _InputTypeComposer.InputTypeComposer.create({
        name: 'Foo',
        fields: {
          id: 'ID!',
          name: 'String',
          nonExistingType: 'Bar',
          thunkedFieldType: {
            type: () => 'String'
          }
        }
      }, _.schemaComposer);

      testTypeExtensions(tc);
    });
    it('has field Extensions methods', () => {
      const tc = _InputTypeComposer.InputTypeComposer.create({
        name: 'Foo',
        fields: {
          id: 'ID!',
          name: 'String',
          nonExistingType: 'Bar',
          thunkedFieldType: {
            type: () => 'String'
          }
        }
      }, _.schemaComposer);

      testFieldExtensions(tc);
    });
    it('has type extension initializers', () => {
      const tc = _InputTypeComposer.InputTypeComposer.create({
        name: 'Foo',
        fields: {
          id: 'ID!',
          name: 'String',
          nonExistingType: 'Bar',
          thunkedFieldType: {
            type: () => 'String'
          }
        },
        extensions: {
          tags: ['generated']
        }
      }, _.schemaComposer);

      expect(tc.getExtensions()).toEqual({
        tags: ['generated']
      });
    });
    it('has field extension initializers', () => {
      const tc = _InputTypeComposer.InputTypeComposer.create({
        name: 'Foo',
        fields: {
          id: 'ID!',
          name: {
            type: 'String',
            extensions: {
              noFilter: true
            }
          },
          nonExistingType: {
            type: 'Bar',
            extensions: {
              noFilter: true
            }
          },
          thunkedFieldType: {
            type: () => 'String',
            extensions: {
              noFilter: true
            }
          }
        }
      }, _.schemaComposer);

      testFieldExtensionsInitializers(tc);
    });
  });
  describe('InterfaceTypeComposer', () => {
    it('has type Extensions methods', () => {
      const tc = _InterfaceTypeComposer.InterfaceTypeComposer.create({
        name: 'Foo',
        fields: {
          id: 'ID!',
          name: 'String',
          nonExistingType: 'Bar',
          thunkedFieldType: {
            type: () => 'String'
          }
        }
      }, _.schemaComposer);

      testTypeExtensions(tc);
    });
    it('has field Extensions methods', () => {
      const tc = _InterfaceTypeComposer.InterfaceTypeComposer.create({
        name: 'Foo',
        fields: {
          id: 'ID!',
          name: 'String',
          nonExistingType: 'Bar',
          thunkedFieldType: {
            type: () => 'String'
          }
        }
      }, _.schemaComposer);

      testFieldExtensions(tc);
    });
    it('has type extension initializers', () => {
      const tc = _InterfaceTypeComposer.InterfaceTypeComposer.create({
        name: 'Foo',
        fields: {
          id: 'ID!',
          name: 'String'
        },
        nonExistingType: 'Bar',
        thunkedFieldType: {
          type: () => 'String'
        },
        extensions: {
          tags: ['generated']
        }
      }, _.schemaComposer);

      expect(tc.getExtensions()).toEqual({
        tags: ['generated']
      });
    });
    it('has field extension initializers', () => {
      const tc = _InterfaceTypeComposer.InterfaceTypeComposer.create({
        name: 'Foo',
        fields: {
          id: 'ID!',
          name: {
            type: 'String',
            extensions: {
              noFilter: true
            }
          },
          nonExistingType: {
            type: 'Bar',
            extensions: {
              noFilter: true
            }
          },
          thunkedFieldType: {
            type: () => 'String',
            extensions: {
              noFilter: true
            }
          }
        }
      }, _.schemaComposer);

      testFieldExtensionsInitializers(tc);
    });
    it('has field arg Extensions methods', () => {
      const tc = _InterfaceTypeComposer.InterfaceTypeComposer.create({
        name: 'Foo',
        fields: {
          fieldWithArgs: {
            type: 'String!',
            args: {
              argId: 'ID!',
              argName: {
                type: 'String'
              },
              argNonExistingType: {
                type: 'Bar'
              },
              argThunked: {
                type: () => 'Bar'
              }
            }
          }
        }
      }, _.schemaComposer);

      testFieldArgExtensions(tc, 'fieldWithArgs');
    });
    it('has fieldArg extension initializers', () => {
      const tc = _InterfaceTypeComposer.InterfaceTypeComposer.create({
        name: 'Foo',
        fields: {
          fieldWithArgs: {
            type: 'String',
            args: {
              argId: 'ID!',
              argName: {
                type: 'String',
                extensions: {
                  noFilter: true
                }
              },
              argNonExistingType: {
                type: 'Bar',
                extensions: {
                  noFilter: true
                }
              },
              argThunked: {
                type: () => 'Bar',
                extensions: {
                  noFilter: true
                }
              }
            }
          }
        }
      }, _.schemaComposer);

      testFieldArgExtensionsInitializers(tc);
    });
  });
  describe('EnumTypeComposer', () => {
    it('has type Extensions methods', () => {
      const tc = _EnumTypeComposer.EnumTypeComposer.create({
        name: 'Foo',
        values: {
          FOO: {
            value: 'FOO'
          },
          BAR: {
            value: 'BAR'
          }
        }
      }, _.schemaComposer);

      testTypeExtensions(tc);
    });
    it('has type extension initializers', () => {
      const tc = _EnumTypeComposer.EnumTypeComposer.create({
        name: 'Foo',
        values: {
          FOO: {
            value: 'FOO',
            extensions: {
              tags: ['a']
            }
          },
          BAR: {
            value: 'BAR',
            extensions: {
              tags: ['b']
            }
          }
        },
        extensions: {
          tags: ['generated']
        }
      }, _.schemaComposer);

      expect(tc.getExtensions()).toEqual({
        tags: ['generated']
      });
      expect(tc.getFieldExtensions('FOO')).toEqual({
        tags: ['a']
      });
      expect(tc.getFieldExtensions('BAR')).toEqual({
        tags: ['b']
      });
    });
  });
  describe('UnionTypeComposer', () => {
    it('has type Extensions methods', () => {
      const foo = _ObjectTypeComposer.ObjectTypeComposer.create({
        name: 'Foo',
        fields: {
          id: 'ID!',
          name: 'String'
        }
      }, _.schemaComposer);

      const tc = _UnionTypeComposer.UnionTypeComposer.create({
        name: 'FooUnion',
        types: [foo]
      }, _.schemaComposer);

      testTypeExtensions(tc);
    });
    it('has type extension initializers', () => {
      const foo = _ObjectTypeComposer.ObjectTypeComposer.create({
        name: 'Foo',
        fields: {
          id: 'ID!',
          name: 'String'
        }
      }, _.schemaComposer);

      const tc = _UnionTypeComposer.UnionTypeComposer.create({
        name: 'FooUnion',
        types: [foo],
        extensions: {
          tags: ['generated']
        }
      }, _.schemaComposer);

      expect(tc.getExtensions()).toEqual({
        tags: ['generated']
      });
    });
  });
  describe('ScalarTypeComposer', () => {
    it('has type Extensions methods', () => {
      const tc = _ScalarTypeComposer.ScalarTypeComposer.create({
        name: 'Foo',

        serialize() {}

      }, _.schemaComposer);

      testTypeExtensions(tc);
    });
    it('has type extension initializers', () => {
      const tc = _ScalarTypeComposer.ScalarTypeComposer.create({
        name: 'Foo',
        serialize: () => {},
        extensions: {
          tags: ['generated']
        }
      }, _.schemaComposer);

      expect(tc.getExtensions()).toEqual({
        tags: ['generated']
      });
    });
  });

  function testTypeExtensions(instance) {
    expect(instance.getExtensions()).toEqual({});
    instance.setExtensions({
      tags: ['generated'],
      source: 'inference'
    });
    expect(instance.getExtensions()).toEqual({
      tags: ['generated'],
      source: 'inference'
    });
    instance.extendExtensions({
      source: 'user',
      originalName: 'foo'
    });
    expect(instance.getExtensions()).toEqual({
      tags: ['generated'],
      source: 'user',
      originalName: 'foo'
    });
    expect(instance.getExtension('source')).toEqual('user');
    expect(instance.hasExtension('source')).toEqual(true);
    expect(instance.hasExtension('nonExistant')).toEqual(false);
    instance.setExtension('source', 'inference');
    expect(instance.getExtensions()).toEqual({
      tags: ['generated'],
      source: 'inference',
      originalName: 'foo'
    });
    expect(instance.getExtension('source')).toEqual('inference');
    instance.removeExtension('originalName');
    expect(instance.getExtensions()).toEqual({
      tags: ['generated'],
      source: 'inference'
    });
    instance.clearExtensions();
    expect(instance.getExtensions()).toEqual({});
    expect(instance.hasExtension('source')).toEqual(false);
    instance.setExtensions({
      tags: ['generated'],
      source: 'inference'
    });
    expect(instance.getExtensions()).toEqual({
      tags: ['generated'],
      source: 'inference'
    });
    instance.clearExtensions();
  }

  function testFieldExtensions(instance) {
    ['id', 'name', 'nonExistingType', 'thunkedFieldType'].forEach(fieldName => {
      expect(instance.getFieldExtensions(fieldName)).toEqual({});
      instance.setFieldExtensions(fieldName, {
        tags: ['generated'],
        source: 'inference'
      });
      expect(instance.getFieldExtensions(fieldName)).toEqual({
        tags: ['generated'],
        source: 'inference'
      });
      instance.extendFieldExtensions(fieldName, {
        source: 'user',
        originalName: 'foo'
      });
      expect(instance.getFieldExtensions(fieldName)).toEqual({
        tags: ['generated'],
        source: 'user',
        originalName: 'foo'
      });
      expect(instance.getFieldExtension(fieldName, 'source')).toEqual('user');
      expect(instance.hasFieldExtension(fieldName, 'source')).toEqual(true);
      expect(instance.hasFieldExtension(fieldName, 'nonExistant')).toEqual(false);
      instance.setFieldExtension(fieldName, 'source', 'inference');
      expect(instance.getFieldExtensions(fieldName)).toEqual({
        tags: ['generated'],
        source: 'inference',
        originalName: 'foo'
      });
      expect(instance.getFieldExtension(fieldName, 'source')).toEqual('inference');
      instance.removeFieldExtension(fieldName, 'originalName');
      expect(instance.getFieldExtensions(fieldName)).toEqual({
        tags: ['generated'],
        source: 'inference'
      });
      instance.clearFieldExtensions(fieldName);
      expect(instance.getFieldExtensions(fieldName)).toEqual({});
      expect(instance.hasFieldExtension(fieldName, 'source')).toEqual(false);
      instance.setFieldExtensions(fieldName, {
        tags: ['generated'],
        source: 'inference'
      });
      expect(instance.getFieldExtensions(fieldName)).toEqual({
        tags: ['generated'],
        source: 'inference'
      });
      instance.clearFieldExtensions(fieldName);
    });
  }

  function testFieldExtensionsInitializers(instance) {
    expect(instance.getFieldExtensions('name')).toEqual({
      noFilter: true
    });
    expect(instance.getFieldExtensions('nonExistingType')).toEqual({
      noFilter: true
    });
    expect(instance.getFieldExtensions('thunkedFieldType')).toEqual({
      noFilter: true
    });
  }

  function testFieldArgExtensionsInitializers(instance) {
    expect(instance.getFieldArgExtensions('fieldWithArgs', 'argName')).toEqual({
      noFilter: true
    });
    expect(instance.getFieldArgExtensions('fieldWithArgs', 'argNonExistingType')).toEqual({
      noFilter: true
    });
    expect(instance.getFieldArgExtensions('fieldWithArgs', 'argThunked')).toEqual({
      noFilter: true
    });
  }

  function testFieldArgExtensions(instance, fieldName) {
    ['argId', 'argName', 'argNonExistingType', 'argThunked'].forEach(argName => {
      expect(instance.getFieldArgExtensions(fieldName, argName)).toEqual({});
      instance.setFieldArgExtensions(fieldName, argName, {
        tags: ['generated'],
        source: 'inference'
      });
      expect(instance.getFieldArgExtensions(fieldName, argName)).toEqual({
        tags: ['generated'],
        source: 'inference'
      });
      instance.extendFieldArgExtensions(fieldName, argName, {
        source: 'user',
        originalName: 'foo'
      });
      expect(instance.getFieldArgExtensions(fieldName, argName)).toEqual({
        tags: ['generated'],
        source: 'user',
        originalName: 'foo'
      });
      expect(instance.getFieldArgExtension(fieldName, argName, 'source')).toEqual('user');
      expect(instance.hasFieldArgExtension(fieldName, argName, 'source')).toEqual(true);
      expect(instance.hasFieldArgExtension(fieldName, argName, 'nonExistant')).toEqual(false);
      instance.setFieldArgExtension(fieldName, argName, 'source', 'inference');
      expect(instance.getFieldArgExtensions(fieldName, argName)).toEqual({
        tags: ['generated'],
        source: 'inference',
        originalName: 'foo'
      });
      expect(instance.getFieldArgExtension(fieldName, argName, 'source')).toEqual('inference');
      instance.removeFieldArgExtension(fieldName, argName, 'originalName');
      expect(instance.getFieldArgExtensions(fieldName, argName)).toEqual({
        tags: ['generated'],
        source: 'inference'
      });
      instance.clearFieldArgExtensions(fieldName, argName);
      expect(instance.getFieldArgExtensions(fieldName, argName)).toEqual({});
      expect(instance.hasFieldArgExtension(fieldName, argName, 'source')).toEqual(false);
      instance.setFieldArgExtensions(fieldName, argName, {
        tags: ['generated'],
        source: 'inference'
      });
      expect(instance.getFieldArgExtensions(fieldName, argName)).toEqual({
        tags: ['generated'],
        source: 'inference'
      });
      instance.clearFieldArgExtensions(fieldName, argName);
    });
  }
});