import React from 'react'
import PropTypes from 'prop-types'

import ChapterDropdown from '../Dropdowns/ChapterDropdown'
import QuizDropdown from '../Dropdowns/QuizDropdown'
import Link from 'next/link'
import { textTruncate } from '../../utils/common'

export default function CardQuizTable({ color, user, courses }) {
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
                Liste des Quizs
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
                    'px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left ' +
                    (color === 'light'
                      ? 'bg-gray-100 text-gray-600 border-gray-200'
                      : 'bg-gray-700 text-gray-300 border-gray-600')
                  }
                >
                  Description
                </th>
                <th
                  className={
                    'px-4 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left ' +
                    (color === 'light'
                      ? 'bg-gray-100 text-gray-600 border-gray-200'
                      : 'bg-gray-700 text-gray-300 border-gray-600')
                  }
                >
                  Chapitre
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
              {courses.map((course) =>
                course.courseChapters.map((chapter, index) =>
                  chapter.quiz !== null ? (
                    <>
                      <tr key={index}>
                        <th className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex jusify- items-center">
                          {chapter.quiz.id}
                        </th>
                        <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 font-bold">
                          {chapter.quiz.title}
                        </td>
                        <td
                          className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 font-bold"
                          dangerouslySetInnerHTML={{
                            __html: `${textTruncate(
                              chapter.quiz.description,
                              50
                            )}`,
                          }}
                        ></td>
                        <td className="border-t-0 uppercase px-4 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 font-bold">
                          {chapter.name}
                        </td>
                        <td className="flex flex-wrap justify-center items-center">
                          {user.isTeacher ? (
                            <QuizDropdown
                              quiz={chapter.quiz}
                              chapterSlug={chapter.slug}
                              courseSlug={course.slug}
                            />
                          ) : (
                            <Link
                              as={`/courses/quiz/${chapter.slug}`}
                              passHref
                              href="/courses/quiz/[slug]"
                            >
                              <a href="#">
                                <button
                                  className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                  type="button"
                                >
                                  Retenter
                                </button>
                              </a>
                            </Link>
                          )}
                        </td>
                      </tr>
                    </>
                  ) : (
                    ''
                  )
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

CardQuizTable.defaultProps = {
  color: 'light',
}

CardQuizTable.propTypes = {
  color: PropTypes.oneOf(['light', 'dark']),
}
