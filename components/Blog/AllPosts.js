import React, { useState } from 'react'
import { useLazyQuery } from '@apollo/client'

import Loading from '../Shared/Loading'
import Pagination from '../Shared/Pagination'
import {
  POSTS_AUTHOR,
  POSTS_BY_SEARCH,
  POSTS_BY_TAG,
} from '../../utils/queries'
import { PostCard } from '../Partials/PostCard'

const AllPosts = ({ allPosts, pages, currentPage, authors, tags }) => {
  const [query, setQuery] = useState('')
  const [authorId, setAuthorId] = useState('')
  const [tag, setTag] = useState('')
  const [posts, setPosts] = useState(allPosts)
  const [
    searchPosts,
    { called: postsCalled, loading: loadingPosts },
  ] = useLazyQuery(POSTS_BY_SEARCH, {
    variables: { query },
    onCompleted: (data) => setPosts(data.postsBySearch),
  })
  const [
    filterByTag,
    { called: tagsCalled, loading: loadingTags },
  ] = useLazyQuery(POSTS_BY_TAG, {
    variables: { tagName: tag },
    onCompleted: (data) => {
      setPosts(data.postsByTag)
    },
  })
  const [
    filterByAuthor,
    { called: authorsCalled, loading: loadingAuthors },
  ] = useLazyQuery(POSTS_AUTHOR, {
    variables: { userId: authorId },
    onCompleted: (data) => {
      setPosts(data.postsByAuthor)
    },
  })

  const filterPostByTag = async (event) => {
    event.preventDefault()
    await filterByTag()
  }

  const filterPostByAuthor = async (event) => {
    event.preventDefault()
    await filterByAuthor()
  }

  let called = postsCalled || tagsCalled || authorsCalled
  let loading = loadingPosts || loadingTags || loadingAuthors

  if (called && loading) return <Loading />

  return (
    <>
      <div className="block">
        <div
          className="flex flex-wrap w-full justify-end items-center bg-gray-200 px-6 mb-5 pt-16 pb-5"
          style={{ width: '105%' }}
        >
          <table>
            <tbody>
              <td style={{ width: '40%' }}>
                <label class="flex inline-flex items-center bg-white py-1 rounded mr-2">
                  <span
                    htmlFor="authors"
                    class="text-blue-400 font-semibold ml-2 mr-2"
                  >
                    Auteurs :
                  </span>
                  <select
                    class="form-select bg-white border mr-2 rounded py-1"
                    name="authors"
                    id="authors"
                    defaultValue={authorId}
                    onChange={(e) => {
                      setAuthorId(e.target.value)
                      filterPostByAuthor(e)
                    }}
                  >
                    <option value="0">Tous</option>
                    {authors.map((author) => (
                      <option
                        key={author.id}
                        className="px-2"
                        value={author.id}
                      >
                        {author.firstName} {author.lastName}
                      </option>
                    ))}
                  </select>
                </label>
              </td>
              <td style={{ width: '40%' }}>
                <label class="flex inline-flex items-center bg-white py-1 rounded ml-2">
                  <span
                    htmlFor="tags"
                    class="text-blue-400 font-semibold ml-2 mr-2"
                  >
                    Tags :
                  </span>
                  <select
                    class="form-select bg-white border mr-2 rounded py-1"
                    name="tags"
                    id="tags"
                    defaultValue={tag}
                    onChange={(e) => {
                      setTag(e.target.value)
                      filterPostByTag(e)
                    }}
                  >
                    <option value="">Tous</option>
                    {tags.map((tag) => (
                      <option key={tag.id} className="px-2" value={tag.name}>
                        {tag.name}
                      </option>
                    ))}
                  </select>
                </label>
              </td>
              <td style={{ width: '20%' }}>
                <div class="w-full inline-flex text-gray-600 ml-3">
                  <input
                    class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                    type="text"
                    name="search"
                    placeholder="Que souhaitez-vous apprendre ?"
                    defaultValue={query}
                    onChange={(e) => setQuery(e.target.value)}
                    style={{ width: '350px' }}
                  />
                  <button
                    type="submit"
                    class="right-0 top-0 mr-4 text-white rounded px-2 bg-blue-400 hover:bg-blue-500"
                    onClick={() => searchPosts()}
                  >
                    Rechercher
                  </button>
                </div>
              </td>
            </tbody>
          </table>
        </div>
        <div className="px-6 py-10 my-4">
          <div className="flex items-center justify-between">
            <h1 className="text-center text-xl font-bold text-gray-700 md:text-2xl">
              Bienvenue dans l'univers de l'innovation technologique.
            </h1>
          </div>
          <div className="flex justify-between container mx-auto">
            <div className="flex flex-wrap">
              {posts &&
                posts.map((post) => <PostCard key={post.id} post={post} />)}
            </div>
          </div>
          {pages > 1 && <Pagination pages={pages} currentPage={currentPage} />}
        </div>
      </div>
    </>
  )
}

export default AllPosts
