import Link from 'next/link'
import React from 'react'
import PostSideBar from './PostSideBar'
import dateformat from 'dateformat'
import { PostCard } from '../Partials/PostCard'

const AllPosts = ({ posts }) => {
  return (
    <>
      <div className="px-6 py-10 my-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-700 md:text-2xl">
            Bienvenue dans l'univers de l'innovation technologique.
          </h1>
        </div>
        <div className="flex justify-between container mx-auto">
          <div className="flex flex-wrap">
            {posts &&
              posts.map((post) => <PostCard key={post.id} post={post} />)}
          </div>
        </div>
      </div>
    </>
  )
}

export default AllPosts
