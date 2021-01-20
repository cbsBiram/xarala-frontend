import { useQuery } from '@apollo/client'
import React from 'react'
import { ALL_COURSES_QUERY } from '../utils/constants'
import AllCourses from '../components/Course/Courses'
import Loading from '../components/Shared/Loading'
import Page from '../layouts/Page'

const Courses = () => {
  const { data, errors, loading } = useQuery(ALL_COURSES_QUERY)
  if (loading) return <Loading />
  if (errors) return <h2>Error</h2>

  return (
    <h2>
      <AllCourses courses={data.courses} />
    </h2>
  )
}

Courses.layout = Page
export default Courses
