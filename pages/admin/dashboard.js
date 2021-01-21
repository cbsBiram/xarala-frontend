import React from 'react'
import { motion } from 'framer-motion'

// components
import CardMyCourses from 'components/Cards/CardMyCourses.js'

// layout for page
import Loading from '../../components/Shared/Loading'
import { withAuthSync } from '../../utils/auth'
import { useQuery } from '@apollo/client'
import { DASHBOARD_INFO_QUERY } from '../../utils/constants'
import CardCategories from '../../components/Cards/CardCategories'
import { CourseCard } from '../../components/Partials/CourseCard'

const Dashboard = () => {
  const { loading, error, data } = useQuery(DASHBOARD_INFO_QUERY)
  const allData = data ? data : {}
  const { latestCourses: allCourses, me, categories } = allData
  const { coursesEnrolled } = me ? me : []

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
    >
      <div className="relative flex min-w-0 break-words w-full mb-6 shadow-lg rounded bg-gray-800">
        <div className="mb-12 md:mb-0 px-4">
          <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3 className="font-semibold text-base text-white">
                  Cours les plus récents
                </h3>
              </div>
              <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                <a href="/courses">
                  <button
                    className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Voir plus
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center text-center ">
            {allCourses &&
              allCourses.length &&
              allCourses.map((course) => <CourseCard course={course} />)}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full md:w-8/12 mb-12 xl:mb-0 px-4">
          <CardMyCourses
            courses={coursesEnrolled}
            displayDate={true}
            title="Cours achetés"
            buttonTitle="Continuer"
          />
        </div>
        <div className="w-full md:w-4/12 px-4">
          <CardCategories categories={categories} />
        </div>
      </div>
    </motion.div>
  )
}

export default withAuthSync(Dashboard)
