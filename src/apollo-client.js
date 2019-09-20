import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost'

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: process.env.REACT_APP_APOLLO_SERVER_HOST + '/graphql'
})

const apolloClient = new ApolloClient({
  cache,
  link
})

export default apolloClient
