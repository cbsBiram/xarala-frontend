import React from 'react'
import PostDetails from '../../components/Blog/PostDetails'
import Page from '../../layouts/Page'

const Post = ({ post }) => {
  return (
    <>
      <PostDetails />
    </>
  )
}

Post.layout = Page
export default Post
