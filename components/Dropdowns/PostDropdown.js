import React from 'react'
import { createPopper } from '@popperjs/core'
import Link from 'next/link'

const PostDropdown = ({ post }) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false)
  const btnDropdownRef = React.createRef()
  const popoverDropdownRef = React.createRef()
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
          as={`/admin/posts/edit/${post.slug}`}
          passHref
          href="/admin/posts/edit/[slug]"
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
        <a
          href="#xarala"
          className={
            'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800'
          }
          onClick={(e) => e.preventDefault()}
        >
          Publier
        </a>
        <a
          href="#xarala"
          className={
            'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800'
          }
          onClick={(e) => e.preventDefault()}
        >
          Archiver
        </a>
      </div>
    </>
  )
}

export default PostDropdown
