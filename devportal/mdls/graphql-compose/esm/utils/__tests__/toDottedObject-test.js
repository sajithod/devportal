import { toDottedObject } from '../toDottedObject';
describe('toDottedObject()', () => {
  it('should dot nested objects', () => {
    expect(toDottedObject({
      a: {
        b: {
          c: 1
        }
      }
    })).toEqual({
      'a.b.c': 1
    });
  });
  it('should work with arrays', () => {
    expect(toDottedObject({
      a: {
        b: [{
          c: 1
        }, {
          d: 1
        }]
      }
    })).toEqual({
      'a.b.0.c': 1,
      'a.b.1.d': 1
    });
  });
});