import { useQuery } from '@apollo/client'
import React from 'react'
import { TAGS_QUERY } from '../../utils/queries'

const PostTags = () => {
  const { data, error, loading } = useQuery(TAGS_QUERY)
  if (loading) return <h2>Chargement</h2>
  const { tags } = data

  return (
    <>
      <div className="mt-10 px-8">
        <h1 className="mb-4 text-xl font-bold text-gray-700">Catégories</h1>
        <div className="flex flex-col bg-white px-4 py-6 max-w-sm mx-auto rounded-lg shadow-md">
          <ul>
            {tags &&
              tags.map((tag) => (
                <li>
                  <a
                    href={`/blog/tags/${tag.name}`}
                    className="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline"
                  >
                    - {tag.name}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default PostTags
