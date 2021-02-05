import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import React from 'react'
import EditPostForm from '../../../../components/Forms/EditPost'
import Loading from '../../../../components/Shared/Loading'

import { withAuthSync } from '../../../../utils/auth'
import { SINGLE_POST_QUERY } from '../../../../utils/constants'

const EditPost = () => {
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
      <EditPostForm post={post} />
    </>
  )
}

export default withAuthSync(EditPost)
