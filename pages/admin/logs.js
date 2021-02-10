import React from 'react'
import { motion } from 'framer-motion'
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
  console.log('logs', usersLogs)

  if (loading) return <Loading />

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
    >
      {logs && <ListLogs currentPage={currentPage} pages={pages} logs={logs} />}
    </motion.div>
  )
}

export default withAuthSync(Logs)
