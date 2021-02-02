import Link from 'next/link'
import React from 'react'

const CardPosts = ({ posts }) => {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base">Vos article</h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              <Link href="/admin/posts/create">
                <button
                  className="bg-blue-400 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Ajouter
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="block w-full p-2 overflow-x-auto">
          <table className="items-center w-full bg-white border-collapse">
            <thead>
              <tr>
                <th className="px-6 bg-gray-100 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                  Titre
                </th>
                <th className="px-6 bg-gray-100 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                  Description
                </th>
                <th className="px-6 bg-gray-100 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                  Date de création
                </th>
                <th className="px-6 bg-gray-100 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"></th>
              </tr>
            </thead>
            <tbody>
              {posts ? (
                posts.map((post) => (
                  <tr key={post.id}>
                    <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left">
                      {post.title}
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                      {post.description}
                    </td>
                    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                      {post.publishDate}
                    </td>
                    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                      <>
                        <Link
                          as={`/admin/posts/details/${post.slug}`}
                          passHref
                          href="/admin/posts/details/[slug]"
                        >
                          <a href="#">
                            <i className="fas fa-eye text-green-500 text-lg"></i>
                          </a>
                        </Link>
                        <Link
                          as={`/admin/posts/edit/${post.slug}`}
                          passHref
                          href="/admin/posts/edit/[slug]"
                        >
                          <a href="#">
                            <i className="fas fa-edit text-red-500 ml-2 mr-2 text-lg"></i>
                          </a>
                        </Link>
                      </>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left">
                    Aucun article ecris pour le moment
                  </th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default CardPosts
