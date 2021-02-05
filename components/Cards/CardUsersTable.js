import React from 'react'
import PropTypes from 'prop-types'
import Pagination from '../Shared/Pagination'

export default function CardUsersTable({
  color,
  users,
  type,
  pages,
  currentPage,
}) {
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
                Liste des Apprenants
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
                  Email
                </th>
                <th
                  className={
                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left ' +
                    (color === 'light'
                      ? 'bg-gray-100 text-gray-600 border-gray-200'
                      : 'bg-gray-700 text-gray-300 border-gray-600')
                  }
                >
                  Nom
                </th>

                <th
                  className={
                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left ' +
                    (color === 'light'
                      ? 'bg-gray-100 text-gray-600 border-gray-200'
                      : 'bg-gray-700 text-gray-300 border-gray-600')
                  }
                >
                  Téléphone
                </th>
                <th
                  className={
                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left ' +
                    (color === 'light'
                      ? 'bg-gray-100 text-gray-600 border-gray-200'
                      : 'bg-gray-700 text-gray-300 border-gray-600')
                  }
                >
                  {type === 'student'
                    ? 'Cours Enrollés'
                    : type === 'teacher'
                    ? 'Cours créés'
                    : type === 'author'
                    ? 'Articles créés'
                    : ''}
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
              {users.length ? (
                users.map((user) => (
                  <tr key={user.id}>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex jusify- items-center">
                      {user.id}
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 font-bold">
                      {user.email}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 font-bold">
                      {user.firstName} {user.lastName}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 font-bold">
                      {user.phone}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 font-bold">
                      {user && user.isStudent
                        ? user.coursesEnrolled.length
                        : user.isTeacher
                        ? user.coursesCreated.length
                        : user.isWriter
                        ? user.getUserPosts.length
                        : ''}
                    </td>
                    <td></td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex jusify- items-center">
                    Pas d'utilisateurs
                  </th>
                </tr>
              )}
            </tbody>
          </table>
          {pages > 1 && <Pagination pages={pages} currentPage={currentPage} />}
        </div>
      </div>
    </>
  )
}

CardUsersTable.defaultProps = {
  color: 'light',
}

CardUsersTable.propTypes = {
  color: PropTypes.oneOf(['light', 'dark']),
}
