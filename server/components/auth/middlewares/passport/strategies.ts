import { Strategy } from 'passport-strategy';

// Strategy get options(email, password) needed to authenticate user
// Strategy gets a callback function that will contain functionality to verify an user
// Strategy has to have "authenticate" function
// Strategy has access to "error" "fail" "success" functions
export class GraphqlStrategy extends Strategy {
  name: string;
  error: any;
  fail: any;
  success: any;

  constructor(protected verify: any) {
    super();

    if (!verify) {
      throw new Error('Graphql strategy requires a verify callback');
    }

    this.name = 'graphql';
  }

  authenticate(_, options) {
    const done = (error, user, info) => {
      if (error) {
        return this.error(error);
      }
      if (!user) {
        return this.fail(401);
      }

      return this.success(user, info);
    };

    this.verify(options, done);
  }
}
