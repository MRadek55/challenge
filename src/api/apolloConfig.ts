import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { getTokenFromAsyncStorage } from '../utils/asyncStorage';

const httpLink = createHttpLink({
  uri: 'https://api-dev.foodstyles.com/graphql',
});

const authLink = setContext(async (_, { headers }) => {
  const token = await getTokenFromAsyncStorage();

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
