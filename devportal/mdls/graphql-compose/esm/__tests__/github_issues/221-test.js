import { find, filter } from 'lodash'; // eslint-disable-line

import { SchemaComposer } from '../..';
describe('github issue #221: addTypeDefs crashes with argument having default enum value', () => {
  it('test graphql query', async () => {
    const sc = new SchemaComposer();
    expect(() => {
      sc.addTypeDefs(`
        type Image {
          random(format: ImageFormat = JPG): String
        }

        enum ImageFormat {
          JPG
        }
      `);
    }).not.toThrowError('Type with name "ImageFormat" does not exists');
    expect(sc.getOTC('Image').getFieldArg('random', 'format').defaultValue).toBe('JPG');
    expect(sc.getOTC('Image').getFieldArgTC('random', 'format').getFieldNames()).toEqual(['JPG']);
  });
});