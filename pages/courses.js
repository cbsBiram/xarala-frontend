import { useQuery } from '@apollo/client'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import React from 'react'

import AllCourses from '../components/Course/Courses'
import Loading from '../components/Shared/Loading'
import Page from '../layouts/Page'
import { ALL_COURSES_QUERY } from '../utils/queries'

const Courses = () => {
  const router = useRouter()
  const { page } = router.query
  const currentPage = page ? page : 1
  const { data, errors, loading } = useQuery(ALL_COURSES_QUERY, {
    variables: { page: currentPage },
  })

  if (loading) return <Loading />
  if (errors) return <h2>Error</h2>
  const { objects: courses, pages } = data.allCourses
  return (
    <>
      <NextSeo
        title={`Xarala Academy | Nos cours`}
        description={`Découvrez tous nos cours`}
      />

      <AllCourses courses={courses} pages={pages} currentPage={currentPage} />
    </>
  )
}

Courses.layout = Page
export default Courses
