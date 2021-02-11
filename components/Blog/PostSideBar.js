import React from 'react'
import LatestPosts from './LatestPosts'

const PostSideBar = () => {
  return (
    <>
      <div className="-mx-8 w-4/12 hidden lg:block">
        <LatestPosts />
      </div>
    </>
  )
}

export default PostSideBar
