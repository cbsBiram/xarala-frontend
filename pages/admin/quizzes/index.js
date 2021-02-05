import React from 'react'
import { useQuery } from '@apollo/client'

import Loading from '../../../components/Shared/Loading'
import Quizzes from '../../../components/Dashboard/Quizzes'
import { ME_QUERY } from '../../../utils/constants'
import { withAuthSync } from '../../../utils/auth'

const Index = () => {
  const { loading, data } = useQuery(ME_QUERY)

  const { me } = data ? data : []

  if (loading) return <Loading />

  return (
    <>
      <Quizzes user={me} />
    </>
  )
}

export default withAuthSync(Index)
