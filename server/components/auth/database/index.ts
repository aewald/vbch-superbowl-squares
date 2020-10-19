import session from 'express-session';
import connectMongoDBSession from 'connect-mongodb-session';

const MongoDBStore = connectMongoDBSession(session);

export const initSessionStore = () => {
  const store = new MongoDBStore({
    uri: process.env.DB_URI,
    collection: 'userSessions'
  });

  return store;
};
