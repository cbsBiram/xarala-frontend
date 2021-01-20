import React from 'react'
import { motion } from 'framer-motion'

// components
import CardMyCourses from 'components/Cards/CardMyCourses.js'
import CardPageVisits from 'components/Cards/CardPageVisits.js'
import CardSocialTraffic from 'components/Cards/CardSocialTraffic.js'

// layout for page
import Loading from '../../components/Shared/Loading'
import { withAuthSync } from '../../utils/auth'
import { useQuery } from '@apollo/client'
import { DASHBOARD_INFO_QUERY } from '../../utils/constants'
import CardCategories from '../../components/Cards/CardCategories'

const Dashboard = () => {
  const { loading, error, data } = useQuery(DASHBOARD_INFO_QUERY)
  const allData = data ? data : {}
  const { latestCourses: allCourses, me, categories } = allData
  let { coursesEnrolled } = me ? me : []

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
    >
      <div className="flex flex-wrap">
        <div className="w-full xl:w-10/12 mb-12 xl:mb-0 px-4">
          <CardMyCourses
            courses={coursesEnrolled}
            title="Cours achetés"
            buttonTitle="Continuer"
          />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardMyCourses
            courses={allCourses}
            title="Cours populaires"
            buttonTitle="Acheter"
          />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardCategories categories={categories} />
        </div>
      </div>
    </motion.div>
  )
}

export default withAuthSync(Dashboard)
