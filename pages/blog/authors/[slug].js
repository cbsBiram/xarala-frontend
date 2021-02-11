import React from 'react'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { NextSeo } from 'next-seo'

import { POSTS_BY_AUTHOR } from '../../../utils/queries'
import Loading from '../../../components/Shared/Loading'
import Page from '../../../layouts/Page'
import AllPosts from '../../../components/Blog/AllPosts'

const PostByAuthor = () => {
  const router = useRouter()
  const { slug } = router.query

  const { loading, error, data } = useQuery(POSTS_BY_AUTHOR, {
    variables: {
      authorId: slug ? slug.split('-').pop() : null,
    },
  })

  if (loading) return <Loading />
  if (error) return <h2>Error</h2>
  const { user: author } = data ? data : {}

  return (
    <>
      <NextSeo
        title={`Xarala Academy | ${author.firstName} ${author.lastName}`}
        description={`Lisez les article de ${author.lastName}`}
      />
      <AllPosts posts={author.getUserPosts} pages={1} currentPage={1} />
    </>
  )
}

PostByAuthor.layout = Page
export default PostByAuthor
