import React from 'react'
import PropTypes from 'prop-types'
import { useQuery } from '@apollo/client'

// components

import TableDropdown from 'components/Dropdowns/TableDropdown.js'
import { ALL_CHAPTERS_COURSE } from '../../utils/queries'
import Link from 'next/link'

export default function CardChapterTable({ color, courseSlug }) {
  const { loading, errors, data: chaptersData } = useQuery(
    ALL_CHAPTERS_COURSE,
    {
      variables: {
        courseSlug: courseSlug,
      },
    }
  )

  let { chaptersCourse: chapters } = chaptersData ? chaptersData : {}
  console.log('Chapters', chapters)

  return (
    <>
      <div
        className={
          'relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded ' +
          (color === 'light' ? 'bg-white' : 'bg-gray-800 text-white')
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  'font-semibold text-lg ' +
                  (color === 'light' ? 'text-gray-800' : 'text-white')
                }
              >
                Liste des chapitres
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Chapters table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left ' +
                    (color === 'light'
                      ? 'bg-gray-100 text-gray-600 border-gray-200'
                      : 'bg-gray-700 text-gray-300 border-gray-600')
                  }
                ></th>
                <th
                  className={
                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left ' +
                    (color === 'light'
                      ? 'bg-gray-100 text-gray-600 border-gray-200'
                      : 'bg-gray-700 text-gray-300 border-gray-600')
                  }
                >
                  #
                </th>
                <th
                  className={
                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left ' +
                    (color === 'light'
                      ? 'bg-gray-100 text-gray-600 border-gray-200'
                      : 'bg-gray-700 text-gray-300 border-gray-600')
                  }
                >
                  Titre
                </th>
                <th
                  className={
                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left ' +
                    (color === 'light'
                      ? 'bg-gray-100 text-gray-600 border-gray-200'
                      : 'bg-gray-700 text-gray-300 border-gray-600')
                  }
                ></th>
              </tr>
            </thead>
            <tbody>
              {chapters &&
                chapters.map((chapter) => (
                  <tr key={chapter.id}>
                    <td className="border-t-0 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-1 text-left">
                      <TableDropdown />
                    </td>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex jusify- items-center">
                      {chapter.id}
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 font-bold">
                      {chapter.name}
                    </td>
                    <td>
                      {/* <Link
                        as={`/admin/courses/chapters/details/${courseSlug}?section=${chapter.slug}`}
                        passHref
                        href="/admin/courses/chapters/details/[slug]?section=[chapterSlug]"
                      >
                        <a href="#">
                          <i className="fas fa-edit text-red-500 ml-2 mr-2 text-lg"></i>
                        </a>
                      </Link> */}
                      <Link
                        as={`/admin/courses/chapters/details/${courseSlug}?section=${chapter.slug}`}
                        passHref
                        href="/admin/courses/chapters/details/[slug]?section=[chapterSlug]"
                      >
                        <a href="#">
                          <i className="fas fa-eye text-green-500 text-lg"></i>
                        </a>
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

CardChapterTable.defaultProps = {
  color: 'light',
}

CardChapterTable.propTypes = {
  color: PropTypes.oneOf(['light', 'dark']),
}
