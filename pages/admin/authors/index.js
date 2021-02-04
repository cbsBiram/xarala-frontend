import React from 'react'
import { useQuery } from '@apollo/client'

import Admin from '../../../layouts/Admin'
import CardUsersTable from '../../../components/Cards/CardUsersTable'
import Loading from '../../../components/Shared/Loading'
import { ALL_AUTHORS_QUERY } from '../../../utils/queries'

export default function Index() {
  const { loading, data } = useQuery(ALL_AUTHORS_QUERY)
  const { authors } = data ? data : []

  if (loading) return <Loading />

  return (
    <>
      <CardUsersTable users={authors} type="author" />
    </>
  )
}

Index.layout = Admin
