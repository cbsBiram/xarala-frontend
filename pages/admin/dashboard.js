import React from 'react'
import { motion } from 'framer-motion'
import { useQuery } from '@apollo/client'

// components
import CardCategories from '../../components/Cards/CardCategories'
import CardMyCourses from 'components/Cards/CardMyCourses.js'
import Loading from '../../components/Shared/Loading'
import { CourseCard } from '../../components/Partials/CourseCard'
import { DASHBOARD_INFO_QUERY } from '../../utils/constants'
import { withAuthSync } from '../../utils/auth'
import StudentDashboard from '../../components/Partials/StudentDashboard'
import TeacherDashboard from '../../components/Partials/TeacherDashboard'

const Dashboard = () => {
  const { loading, error, data } = useQuery(DASHBOARD_INFO_QUERY)
  const allData = data ? data : {}
  const { latestCourses: allCourses, me, categories } = allData
  const user = me ? me : {}
  let { coursesEnrolled } = me ? me : []
  let { coursesCreated } = me ? me : []

  if (loading) return <Loading />

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
    >
      {user.isTeacher ? (
        <TeacherDashboard
          categories={categories}
          coursesCreated={coursesCreated}
        />
      ) : (
        <StudentDashboard
          allCourses={allCourses}
          categories={categories}
          coursesEnrolled={coursesEnrolled}
        />
      )}
    </motion.div>
  )
}

export default withAuthSync(Dashboard)
