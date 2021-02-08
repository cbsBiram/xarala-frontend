import React from 'react'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { NextSeo } from 'next-seo'

import { POST_BY_TAG } from '../../../utils/queries'
import Loading from '../../../components/Shared/Loading'
import Page from '../../../layouts/Page'
import AllPosts from '../../../components/Blog/AllPosts'

const PostByTag = () => {
  const router = useRouter()
  const { slug } = router.query

  const { loading, error, data } = useQuery(POST_BY_TAG, {
    variables: {
      tagName: slug,
    },
  })

  if (loading) return <Loading />
  if (error) return <h2>Error</h2>
  const { tag } = data ? data : {}

  return (
    <>
      <NextSeo
        title={`Xarala Academy | ${tag.name}`}
        description={`Lisez les article de ${tag.name}`}
      />
      <AllPosts posts={tag.getTagPosts} pages={1} currentPage={1} />
    </>
  )
}

PostByTag.layout = Page
export default PostByTag
