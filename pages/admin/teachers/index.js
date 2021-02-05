import React from 'react'
import { useQuery } from '@apollo/client'

import Admin from '../../../layouts/Admin'
import CardUsersTable from '../../../components/Cards/CardUsersTable'
import Loading from '../../../components/Shared/Loading'
import { ALL_TEACHERS_QUERY } from '../../../utils/queries'
import { withAuthSync } from '../../../utils/auth'

const Index = () => {
  const { loading, data } = useQuery(ALL_TEACHERS_QUERY)
  const { teachers } = data ? data : []

  if (loading) return <Loading />

  return (
    <>
      <CardUsersTable users={teachers} type="teacher" />
    </>
  )
}

export default withAuthSync(Index)
