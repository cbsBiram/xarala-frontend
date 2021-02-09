import { useQuery } from '@apollo/client'
import Link from 'next/link'
import React from 'react'
import { createUUID } from '../../utils/common'
import { POST_AUTHORS } from '../../utils/queries'

const Authors = () => {
  const { data, error, loading } = useQuery(POST_AUTHORS)
  if (loading) return <h2>Chargement</h2>
  const { postAuthors: authors } = data
  const randomId = createUUID()
  return (
    <>
      <div className="px-8">
        <h1 className="mb-4 text-xl font-bold text-gray-700">Nos auteurs</h1>
        <div className="flex flex-col bg-white max-w-sm px-6 py-4 mx-auto rounded-lg shadow-md">
          <ul className="-mx-4">
            {authors &&
              authors.map((author) => (
                <li className="flex items-center">
                  <img
                    src={
                      author.avatar
                        ? `${process.env.MEDIA_URL}${author.avatar}`
                        : require('assets/img/team-2-800x800.jpg')
                    }
                    alt="avatar"
                    className="w-10 h-10 object-cover rounded-full mx-4"
                  />
                  <p>
                    <Link href={`/blog/authors/${author.id}${randomId}`}>
                      <a
                        href="#"
                        className="text-gray-700 font-bold mx-1 hover:underline"
                      >
                        {`${author.firstName} ${author.lastName}`}
                      </a>
                    </Link>

                    <span className="text-gray-700 text-sm font-light">
                      {author.getUserPosts.length} Articles
                    </span>
                  </p>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Authors
