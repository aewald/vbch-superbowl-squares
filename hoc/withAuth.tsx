import { useGetUser } from 'apollo/actions/auth';
import { Redirect } from 'components/navigation';

const withAuth = (WrappedComponent, role) => (props) => {
  const { data: { user } = {}, loading, error } = useGetUser();

  if (
    !loading &&
    (!user || error) &&
    typeof window !== 'undefined'
  ) {
    return <Redirect to="/login" />
  }

  // TODO: Send a message to login page
  if (user) {
    if (role && user.role !== role) {
      return <Redirect to="/login" />
    }

    return <WrappedComponent {...props} />
  }

  return <p>Authenticating...</p>;
}

export default withAuth;