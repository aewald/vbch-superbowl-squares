import mongoose from 'mongoose';
import { ApolloServer, gql } from 'apollo-server-express';

import { buildAuthContext, userMutation, userTypes, userTypeDefs, userQueries, User } from '../components/auth';

export const createApolloServer = () => {
  const typeDefs = gql`
    ${userTypes}

    type Query {
      user: User
    }

    ${userTypeDefs}
  `;

  const resolvers = {
    Query: {
      ...userQueries
    },
    Mutation: {
      ...userMutation,
    },
  };

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({
      ...buildAuthContext(req),
      models: {
        User: new User(mongoose.model('User')),
      },
    }),
  });

  return apolloServer;
};