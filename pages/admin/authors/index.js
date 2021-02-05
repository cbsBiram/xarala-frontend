import React from 'react'
import { useQuery } from '@apollo/client'

import CardUsersTable from '../../../components/Cards/CardUsersTable'
import Loading from '../../../components/Shared/Loading'
import { ALL_AUTHORS_QUERY } from '../../../utils/queries'
import { withAuthSync } from '../../../utils/auth'

const Index = () => {
  const { loading, data } = useQuery(ALL_AUTHORS_QUERY)
  const { authors } = data ? data : []

  if (loading) return <Loading />

  return (
    <>
      <CardUsersTable users={authors} type="author" />
    </>
  )
}

export default withAuthSync(Index)
