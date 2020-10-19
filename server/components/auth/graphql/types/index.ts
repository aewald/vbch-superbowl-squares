import { gql } from 'apollo-server-express';

export const userTypes = `
  type User {
    _id: ID,
    avatar: String
    username: String
    name: String
    email: String
    role: String
  }
  input SignUpInput {
    avatar: String
    username: String!
    name: String
    email: String!
    password: String!
    passwordConfirmation: String!
  }
  input SignInInput {
    email: String!
    password: String!
  }
`;

export const userTypeDefs = gql`
  type Mutation {
    signUp(input: SignUpInput): String
    signIn(input: SignInInput): User
    signOut: Boolean
  }
`;
