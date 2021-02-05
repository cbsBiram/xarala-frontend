import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Pagination = ({ pages, currentPage }) => {
  const router = useRouter()
  let paginationItems = []

  for (let i = 1; i < pages + 1; i++) {
    if (Math.abs(currentPage - i) < 3)
      paginationItems.push(
        <li
          key={i}
          className={`w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full   ${
            currentPage == i ? 'text-white bg-blue-400' : 'text-gray-500'
          } `}
        >
          <Link href={`${router.pathname}/?page=${i}`}>
            <a href="#">{i}</a>
          </Link>
        </li>
      )
  }

  return (
    <>
      <div className="flex flex-col items-center my-12">
        <div className="flex text-gray-700">
          <div className="h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-chevron-left w-6 h-6"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </div>
          {paginationItems}
          <div className="h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-chevron-right w-6 h-6"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pagination
