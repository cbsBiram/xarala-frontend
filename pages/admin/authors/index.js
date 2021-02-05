import React from 'react'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

import CardUsersTable from '../../../components/Cards/CardUsersTable'
import Loading from '../../../components/Shared/Loading'
import { ALL_AUTHORS_QUERY } from '../../../utils/queries'
import { withAuthSync } from '../../../utils/auth'

const Index = () => {
  const router = useRouter()
  const { page } = router.query
  const currentPage = page ? page : 1
  const { loading, data } = useQuery(ALL_AUTHORS_QUERY, {
    variables: { page: currentPage },
  })

  const { authors } = data ? data : []
  const { objects: users, pages } = authors ? authors : []

  if (loading) return <Loading />

  return (
    <>
      <CardUsersTable
        users={users}
        type="author"
        currentPage={currentPage}
        pages={pages}
      />
    </>
  )
}

export default withAuthSync(Index)
