import React, { createRef, useState } from 'react'
import { createPopper } from '@popperjs/core'
import Link from 'next/link'

const CourseDropdown = ({ course }) => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false)
  const btnDropdownRef = createRef()
  const popoverDropdownRef = createRef()

  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: 'left-start',
    })
    setDropdownPopoverShow(true)
  }
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false)
  }
  return (
    <>
      <a
        className="text-gray-600 py-1 px-3"
        href="#xarala"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault()
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover()
        }}
      >
        <i className="fas fa-ellipsis-v"></i>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? 'block ' : 'hidden ') +
          'bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48'
        }
      >
        <Link
          as={`/admin/courses/edit/${course.slug}`}
          passHref
          href="/admin/courses/edit/[slug]"
        >
          <a
            href="#xarala"
            className={
              'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800'
            }
            onClick={(e) => closeDropdownPopover}
          >
            Modifier
          </a>
        </Link>
        <Link
          as={`/admin/courses/details/${course.slug}`}
          passHref
          href="/admin/courses/details/[slug]"
        >
          <a
            href="#xarala"
            className={
              'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800'
            }
            onClick={(e) => closeDropdownPopover()}
          >
            Voir
          </a>
        </Link>
        {/* <Link
          as={`/admin/posts/edit/${post.slug}`}
          passHref
          href="/admin/posts/edit/[slug]"
        >
          <a
            href="#xarala"
            className={
              'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800'
            }
            onClick={(e) => handleDeletePost(e)}
          >
            Archiver
          </a>
        </Link> */}
      </div>
    </>
  )
}

export default CourseDropdown
