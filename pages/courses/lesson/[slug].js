import React from 'react'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import Loading from '../../../components/Shared/Loading'
import { SINGLE_COURSE_QUERY } from '../../../utils/constants'
import CourseLessons from '../../../components/Course/CourseLessons'
import Page from '../../../layouts/Page'
import { SINGLE_LESSON_QUERY } from '../../../utils/queries'

const Lesson = () => {
  const router = useRouter()

  const { slug } = router.query

  const { loading, error, data } = useQuery(SINGLE_LESSON_QUERY, {
    variables: {
      lessonSlug: slug,
    },
  })
  if (loading) return <Loading />

  return (
    <>
      <CourseLessons lesson={data.lesson} />
    </>
  )
}

export default Lesson
