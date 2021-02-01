import React from 'react'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { NextSeo } from 'next-seo'

import Loading from '../../components/Shared/Loading'
import Page from '../../layouts/Page'
import PostDetails from '../../components/Blog/PostDetails'
import { SINGLE_POST_QUERY } from '../../utils/constants'

const Post = () => {
  const router = useRouter()
  const { slug } = router.query

  const { loading, error, data } = useQuery(SINGLE_POST_QUERY, {
    variables: {
      postSlug: slug,
    },
  })

  if (loading) return <Loading />
  if (error) return <h2>Error</h2>
  const { post } = data ? data : {}

  return (
    <>
      <NextSeo
        title={`Xarala Academy | ${post.title}`}
        description={`Lisez notre article sur ${post.title}`}
      />
      <PostDetails post={post} />
    </>
  )
}

Post.layout = Page
export default Post
