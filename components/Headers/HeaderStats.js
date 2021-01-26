import React from 'react'
import { motion } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { useQuery } from '@apollo/client'

import CardStats from 'components/Cards/CardStats.js'
import { ALL_USER_QUIZZES } from '../../utils/constants'

export default function HeaderStats() {
  const { loading, error, data } = useQuery(ALL_USER_QUIZZES)
  let { me, allQuizzesUser: quizzes } = data ? data : {}
  let { coursesEnrolled } = me ? me : []

  let sumOfPrice = coursesEnrolled
    ? coursesEnrolled.reduce(
        (totalPrice, course) => totalPrice + parseInt(course.price, 10),
        0
      )
    : 0
  let averagePrice =
    coursesEnrolled && coursesEnrolled.length
      ? (sumOfPrice / coursesEnrolled.length).toString()
      : '0'

  // let sumOfScore = quizzes
  //   ? quizzes.reduce(
  //       (totalScore, quiz) => totalScore + parseInt(quiz.score, 10),
  //       0
  //     )
  //   : 0
  // let averageScore =
  //   quizzes && quizzes.length ? (sumOfScore / quizzes.length).toString() : '0'

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
    >
      <NextSeo
        title="Xarala Academy | Tableau de bord"
        description="Consultez votre tableau de bord"
      />
      {/* Header */}
      <div className="relative bg-gray-900 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="COURS"
                  statTitle={
                    coursesEnrolled ? coursesEnrolled.length.toString() : '0'
                  }
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-green-500"
                  statDescripiron="Since last month"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="QUIZS"
                  statTitle={quizzes ? quizzes.length.toString() : '0'}
                  statArrow="down"
                  statPercent="3.48"
                  statPercentColor="text-red-500"
                  statDescripiron="Since last week"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="PANIER MOYEN"
                  statTitle={averagePrice + '%'}
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-orange-500"
                  statDescripiron="Since yesterday"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
              {/* <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="SCORE MOYEN"
                  statTitle={averageScore + '%'}
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-green-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-percent"
                  statIconColor="bg-blue-500"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
