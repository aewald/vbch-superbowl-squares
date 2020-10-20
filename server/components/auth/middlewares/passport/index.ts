import { GraphqlStrategy } from './strategies';
import passport from 'passport';
import { UserSchema } from '../../index';

export const initPassport = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    UserSchema.findById(id, (error, user) => {
      done(error, user);
    });
  });

  return passport.use(
    'graphql',
    new GraphqlStrategy(({ email, password }, done) => {
      UserSchema.findOne({ email }, (error, user) => {
        if (error) {
          return done(error);
        }
        if (!user) {
          return done(null, false);
        }

        // TODO: Check user password if its maching password from options
        user.validatePassword(password, (error, isMatching) => {
          if (error) {
            return done(error);
          }
          if (!isMatching) {
            return done(null, false);
          }

          return done(null, user);
        });
      });
    })
  );
};
