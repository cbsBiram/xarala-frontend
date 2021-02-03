import dateformat from 'dateformat'
import Link from 'next/link'
import React from 'react'
import PostDropdown from '../Dropdowns/PostDropdown'

export default function CardPosts({ posts }) {
  return (
    <>
      <div
        className={
          'relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white'
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className={'font-semibold text-lg  text-gray-800'}>
                Mes articles
              </h3>
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
        {posts ? (
          <div className="block w-full overflow-x-auto">
            {/* Projects table */}
            <table className="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  <th
                    className={
                      'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200'
                    }
                  >
                    Titre
                  </th>
                  <th
                    className={
                      'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200 '
                    }
                  >
                    Description
                  </th>
                  <th
                    className={
                      'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200'
                    }
                  >
                    Date de création
                  </th>
                  <th
                    className={
                      'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200'
                    }
                  >
                    Status
                  </th>
                  <th
                    className={
                      'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200'
                    }
                  ></th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center">
                      <img
                        src={
                          post.imageUrl
                            ? post.imageUrl
                            : `${process.env.MEDIA_URL}${post.image}`
                        }
                        className="h-12 w-12 bg-white rounded-full border"
                        alt="..."
                      ></img>{' '}
                      <span className={'ml-3 font-bold text-gray-700'}>
                        {post.title}
                      </span>
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                      {post.description}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                      {dateformat(post.timestamp, 'dd/mm/yyyy')}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                      {post.published ? (
                        <>
                          {' '}
                          <i className="fas fa-circle text-green-500 mr-2"></i>{' '}
                          Publié le {dateformat(post.publishDate, 'dd/mm/yyyy')}
                        </>
                      ) : (
                        <>
                          <i className="fas fa-circle text-orange-500 mr-2"></i>{' '}
                          Non publié{' '}
                        </>
                      )}
                    </td>

                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-right">
                      <PostDropdown post={post} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <h2> Aucun article ecris pour le moment</h2>
        )}
      </div>
    </>
  )
}
