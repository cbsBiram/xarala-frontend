import React from 'react'
import { createPopper } from '@popperjs/core'
import Link from 'next/link'
import { useMutation } from '@apollo/client'
import { SUBMIT_POST_TO_REVIEW, DELETE_POST } from '../../utils/mutations'
import { useRouter } from 'next/router'

const PostDropdown = ({ post }) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false)
  const btnDropdownRef = React.createRef()
  const popoverDropdownRef = React.createRef()

  const [submitPost] = useMutation(SUBMIT_POST_TO_REVIEW)
  const [deletePost] = useMutation(DELETE_POST)
  const router = useRouter()

  const submitPostToReview = async (e) => {
    e.preventDefault()
    const { errors, data } = await submitPost({
      variables: {
        postId: post.id,
      },
    })

    if (errors) setErrorMessage(errors[0].message)
    else {
      alert('Article envoyé, vous serez notifié de la publication')
    }
    closeDropdownPopover()
  }

  const handleDeletePost = async (e) => {
    e.preventDefault()
    const { errors, data } = await deletePost({
      variables: {
        postId: post.id,
      },
    })

    if (errors) setErrorMessage(errors[0].message)
    else {
      alert('Article archivé!')
    }
    closeDropdownPopover()
    router.push('/admin/posts', undefined, { shallow: true })
  }

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
        {post.submitted ? (
          <a
            href="#xarala"
            className={
              'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800'
            }
            onClick={(e) => e.preventDefault()}
          >
            Partager
          </a>
        ) : (
          <a
            href="#xarala"
            className={
              'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800'
            }
            onClick={(e) => submitPostToReview(e)}
          >
            Publier
          </a>
        )}

        <a
          href="#xarala"
          className={
            'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800'
          }
          onClick={(e) => handleDeletePost(e)}
        >
          Archiver
        </a>
      </div>
    </>
  )
}

export default PostDropdown
