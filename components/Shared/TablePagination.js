import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

const TablePagination = ({
  currentPage,
  itemsCount,
  pageSize,
  onPageChange,
}) => {
  const pagesCount = Math.ceil(itemsCount.length / pageSize)
  if (pagesCount === 1) return null
  const pages = _.range(1, pagesCount + 1)

  return (
    <div className="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
      <div className="flex items-center">
        <button
          type="button"
          className="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100"
          onClick={() => onPageChange(currentPage - 1)}
        >
          <svg
            width="9"
            fill="currentColor"
            height="8"
            className=""
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
          </svg>
        </button>
        {pages.map((page, index) => (
          <button
            type="button"
            className={`w-full px-4 py-2 border ${
              page == currentPage
                ? 'bg-purple-500 text-white'
                : 'text-indigo-500 bg-white'
            } text-base`}
            key={index}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
        <button
          type="button"
          className="w-full p-4 border-t border text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100"
          onClick={() => onPageChange(currentPage + 1)}
        >
          <svg
            width="9"
            fill="currentColor"
            height="8"
            className=""
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
          </svg>
        </button>
      </div>
    </div>
  )
}

TablePagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
}

export default TablePagination
