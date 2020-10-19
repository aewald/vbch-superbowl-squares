// Index page to outsource
import { userSchema } from './database/models';

export const UserSchema = userSchema();
export { buildAuthContext } from './graphql/context';
export { initUserAuth } from './middlewares';
export { userMutation, userQueries } from './graphql/resolvers';
export { userTypes, userTypeDefs } from './graphql/types';
export { User } from './graphql/models';
