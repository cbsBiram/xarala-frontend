import { useMemo } from 'react'
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import cookie from 'js-cookie'

import fetch from 'cross-fetch'

const getToken = () => {
  let token = null
  if (typeof document !== 'undefined') {
    token = `JWT ${cookie.get('token')}`
  }
  return token
}

const cache = new InMemoryCache()
const link = createHttpLink({
  uri: process.env.API_URL,
  fetch,
  headers: { Authorization: getToken() },
})
let apolloClient

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'cache-and-network',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'cache-and-network',
    errorPolicy: 'all',
  },
  mutate: {
    errorPolicy: 'all',
  },
}

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    cache: cache,
    link: link,
    defaultOptions: defaultOptions,
  })
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient()

  if (initialState) {
    const existingCache = _apolloClient.extract()
    _apolloClient.cache.restore({ ...existingCache, ...initialState })
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient
  if (!apolloClient) apolloClient = _apolloClient
  return _apolloClient
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
