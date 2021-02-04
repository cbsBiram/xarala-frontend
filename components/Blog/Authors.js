import React from 'react'

const Authors = () => {
  return (
    <>
      <div className="px-8">
        <h1 className="mb-4 text-xl font-bold text-gray-700">Authors</h1>
        <div className="flex flex-col bg-white max-w-sm px-6 py-4 mx-auto rounded-lg shadow-md">
          <ul className="-mx-4">
            <li className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                alt="avatar"
                className="w-10 h-10 object-cover rounded-full mx-4"
              />
              <p>
                <a
                  href="#"
                  className="text-gray-700 font-bold mx-1 hover:underline"
                >
                  Alex John
                </a>
                <span className="text-gray-700 text-sm font-light">
                  Created 23 Posts
                </span>
              </p>
            </li>
            <li className="flex items-center mt-6">
              <img
                src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=333&amp;q=80"
                alt="avatar"
                className="w-10 h-10 object-cover rounded-full mx-4"
              />
              <p>
                <a
                  href="#"
                  className="text-gray-700 font-bold mx-1 hover:underline"
                >
                  Jane Doe
                </a>
                <span className="text-gray-700 text-sm font-light">
                  Created 52 Posts
                </span>
              </p>
            </li>
            <li className="flex items-center mt-6">
              <img
                src="https://images.unsplash.com/photo-1531251445707-1f000e1e87d0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=281&amp;q=80"
                alt="avatar"
                className="w-10 h-10 object-cover rounded-full mx-4"
              />
              <p>
                <a
                  href="#"
                  className="text-gray-700 font-bold mx-1 hover:underline"
                >
                  Lisa Way
                </a>
                <span className="text-gray-700 text-sm font-light">
                  Created 73 Posts
                </span>
              </p>
            </li>
            <li className="flex items-center mt-6">
              <img
                src="https://images.unsplash.com/photo-1500757810556-5d600d9b737d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=735&amp;q=80"
                alt="avatar"
                className="w-10 h-10 object-cover rounded-full mx-4"
              />
              <p>
                <a
                  href="#"
                  className="text-gray-700 font-bold mx-1 hover:underline"
                >
                  Steve Matt
                </a>
                <span className="text-gray-700 text-sm font-light">
                  Created 245 Posts
                </span>
              </p>
            </li>
            <li className="flex items-center mt-6">
              <img
                src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=373&amp;q=80"
                alt="avatar"
                className="w-10 h-10 object-cover rounded-full mx-4"
              />
              <p>
                <a
                  href="#"
                  className="text-gray-700 font-bold mx-1 hover:underline"
                >
                  Khatab Wedaa
                </a>
                <span className="text-gray-700 text-sm font-light">
                  Created 332 Posts
                </span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Authors
