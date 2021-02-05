import React from 'react'
import { useQuery } from '@apollo/client'

import CardUsersTable from '../../../components/Cards/CardUsersTable'
import Loading from '../../../components/Shared/Loading'
import { ALL_STUDENTS_QUERY } from '../../../utils/queries'
import { withAuthSync } from '../../../utils/auth'

const Index = () => {
  const { loading, data } = useQuery(ALL_STUDENTS_QUERY)
  const { students } = data ? data : []

  if (loading) return <Loading />

  return (
    <>
      <CardUsersTable users={students} type="student" />
    </>
  )
}

export default withAuthSync(Index)
