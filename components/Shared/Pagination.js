import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Pagination = ({ pages, currentPage }) => {
  const router = useRouter()
  let paginationItems = []

  for (let i = 1; i < pages + 1; i++) {
    paginationItems.push(
      <li key={i}>
        <Link href={`${router.pathname}/?page=${i}`}>
          <a
            href="#"
            className={`first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-gray-500      ${
              currentPage == i ? 'text-white bg-gray-500' : 'text-gray-500'
            } `}
          >
            {i}
          </a>
        </Link>
      </li>
    )
  }
  return (
    <>
      <div className="py-2 text-center">
        <nav className="block">
          <ul className="flex pl-0 rounded list-none flex-wrap">
            {paginationItems}
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Pagination
