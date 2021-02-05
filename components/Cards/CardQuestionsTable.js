import React, { useState } from 'react'
import PropTypes from 'prop-types'

import AnswerDropdown from '../Dropdowns/AnswerDropdown'
import QuestionDropdown from '../Dropdowns/QuestionDropdown'
import { paginate } from '../../utils/common'
import TablePagination from '../Shared/TablePagination'

export default function CardQuestionsTable({ color, questions, chapterSlug }) {
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 5

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const paginatedQuestions = paginate(questions, currentPage, pageSize)

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
                Liste des questions
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
              {paginatedQuestions ? (
                paginatedQuestions.map((question) => (
                  <>
                    <tr key={question.id}>
                      <th className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex jusify- items-center">
                        {question.id}
                      </th>
                      <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 font-bold">
                        {question.label}
                      </td>
                      <td className="flex flex-wrap justify-center items-center">
                        <QuestionDropdown
                          question={question}
                          chapterSlug={chapterSlug}
                        />
                      </td>
                    </tr>
                    {question.answers &&
                      question.answers.map((answer) => (
                        <tr className="bg-gray-700 text-white">
                          <th className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex jusify- items-center"></th>
                          <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 font-bold">
                            {answer.isCorrect ? (
                              <i className="far fa-check-circle text-green-500 text-lg"></i>
                            ) : (
                              <i class="fas fa-ban text-red-500 text-lg"></i>
                            )}
                            <span className="ml-2">
                              {answer.label} (EXERCICE)
                            </span>
                          </td>
                          <td className="flex flex-wrap justify-center items-center">
                            <AnswerDropdown
                              answer={answer}
                              chapterSlug={chapterSlug}
                              question={question}
                            />
                          </td>
                        </tr>
                      ))}
                  </>
                ))
              ) : (
                <tr>Aucune question disponible pour le moment</tr>
              )}
            </tbody>
          </table>
          {questions && (
            <TablePagination
              itemsCount={questions}
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

CardQuestionsTable.defaultProps = {
  color: 'light',
}

CardQuestionsTable.propTypes = {
  color: PropTypes.oneOf(['light', 'dark']),
}
