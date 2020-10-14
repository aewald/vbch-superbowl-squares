import mongoose from 'mongoose';
import { ApolloServer, gql } from 'apollo-server-express';

import { buildAuthContext, userMutation, userTypes, userTypeDefs, User } from 'ae-auth';

export const createApolloServer = () => {
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
      ...buildAuthContext(),
      models: {
        User: new User(mongoose.model('User')),
      },
    }),
  });

  return apolloServer;
};