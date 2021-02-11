import React from 'react'
import { NextSeo } from 'next-seo'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

import AllPosts from '../components/Blog/AllPosts'
import Loading from '../components/Shared/Loading'
import Page from '../layouts/Page'
import { ALL_POSTS_QUERY, LIST_AUTHORS, TAGS_QUERY } from '../utils/queries'

function Blog() {
  const router = useRouter()
  const { page } = router.query
  const currentPage = page ? page : 1
  const {
    loading: loadingPosts,
    errors: postsErrors,
    data: postsData,
  } = useQuery(ALL_POSTS_QUERY, {
    variables: { search: null, page: currentPage },
  })
  const {
    data: authorsData,
    errors: authorsErrors,
    loading: loadingAuthors,
  } = useQuery(LIST_AUTHORS)
  const { data: tagsData, errors: tagsErrors, loading: loadingTags } = useQuery(
    TAGS_QUERY
  )

  if (loadingPosts || loadingAuthors || loadingTags) return <Loading />
  if (postsErrors || authorsErrors || tagsErrors) return <h2>Error</h2>
  const { objects: posts, pages } = postsData.posts
  const { listAuthors: users } = authorsData ? authorsData : {}
  const { tags } = tagsData ? tagsData : {}

  return (
    <>
      <NextSeo
        title={`Xarala Academy | Blog`}
        description={`Consultez nos articles`}
      />
      <AllPosts
        allPosts={posts}
        pages={pages}
        currentPage={currentPage}
        tags={tags}
        authors={users}
      />
    </>
  )
}

Blog.layout = Page
export default Blog
