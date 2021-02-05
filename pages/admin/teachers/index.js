import React from 'react'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

import CardUsersTable from '../../../components/Cards/CardUsersTable'
import Loading from '../../../components/Shared/Loading'
import { ALL_TEACHERS_QUERY } from '../../../utils/queries'
import { withAuthSync } from '../../../utils/auth'

const Index = () => {
  const router = useRouter()
  const { page } = router.query
  const currentPage = page ? page : 1
  const { loading, data } = useQuery(ALL_TEACHERS_QUERY, {
    variables: { page: currentPage },
  })

  const { teachers } = data ? data : []
  const { objects: users, pages } = teachers ? teachers : []

  if (loading) return <Loading />

  return (
    <>
      <CardUsersTable
        users={users}
        type="teacher"
        currentPage={currentPage}
        pages={pages}
      />
    </>
  )
}

export default withAuthSync(Index)
