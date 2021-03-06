import React, { useState } from 'react'
import Link from 'next/link'

import CourseDropdown from '../Dropdowns/CourseDropdown'
import TablePagination from '../Shared/TablePagination'
import { paginate } from '../../utils/common'

export default function CardMyCourses({
  courses,
  buttonTitle,
  title,
  teacher = false,
}) {
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 5

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const paginatedCourses = paginate(courses, currentPage, pageSize)

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base">{title}</h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              <a href={`${teacher ? '/admin/courses/create' : '/courses/'}`}>
                <button
                  className="bg-blue-400 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  {teacher ? 'Ajouter' : 'Voir Plus'}
                </button>
              </a>
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
                  {teacher ? 'Niveau' : 'Auteur'}
                </th>
                <th className="px-6 bg-gray-100 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                  Prix (F CFA)
                </th>
                <th className="px-6 bg-gray-100 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"></th>
              </tr>
            </thead>
            <tbody>
              {paginatedCourses && paginatedCourses.length ? (
                paginatedCourses.map((course) => (
                  <tr key={course.id}>
                    <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left">
                      {course.title}
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                      {!teacher && course.teacher
                        ? `${course.teacher.firstName} ${course.teacher.lastName}`
                        : course.level}
                    </td>
                    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                      {course.price}
                    </td>
                    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                      {teacher ? (
                        <CourseDropdown course={course} />
                      ) : (
                        <Link
                          as={`/courses/${course.slug}`}
                          passHref
                          href="/courses/[slug]"
                        >
                          <a href="#">
                            <button
                              className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                            >
                              {buttonTitle}
                            </button>
                          </a>
                        </Link>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left">
                    {teacher
                      ? 'Aucun cours cr???? pour le moment'
                      : 'Aucun cours achet?? pour le moment'}
                  </th>
                </tr>
              )}
            </tbody>
          </table>
          {courses && (
            <TablePagination
              itemsCount={courses}
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
