import withApollo, { InitApolloOptions } from 'next-with-apollo';
import ApolloClient, { InMemoryCache, NormalizedCacheObject } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

export default withApollo(
  ({ initialState }: InitApolloOptions<NormalizedCacheObject>): any => {
    return new ApolloClient({
      uri: `${process.env.BASE_URL}/graphql`,
      cache: new InMemoryCache().restore(initialState || {})
    });
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    }
  }
);
