import React from 'react'
import { motion } from 'framer-motion'

import { withAuthSync } from '../../utils/auth'

const Dashboard = () => {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
    >
      {/* nous allons afficher ici les KPIS */}
    </motion.div>
  )
}

export default withAuthSync(Dashboard)
