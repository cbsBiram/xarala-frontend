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
import ContainerTitle from '../Partials/ContainerTitle'

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
      <div className="relative block pt-8">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-center text-center">
            <div className="w-1/3 px-2">
              <div className="text-sm block my-4 p-3 text-gray-800 rounded border border-solid border-gray-200">
                <span
                  htmlFor="authors"
                  className="text-blue-400 font-semibold ml-2 mr-2"
                >
                  Auteurs :
                </span>
                <select
                  className="form-select bg-white border mr-2 rounded py-1"
                  name="authors"
                  id="authors"
                  defaultValue={authorId}
                  onChange={(e) => {
                    setAuthorId(e.target.value)
                    filterPostByAuthor(e)
                  }}
                >
                  <option value="0">Tous</option>
                  {authors &&
                    authors.map((author) => (
                      <option
                        key={author.id}
                        className="px-2"
                        value={author.id}
                      >
                        {author.firstName} {author.lastName}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="w-1/3 px-2">
              <div className="text-sm block my-4 p-3 text-gray-800 rounded border border-solid border-gray-200">
                <span
                  htmlFor="tags"
                  className="text-blue-400 font-semibold ml-2 mr-2"
                >
                  Tags :
                </span>
                <select
                  className="form-select bg-white border mr-2 rounded py-1"
                  name="tags"
                  id="tags"
                  defaultValue={tag}
                  onChange={(e) => {
                    setTag(e.target.value)
                    filterPostByTag(e)
                  }}
                >
                  <option value="">Tous</option>
                  {tags &&
                    tags.map((tag) => (
                      <option key={tag.id} className="px-2" value={tag.name}>
                        {tag.name}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="w-1/3 px-2">
              <div className="text-sm block my-4 p-3 text-gray-800 rounded border border-solid border-gray-200">
                <div className="w-full inline-flex text-gray-600 ml-3">
                  <input
                    className="border-2 border-gray-300 bg-white h-10 px-5 mr-4 rounded-lg text-sm focus:outline-none"
                    type="text"
                    name="search"
                    placeholder="Que souhaitez-vous apprendre ?"
                    defaultValue={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="right-0 top-0 mr-4 text-white rounded px-2 bg-blue-400 hover:bg-blue-500"
                    onClick={() => searchPosts()}
                  >
                    Rechercher
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-center text-center">
            <ContainerTitle title="Bienvenue dans l'univers de l'innovation technologique." />

            <div className="flex flex-wrap ">
              {posts &&
                posts.map((post) => <PostCard key={post.id} post={post} />)}
            </div>
            {pages > 1 && (
              <Pagination pages={pages} currentPage={currentPage} />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default AllPosts
