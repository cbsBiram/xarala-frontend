import { useQuery } from '@apollo/client'
import React from 'react'
import AllPosts from '../components/Blog/AllPosts'
import Loading from '../components/Shared/Loading'
import Page from '../layouts/Page'
import { ALL_POSTS_QUERY } from '../utils/constants'

function Blog() {
  const { loading, error, data } = useQuery(ALL_POSTS_QUERY)

  if (loading) return <Loading />
  if (error) return <h2>Error</h2>
  const posts = data.posts
  return (
    <>
      <AllPosts posts={posts} />
    </>
  )
}

Blog.layout = Page
Blog.pageTitle = 'Le blog de Xarala'
export default Blog
