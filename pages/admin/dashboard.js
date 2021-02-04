import React from 'react'
import { motion } from 'framer-motion'
import { useQuery } from '@apollo/client'

import AdminKpis from '../../components/Dashboard/AdminKpis'
import Loading from '../../components/Shared/Loading'
import { ALL_USERS_QUERY } from '../../utils/queries'
import { withAuthSync } from '../../utils/auth'
import { ME_QUERY } from '../../utils/constants'

const Dashboard = () => {
  const { loading, data } = useQuery(ALL_USERS_QUERY)
  const { users } = data ? data : {}

  const { data: userData } = useQuery(ME_QUERY)
  const { me } = userData ? userData : {}

  if (loading) return <Loading />

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
    >
      {/* nous allons afficher ici les KPIS */}
      {me.isStaff && <AdminKpis users={users} />}
    </motion.div>
  )
}

export default withAuthSync(Dashboard)
