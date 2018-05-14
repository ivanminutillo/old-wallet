import { ApolloClient } from 'apollo-client'
import { withClientState } from 'apollo-link-state'
import { InMemoryCache } from 'apollo-cache-inmemory'

const cache = new InMemoryCache()

const defaults = {
  drawerVisibility: false
}

const client = new ApolloClient({
  cache,
  link: withClientState({ defaults, cache })
})

export default client
