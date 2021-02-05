import { useQuery } from '@apollo/client'
import React from 'react'
import Posts from '../../../components/Dashboard/Posts'
import Loading from '../../../components/Shared/Loading'

import { withAuthSync } from '../../../utils/auth'
import { ME_QUERY } from '../../../utils/constants'

const Index = () => {
  const { error, loading, data } = useQuery(ME_QUERY)
  const { me } = data ? data : []
  if (loading) return <Loading />

  return (
    <>
      <Posts user={me} />
    </>
  )
}

export default withAuthSync(Index)
