import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import React from 'react'
import CourseOverview from '../../components/Course/CourseOverview'
import Loading from '../../components/Shared/Loading'
import Page from '../../layouts/Page'
import { SINGLE_COURSE_QUERY } from '../../utils/constants'

const Course = () => {
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
      <CourseOverview course={data.course} />
    </>
  )
}

Course.layout = Page
export default Course
