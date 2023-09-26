const { GraphQLObjectType, GraphQLSchema, GraphQLString } = require('graphql');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    hello: {
      type: GraphQLString,
      resolve() {
        return 'Olá, mundo!';
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
