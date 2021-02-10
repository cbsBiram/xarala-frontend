import React from 'react'
import { NextSeo } from 'next-seo'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

import AllPosts from '../components/Blog/AllPosts'
import Loading from '../components/Shared/Loading'
import Page from '../layouts/Page'
import {
  ALL_AUTHORS_QUERY,
  ALL_POSTS_QUERY,
  TAGS_QUERY,
} from '../utils/queries'

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
  } = useQuery(ALL_AUTHORS_QUERY, {
    variables: { page: currentPage },
  })
  const { data: tagsData, errors: tagsErrors, loading: loadingTags } = useQuery(
    TAGS_QUERY
  )

  if (loadingPosts || loadingAuthors || loadingTags) return <Loading />
  if (postsErrors || authorsErrors || tagsErrors) return <h2>Error</h2>
  console.log('au', authorsData)
  const { objects: posts, pages } = postsData.posts
  const { objects: users } = authorsData.authors ? authorsData.authors : {}
  const { tags } = tagsData ? tagsData : {}

  console.log(tags)

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
