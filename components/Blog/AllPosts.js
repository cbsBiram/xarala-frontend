import Link from 'next/link'
import React from 'react'
import PostSideBar from './PostSideBar'
import dateformat from 'dateformat'

const AllPosts = ({ posts }) => {
  return (
    <h2>
      <div className="px-6 py-10 my-4">
        <div className="flex justify-between container mx-auto">
          <div className="w-full lg:w-8/12">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold text-gray-700 md:text-2xl">
                Le blog de Xarala
              </h1>
              <div>
                <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  <option>Derniers articles</option>
                  <option>Python</option>
                  <option>Django</option>
                  <option>JavaScript</option>
                </select>
              </div>
            </div>

            {posts &&
              posts.map((post) => (
                <div className="mt-6" key={post.id}>
                  <div className="max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
                    <div className="flex justify-between items-center">
                      <span className="font-light text-gray-600">
                        {dateformat(post.pub, 'dd/mm/yyyy')}
                      </span>
                      <a
                        href="#"
                        className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500"
                      >
                        {post.tags[0].name}
                      </a>
                    </div>
                    <div className="mt-2">
                      <Link
                        as={`/blog/${post.slug}`}
                        passHref
                        href="/blog/[slug]"
                      >
                        <a className="text-2xl text-gray-700 font-bold hover:underline">
                          {post.title}
                        </a>
                      </Link>

                      <div
                        dangerouslySetInnerHTML={{
                          __html: post.content,
                        }}
                      />
                      {/* {post.content} */}
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <Link as={`/blog/${post.slug}`} href="/blog/[slug]">
                        <a className="text-blue-500 hover:underline">
                          Lire plus
                        </a>
                      </Link>
                      <div>
                        <a href="#" className="flex items-center">
                          <img
                            src={`${process.env.MEDIA_URL}${post.author.avatar}`}
                            alt="avatar"
                            className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                          />
                          <h1 className="text-gray-700 font-bold hover:underline">
                            {post.author.firstName} {post.author.lastName}
                          </h1>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <PostSideBar />
        </div>
      </div>
    </h2>
  )
}

export default AllPosts
