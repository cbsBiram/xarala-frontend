import React from 'react'
import dateformat from 'dateformat'
import Link from 'next/link'

export const PostCard = ({ post }) => {
  return (
    <div className=" w-full md:w-4/12 px-4 text-center my-2">
      <Link as={`/blog/${post.slug}`} passHref href="/blog/[slug]">
        <a href="#">
          <div className="bg-white shadow-lg overflow-hidden border-b-4 border-blue-500 rounded-lg">
            <img
              src={
                post.imageUrl
                  ? post.imageUrl
                  : `${process.env.MEDIA_URL}${post.image}`
              }
              alt={post.title}
              className="h-full w-full object-cover object-center"
            />
            <div className="p-4 md:p-6">
              <p className="text-blue-500 font-semibold text-xs mb-1 leading-none">
                {post.tags[0].name}
              </p>
              <h3 className="font-semibold mb-2 text-xl leading-tight sm:leading-normal">
                {post.title}
              </h3>

              <div className="text-sm flex items-center">
                <i className="far fa-user mx-2"></i>

                <p className="leading-none">
                  Par{' '}
                  {post.author
                    ? `${post.author.firstName} ${post.author.lastName}`
                    : 'Xarala'}
                  , le {dateformat(post.publishDate, 'dd/mm/yyyy')}.
                </p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}
