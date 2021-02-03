import React from 'react'
import CardPosts from '../Cards/CardPosts'

const Posts = ({ user }) => {
  return (
    <>
      <CardPosts posts={user.getUserPosts} />
    </>
  )
}

export default Posts
