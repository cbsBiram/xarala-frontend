import React from 'react'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import Loading from '../../../components/Shared/Loading'
import { SINGLE_COURSE_QUERY } from '../../../utils/constants'
import CourseLessons from '../../../components/Course/CourseLessons'
import Page from '../../../layouts/Page'

const Lesson = () => {
  const router = useRouter()
  const { slug } = router.query

  const { loading, error, data } = useQuery(SINGLE_COURSE_QUERY, {
    variables: {
      courseSlug: slug,
    },
  })
  if (loading) return <Loading />

  return (
    <>
      <CourseLessons course={data.course} />
    </>
  )
}

Lesson.layout = Page
export default Lesson
