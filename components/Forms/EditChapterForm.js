import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'

import { UPDATE_CHAPTER } from '../../utils/mutations'
import FormError from '../Shared/FormError'
import { SINGLE_COURSE_QUERY } from '../../utils/constants'

export default function EditChapterForm({ chapter, courseSlug }) {
  const [name, setName] = useState(chapter.name)
  const [errorMessage, setErrorMessage] = useState('')

  const updateCache = (cache, { data }) => {
    const existingCourse = cache.readQuery({
      query: SINGLE_COURSE_QUERY,
      variables: { courseSlug },
    })

    const { chapter } = data.updateChapter
    cache.writeQuery({
      query: SINGLE_COURSE_QUERY,
      data: {
        course: [
          existingCourse.course,
          ...existingCourse.course.courseChapters,
          chapter,
        ],
      },
    })
  }

  const [updateChapter] = useMutation(UPDATE_CHAPTER, { update: updateCache })

  const handleSubmit = async (event) => {
    event.preventDefault()

    const { id: chapterId, chapterNumber } = chapter

    const { errors, data } = await updateChapter({
      variables: { chapterId, name, chapterNumber },
    })

    if (errors) setErrorMessage(errors[0].message)
    else {
      alert('Chapitre modifié avec succès!')
    }
  }

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-gray-200 border-0">
      <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        {errorMessage ? <FormError message={errorMessage} /> : <span></span>}
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="flex flex-wrap">
            <div className="w-full  px-4">
              <div className="relative w-full mb-3 mt-6">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Titre
                </label>
                <input
                  type="text"
                  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  defaultValue={chapter ? chapter.name : ''}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex mx-4 my-4 justify-end items-center">
            <button
              className="bg-blue-400 active:bg-gray-700 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="submit"
            >
              Valider
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
