import React from 'react'
import PostSideBar from './PostSideBar'
import dateformat from 'dateformat'

const PostDetails = ({ post }) => {
  return (
    <>
      <div className="px-6 py-8">
        <div className="flex justify-between container mx-auto">
          <div className="w-full lg:w-8/12">
            <h1 className="text-4xl text-center mb-4 font-semibold font-heading font-semibold">
              {post.title}
            </h1>
            <article>
              <p className="text-center">
                <span>{dateformat(post.pub, 'dd/mm/yyyy')}, par</span>
                <a className="ml-1 text-indigo-600 hover:underline" href="#">
                  {post.author.firstName} {post.author.lastName}
                </a>
              </p>
              <div
                className="max-w-3xl mx-auto"
                dangerouslySetInnerHTML={{
                  __html: post.content,
                }}
              />
            </article>

            {/* related articles */}
          </div>

          <PostSideBar />
        </div>
      </div>
    </>
  )
}

export default PostDetails
