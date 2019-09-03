import {
  Environment,
  Network,
  RecordSource,
  Store
} from 'relay-runtime'

function fetchQuery(operation, variables) {
  return fetch('http://localhost:4000/graphql', {
    method: 'POST',
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json()
  })
}

const network = Network.create(fetchQuery)
const source = new RecordSource()
const store = new Store(source)

export default new Environment({ network, store })
