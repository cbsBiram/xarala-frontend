import React from 'react'
import { useQuery } from '@apollo/client'

import CardUsersTable from '../../../components/Cards/CardUsersTable'
import Loading from '../../../components/Shared/Loading'
import { ALL_STUDENTS_QUERY } from '../../../utils/queries'
import { useRouter } from 'next/router'
import { withAuthSync } from '../../../utils/auth'

const Index = () => {
  const router = useRouter()
  const { page } = router.query
  const currentPage = page ? page : 1
  const { loading, data } = useQuery(ALL_STUDENTS_QUERY, {
    variables: { page: currentPage },
  })

  const { students } = data ? data : {}
  const { objects: users, pages } = students ? students : []

  if (loading) return <Loading />

  return (
    <>
      <CardUsersTable
        users={users}
        type="student"
        currentPage={currentPage}
        pages={pages}
      />
    </>
  )
}

export default withAuthSync(Index)
