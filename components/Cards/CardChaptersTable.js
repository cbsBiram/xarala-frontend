import React, { useState } from 'react'
import PropTypes from 'prop-types'

import ChapterDropdown from '../Dropdowns/ChapterDropdown'
import QuizDropdown from '../Dropdowns/QuizDropdown'
import TablePagination from '../Shared/TablePagination'
import { paginate } from '../../utils/common'

export default function CardChapterTable({ color, chapters, course }) {
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 5
  const { slug: courseSlug } = course ? course : ''

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const paginatedChapters = paginate(chapters, currentPage, pageSize)

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
        <div className="block w-full overflow-x-auto px-10">
          {/* Chapters table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    'px-2 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left ' +
                    (color === 'light'
                      ? 'bg-gray-100 text-gray-600 border-gray-200'
                      : 'bg-gray-700 text-gray-300 border-gray-600')
                  }
                >
                  #
                </th>
                <th
                  className={
                    'px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left ' +
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
              {paginatedChapters ? (
                paginatedChapters.map((chapter) => (
                  <>
                    <tr key={chapter.id}>
                      <th className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex jusify- items-center">
                        {chapter.id}
                      </th>
                      <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 font-bold">
                        {chapter.name}
                      </td>
                      <td className="flex flex-wrap justify-center items-center">
                        <ChapterDropdown
                          chapter={chapter}
                          courseSlug={courseSlug}
                        />
                      </td>
                    </tr>
                    {chapter.quiz && (
                      <tr
                        className="bg-gray-800 text-white"
                        key={chapter.quiz + 500}
                      >
                        <th className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex jusify- items-center"></th>
                        <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 font-bold">
                          {chapter.quiz.title} (EXERCICE)
                        </td>
                        <td className="flex flex-wrap justify-center items-center">
                          <QuizDropdown
                            quiz={chapter.quiz}
                            chapterSlug={chapter.slug}
                            courseSlug={courseSlug}
                          />
                        </td>
                      </tr>
                    )}
                  </>
                ))
              ) : (
                <tr>Aucun chapitre ajouté pour le moment</tr>
              )}
            </tbody>
          </table>
          {chapters && (
            <TablePagination
              itemsCount={chapters}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          )}
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
