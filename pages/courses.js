import { useQuery } from '@apollo/client'
import React from 'react'
import { ALL_COURSES_QUERY } from '../utils/constants'
import AllCourses from '../components/Course/Courses'
import Loading from '../components/Shared/Loading'
import Page from '../layouts/Page'

const Courses = () => {
  const { data, error, loading } = useQuery(ALL_COURSES_QUERY)
  if (loading) return <Loading />

  return (
    <>
      <AllCourses courses={data.courses} />
    </>
  )
}

Courses.layout = Page
export default Courses
