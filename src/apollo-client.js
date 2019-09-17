import { ApolloClient } from 'react-apollo'

const apolloClient = new ApolloClient({
  uri: process.env.REACT_APP_APOLLO_SERVER_HOST
})

export default apolloClient
