import React from 'react'
import { useQuery } from '@apollo/client'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

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

  let { course } = data ? data : {}

  if (loading) return <Loading />

  return (
    <>
      <>
        <NextSeo
          title={`Xarala Academy | ${course.title}`}
          description={`Découvrez notre cours sur ${course.title}`}
        />
        <CourseOverview course={course} />
      </>
    </>
  )
}

Course.layout = Page
export default Course
