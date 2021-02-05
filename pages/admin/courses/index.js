import { useQuery } from '@apollo/client'
import React from 'react'
import Courses from '../../../components/Dashboard/Courses'
import Loading from '../../../components/Shared/Loading'

import { withAuthSync } from '../../../utils/auth'
import { ME_QUERY } from '../../../utils/constants'

const Index = () => {
  const { error, loading, data } = useQuery(ME_QUERY)
  const { me } = data ? data : []

  if (loading) return <Loading />

  return (
    <>
      <Courses user={me} />
    </>
  )
}

export default withAuthSync(Index)
