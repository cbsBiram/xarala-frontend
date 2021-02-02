import React from 'react'

import { useQuery } from '@apollo/client'
import Page from '../layouts/Page'
import { COURSES_AND_POSTS_QUERY } from '../utils/constants'
import Home from '../components/Pages/Home'

export default function Index() {
  const { loading, error, data } = useQuery(COURSES_AND_POSTS_QUERY)

  const allData = data ? data : {}
  const { latestCourses: allCourses, latestPosts: allPosts } = allData

  return <Home allCourses={allCourses} allPosts={allPosts} />
}

Index.layout = Page
