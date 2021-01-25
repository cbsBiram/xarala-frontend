import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import React from 'react'
import AllPosts from '../components/Blog/AllPosts'
import Loading from '../components/Shared/Loading'
import Page from '../layouts/Page'
import { ALL_POSTS_QUERY } from '../utils/queries'

function Blog() {
  const router = useRouter()
  const { page } = router.query
  const currentPage = page ? page : 1
  const { loading, error, data } = useQuery(ALL_POSTS_QUERY, {
    variables: { page: currentPage },
  })

  if (loading) return <Loading />
  if (error) return <h2>Error</h2>

  const { objects: posts, pages } = data.posts
  return (
    <>
      <AllPosts posts={posts} pages={pages} currentPage={currentPage} />
    </>
  )
}

Blog.layout = Page
Blog.pageTitle = 'Le blog de Xarala'
export default Blog
