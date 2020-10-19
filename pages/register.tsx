import { SignUp } from 'components/auth';
import { Mutation } from 'react-apollo';
import { SIGN_UP } from 'apollo/queries/portfolio';
import withApollo from 'hoc/withApollo';
import { Redirect } from 'components/navigation';

const Register = () => {
  const errorMessage = (error: any) => {
    return (error.graphQLErrors && error.graphQLErrors[0].message) || 'Ooooops something went wrong...';
  };

  return (
    <>
      <div className="bwm-form mt-5">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <h1 className="page-title">Register</h1>
            {
              <Mutation mutation={SIGN_UP}>
                {(signUpUser, { data, error }: any) => (
                  <>
                    <SignUp onSubmit={(registerData) => signUpUser({ variables: registerData })} />
                    {data && data.signUp && <Redirect to="/login" />}
                    {error && <div className="alert alert-danger">{errorMessage(error)}</div>}
                  </>
                )}
              </Mutation>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default withApollo(Register);
