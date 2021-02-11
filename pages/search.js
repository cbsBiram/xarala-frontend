import React from 'react'
import { useRouter } from 'next/router'

import Loading from '../components/Shared/Loading'
import Page from '../layouts/Page'
import { SEARCH_RESULTS } from '../utils/queries'
import { useQuery } from '@apollo/client'
import SearchResults from '../components/Search/SearchResults'

export default function Search() {
  const router = useRouter()
  const { q } = router.query
  const { loading, data } = useQuery(SEARCH_RESULTS, {
    variables: { query: q },
  })

  if (loading) return <Loading />

  return (
    <>
      <SearchResults data={data.homepageSearch} query={q} />
    </>
  )
}

Search.layout = Page
