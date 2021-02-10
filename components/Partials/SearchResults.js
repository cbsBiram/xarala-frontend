import React from 'react'

import { CourseCard } from './CourseCard'
import { PostCard } from './PostCard'

const SearchResults = ({ data, query }) => {
  const courses = data.filter((item) => item.__typename === 'CourseType')
  const posts = data.filter((item) => item.__typename === 'PostType')

  return (
    <div className="pt-10">
      <div className="flex items-center justify-center bg-gray-200 leading-none rounded-full p-2 shadow text-teal text-sm mt-8 mb-4">
        <span className="inline-flex bg-green-500 text-white rounded-full w-6 h-6 px-3 justify-center items-center">
          <i className="fas fa-check"></i>
        </span>
        <span className="inline-flex px-2 text-gray-700 text-lg">
          {courses.length} cours et {posts.length} articles correspondants à "
          {query}" ont été trouvés.
        </span>
      </div>
      {courses.length ? (
        <div className="relative block">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-wrap justify-center text-center">
              <div className="w-full flex flex-1 flex-col items-center lg:w-7/12 px-4 mb-10">
                <h2 className="text-xl font-semibold text-gray-700">
                  Cours correspondant à
                  <span className="font-bold text-blue-400 ml-2 uppercase">
                    "{query}"
                  </span>
                </h2>
                <div
                  className="w-10 h-1 bg-blue-600 rounded mt-2"
                  style={{ marginBottom: '30px' }}
                ></div>
              </div>

              <div className="flex flex-wrap justify-center">
                {courses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {posts.length ? (
        <div className="relative block">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-wrap justify-center text-center">
              <div className="w-full flex flex-1 flex-col items-center lg:w-7/12 px-4 mb-10">
                <h1 className="text-xl font-semibold text-gray-700">
                  Articles correspondant à
                  <span className="font-bold text-blue-400 ml-2 uppercase">
                    "{query}"
                  </span>
                </h1>
                <div
                  className="w-10 h-1 bg-blue-600 rounded mt-2"
                  style={{ marginBottom: '30px' }}
                ></div>
              </div>
              <div className="flex container">
                <div className="flex flex-wrap justify-center w-full">
                  {posts &&
                    posts.map((post) => <PostCard key={post.id} post={post} />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default SearchResults
