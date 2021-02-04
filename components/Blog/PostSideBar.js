import React from 'react'
import Authors from './Authors'
import LatestPosts from './LatestPosts'
import PostTags from './PostTags'

const PostSideBar = () => {
  return (
    <>
      <div className="-mx-8 w-4/12 hidden lg:block">
        <Authors />
        <PostTags />
        <LatestPosts />
      </div>
    </>
  )
}

export default PostSideBar
