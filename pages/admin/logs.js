import React from 'react'

import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

import ListLogs from '../../components/Partials/ListLogs'
import Loading from '../../components/Shared/Loading'
import { ALL_USERS_LOGS } from '../../utils/queries'
import { withAuthSync } from '../../utils/auth'

const Logs = () => {
  const router = useRouter()
  const { page } = router.query
  const currentPage = page ? page : 1

  const { loading, data } = useQuery(ALL_USERS_LOGS, {
    variables: { page: currentPage },
  })

  const { usersLogs } = data ? data : {}
  const { objects: logs, pages } = usersLogs ? usersLogs : {}

  if (loading) return <Loading />

  return (
    <>
      {logs && <ListLogs currentPage={currentPage} pages={pages} logs={logs} />}
    </>
  )
}

export default withAuthSync(Logs)
