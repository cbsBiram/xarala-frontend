import React from 'react'
import { NextSeo } from 'next-seo'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

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
      <NextSeo
        title={`Xarala Academy | Blog`}
        description={`Consultez nos articles`}
      />
      <AllPosts posts={posts} pages={pages} currentPage={currentPage} />
    </>
  )
}

Blog.layout = Page
export default Blog
