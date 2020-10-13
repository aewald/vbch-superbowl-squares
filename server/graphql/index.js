const mongoose = require('mongoose');
const { ApolloServer, gql } = require('apollo-server-express');

const { userMutation, userTypes, userTypeDefs, User } = require('@ae-auth');

exports.createApolloServer = () => {
  const typeDefs = gql`
    ${userTypes}

    type Query {
      signUp: String
    }

    ${userTypeDefs}
  `;

  const resolvers = {
    Mutation: {
      ...userMutation,
    },
  };

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({
      models: {
        User: new User(mongoose.model('User')),
      },
    }),
  });

  return apolloServer;
};
