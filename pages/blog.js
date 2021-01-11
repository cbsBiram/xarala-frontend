import React from 'react'
import AllPosts from '../components/Blog/AllPosts'
import Page from '../layouts/Page'

function Blog() {
  return (
    <>
      <AllPosts />
    </>
  )
}

Blog.layout = Page
export default Blog
