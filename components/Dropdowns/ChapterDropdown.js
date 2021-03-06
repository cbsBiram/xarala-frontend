import React, { createRef, useState } from 'react'
import { createPopper } from '@popperjs/core'
import { useRouter } from 'next/router'

import CreateQuizForm from '../Forms/CreateQuizForm'
import EditChapterForm from '../Forms/EditChapterForm'

const ChapterDropdown = ({ chapter, courseSlug }) => {
  const [showModal, setShowModal] = useState(false)
  const [showEditChapterModal, setShowEditChapterModal] = useState(false)
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false)
  const btnDropdownRef = createRef()
  const popoverDropdownRef = createRef()
  const router = useRouter()

  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: 'left-start',
    })
    setDropdownPopoverShow(true)
  }
  const closeEditDropdownPopover = () => {
    setDropdownPopoverShow(false)
    setShowEditChapterModal(true)
  }

  const closeViewDropdownPopover = () => {
    setDropdownPopoverShow(false)
    router.push(
      `/admin/courses/chapters/details/${courseSlug}?section=${chapter.slug}`
    )
  }

  const closeModalDropdownPopover = () => {
    setDropdownPopoverShow(false)
    setShowModal(true)
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
        <a
          role="button"
          tabIndex="0"
          className={
            'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800'
          }
          onClick={() => closeEditDropdownPopover()}
        >
          Modifier
        </a>
        <a
          role="button"
          tabIndex="0"
          className={
            'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800'
          }
          onClick={() => closeViewDropdownPopover()}
        >
          Voir
        </a>

        {!chapter.quiz && (
          <a
            role="button"
            tabIndex="0"
            className={
              'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800'
            }
            onClick={(e) => closeModalDropdownPopover()}
          >
            Ajouter quiz
          </a>
        )}
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

      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            // onClick={() => setShowModal(false)}
          >
            <div className="relative  w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 bg-gray-200 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-500 rounded-t rounded-b">
                  <h3 className="text-2xl font-semibold text-black">
                    Ajouter un nouveau quiz au chapitre {chapter.name}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-red-500 opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ??
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative flex-auto">
                  <CreateQuizForm
                    chapterId={chapter.id}
                    courseSlug={courseSlug}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="fixed inset-0 z-40 bg-black"
            style={{ opacity: '0.5' }}
          ></div>
        </>
      ) : null}

      {showEditChapterModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            // onClick={() => setShowModal(false)}
          >
            <div className="relative  w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 bg-gray-200 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-500 rounded-t rounded-b">
                  <h3 className="text-2xl font-semibold text-black">
                    Modifier le chapitre : {chapter.name}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowEditChapterModal(false)}
                  >
                    <span className="bg-transparent text-red-500 opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ??
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative flex-auto">
                  <EditChapterForm chapter={chapter} courseSlug={courseSlug} />
                </div>
              </div>
            </div>
          </div>
          <div
            className="fixed inset-0 z-40 bg-black"
            style={{ opacity: '0.5' }}
          ></div>
        </>
      ) : null}
    </>
  )
}

export default ChapterDropdown
