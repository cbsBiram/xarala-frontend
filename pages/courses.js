import { useQuery } from '@apollo/client'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import React from 'react'

import AllCourses from '../components/Course/Courses'
import Loading from '../components/Shared/Loading'
import Page from '../layouts/Page'
import {
  ALL_CATEGORIES,
  ALL_COURSES_QUERY,
  ALL_TEACHERS_QUERY,
} from '../utils/queries'

const Courses = () => {
  const router = useRouter()
  const { page } = router.query

  const currentPage = page ? page : 1
  const {
    data: coursesData,
    errors: coursesErrors,
    loading: loadingCourses,
  } = useQuery(ALL_COURSES_QUERY, {
    variables: { search: '', page: currentPage },
  })
  const {
    data: teachersData,
    errors: teachersErrors,
    loading: loadingTeachers,
  } = useQuery(ALL_TEACHERS_QUERY, {
    variables: { page: currentPage },
  })
  const {
    data: categoriesData,
    errors: categoriesErrors,
    loading: loadingCategories,
  } = useQuery(ALL_CATEGORIES)

  const { objects: courses, pages } = coursesData ? coursesData.allCourses : {}
  const { categories } = categoriesData ? categoriesData : {}
  const { objects: users } = teachersData ? teachersData.teachers : {}

  if (loadingCourses || loadingCategories || loadingTeachers) return <Loading />
  if (coursesErrors || categoriesErrors || teachersErrors) return <h2>Error</h2>

  return (
    <>
      <NextSeo
        title={`Xarala Academy | Nos cours`}
        description={`Découvrez tous nos cours`}
      />

      <AllCourses
        allCourses={courses}
        pages={pages}
        currentPage={currentPage}
        categories={categories}
        teachers={users}
      />
    </>
  )
}

Courses.layout = Page
export default Courses
