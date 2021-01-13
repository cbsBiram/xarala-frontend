import { useRouter } from 'next/router'
import React from 'react'
import { useQuery } from '@apollo/client'
import PostDetails from '../../components/Blog/PostDetails'
import Page from '../../layouts/Page'
import { SINGLE_POST_QUERY } from '../../utils/constants'
import Loading from '../../components/Shared/Loading'

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
  const post = data.post

  return (
    <>
      <PostDetails post={post} />
    </>
  )
}

Post.layout = Page
export default Post
