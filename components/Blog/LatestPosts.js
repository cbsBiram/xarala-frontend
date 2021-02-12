import { useQuery } from '@apollo/client'
import dateformat from 'dateformat'
import Link from 'next/link'
import React from 'react'
import { COURSES_AND_POSTS_QUERY } from '../../utils/constants'

const LatestPosts = () => {
  const { loading, error, data } = useQuery(COURSES_AND_POSTS_QUERY)

  if (loading) return <h2>Chargement...</h2>
  const { latestPosts } = data

  return (
    <>
      <div className="mt-10 px-8">
        <h1 className="mb-4 text-xl font-bold text-gray-700">
          Récemment publié
        </h1>

        {latestPosts &&
          latestPosts.map((post) => (
            <div
              className="flex flex-col bg-white px-8 py-6 max-w-sm mx-auto rounded-lg shadow-md mb-2"
              key={post.id}
            >
              <div className="flex justify-center items-center">
                <a
                  href="#"
                  className="px-2 py-1 bg-gray-600 text-sm text-green-100 rounded hover:bg-gray-500"
                >
                  {post.tags[0] ? post.tags[0].name : 'Xarala'}
                </a>
              </div>
              <div className="mt-4">
                <Link as={`/blog/${post.slug}`} passHref href="/blog/[slug]">
                  <a
                    href="#"
                    className="text-lg text-gray-700 font-medium hover:underline"
                  >
                    {post.title}
                  </a>
                </Link>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center">
                  <img
                    src={
                      post.author && post.author.avatar
                        ? `${process.env.MEDIA_URL}${post.author.avatar}`
                        : require('assets/img/placeholder.jpg')
                    }
                    alt={post.title}
                    className="w-8 h-8 object-cover rounded-full"
                  />
                  <a
                    href="#"
                    className="text-gray-700 text-sm mx-3 hover:underline"
                  >
                    {post.author
                      ? `${post.author.firstName} ${post.author.lastName}`
                      : 'Xarala'}
                  </a>
                </div>
                <span className="font-light text-sm text-gray-600">
                  {dateformat(post.publishDate, 'dd/mm/yyyy')}
                </span>
              </div>
            </div>
          ))}
      </div>
    </>
  )
}

export default LatestPosts
