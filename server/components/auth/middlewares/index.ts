import { Application } from 'express';
import session from 'express-session';
import passport from 'passport';
import { initPassport } from './passport';
import { initSessionStore } from '../database';

export const initUserAuth = (server: Application) => {
  initPassport();

  const sess = {
    name: 'portfolio-session',
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 2 * 60 * 60 * 1000 },
    resave: false,
    saveUninitialized: false,
    store: initSessionStore()
  };

  server.use(session(sess));
  server.use(passport.initialize());
  server.use(passport.session());
};
