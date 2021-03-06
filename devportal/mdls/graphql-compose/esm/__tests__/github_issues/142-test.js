import { find, filter } from 'lodash'; // eslint-disable-line

import { schemaComposer, graphql } from '../..';
describe('github issue #142: Add schema definition in `graphql-tools` way', () => {
  // example data
  const authors = [{
    id: 1,
    firstName: 'Tom',
    lastName: 'Coleman'
  }, {
    id: 2,
    firstName: 'Sashko',
    lastName: 'Stubailo'
  }, {
    id: 3,
    firstName: 'Mikhail',
    lastName: 'Novikov'
  }];
  const posts = [{
    id: 1,
    authorId: 1,
    title: 'Introduction to GraphQL',
    votes: 2
  }, {
    id: 2,
    authorId: 2,
    title: 'Welcome to Meteor',
    votes: 3
  }, {
    id: 3,
    authorId: 2,
    title: 'Advanced GraphQL',
    votes: 1
  }, {
    id: 4,
    authorId: 3,
    title: 'Launchpad is Cool',
    votes: 7
  }];
  const typeDefs = `
  type Author {
    id: Int!
    firstName: String
    lastName: String
    """
    the list of Posts by this author
    """
    posts: [Post]
  }

  type Post {
    id: Int!
    title: String
    author: Author
    votes: Int
  }

  # the schema allows the following query:
  type Query {
    posts: [Post]
    author(id: Int!): Author
  }

  # this schema allows the following mutation:
  type Mutation {
    upvotePost (
      postId: Int!
    ): Post
  }
`;
  const resolvers = {
    Query: {
      posts: () => posts,
      author: (_, {
        id
      }) => find(authors, {
        id
      })
    },
    Mutation: {
      upvotePost: (_, {
        postId
      }) => {
        const post = find(posts, {
          id: postId
        });

        if (!post) {
          throw new Error(`Couldn't find post with id ${postId}`);
        }

        post.votes += 1;
        return post;
      }
    },
    Author: {
      posts: author => filter(posts, {
        authorId: author.id
      })
    },
    Post: {
      author: post => find(authors, {
        id: post.authorId
      })
    }
  };
  schemaComposer.addTypeDefs(typeDefs);
  schemaComposer.addResolveMethods(resolvers);
  const schema = schemaComposer.buildSchema();
  it('test graphql query', async () => {
    expect(await graphql.graphql(schema, `
          query { 
            author(id: 2) {
              id
              firstName
            }
            posts {
              title
              author {
                firstName
              }
            }
          }
        `)).toEqual({
      data: {
        author: {
          firstName: 'Sashko',
          id: 2
        },
        posts: [{
          author: {
            firstName: 'Tom'
          },
          title: 'Introduction to GraphQL'
        }, {
          author: {
            firstName: 'Sashko'
          },
          title: 'Welcome to Meteor'
        }, {
          author: {
            firstName: 'Sashko'
          },
          title: 'Advanced GraphQL'
        }, {
          author: {
            firstName: 'Mikhail'
          },
          title: 'Launchpad is Cool'
        }]
      }
    });
  });
  it('extend Object type', async () => {
    expect(schemaComposer.Query.getFieldNames()).toEqual(['posts', 'author']);
    schemaComposer.addTypeDefs(`
      extend type Query {
        test: String!
      }
    `);
    expect(schemaComposer.Query.getFieldNames()).toEqual(['posts', 'author', 'test']);
  });
});