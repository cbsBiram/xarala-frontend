import React from 'react'

const LatestPosts = () => {
  return (
    <>
      <div className="mt-10 px-8">
        <h1 className="mb-4 text-xl font-bold text-gray-700">
          Récemment publié
        </h1>
        <div className="flex flex-col bg-white px-8 py-6 max-w-sm mx-auto rounded-lg shadow-md">
          <div className="flex justify-center items-center">
            <a
              href="#"
              className="px-2 py-1 bg-gray-600 text-sm text-green-100 rounded hover:bg-gray-500"
            >
              Laravel
            </a>
          </div>
          <div className="mt-4">
            <a
              href="#"
              className="text-lg text-gray-700 font-medium hover:underline"
            >
              Build Your New Idea with Laravel Freamwork.
            </a>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                alt="avatar"
                className="w-8 h-8 object-cover rounded-full"
              />
              <a
                href="#"
                className="text-gray-700 text-sm mx-3 hover:underline"
              >
                Alex John
              </a>
            </div>
            <span className="font-light text-sm text-gray-600">
              Jun 1, 2020
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default LatestPosts
