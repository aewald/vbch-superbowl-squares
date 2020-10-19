import { useMutation, useLazyQuery, useQuery } from '@apollo/react-hooks';
import { GET_USER, SIGN_IN, SIGN_OUT } from '../queries/auth';

export const useSignIn = () =>
  useMutation(SIGN_IN, {
    update(cache, { data: { signIn: signedInUser } }) {
      cache.writeQuery({
        query: GET_USER,
        data: { user: signedInUser }
      });
    }
  });

export const useSignOut = () => useMutation(SIGN_OUT);
export const useLazyGetUser = () => useLazyQuery(GET_USER);
export const useGetUser = () => useQuery(GET_USER)
