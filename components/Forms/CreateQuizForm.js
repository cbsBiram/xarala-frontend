import dynamic from 'next/dynamic'
import React, { useState } from 'react'
import { useMutation } from '@apollo/client'

import FormError from '../Shared/FormError'
import { CREATE_QUIZ } from '../../utils/mutations'
import { SINGLE_COURSE_QUERY } from '../../utils/constants'

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
})

export default function CreateQuizForm({ chapterId, courseSlug }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const updateCache = (cache, { data }) => {
    const existingCourse = cache.readQuery({
      query: SINGLE_COURSE_QUERY,
      variables: { courseSlug },
    })

    const { quiz } = data.createQuiz

    cache.writeQuery({
      query: SINGLE_COURSE_QUERY,
      data: {
        course: [
          existingCourse.course,
          ...existingCourse.course.courseChapters,
          quiz,
        ],
      },
    })
  }

  const [createQuiz, { data, errors }] = useMutation(CREATE_QUIZ, {
    update: updateCache,
  })

  const handleSubmit = async (event) => {
    event.preventDefault()

    const { errors, data } = await createQuiz({
      variables: { chapterId, title, description },
    })

    if (errors) setErrorMessage(errors[0].message)
    else {
      alert('Quiz créé avec succès!')
    }
  }

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full bg-gray-200 border-0">
      <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        {errorMessage ? <FormError message={errorMessage} /> : <span></span>}
        <form className="mt-6 mb-6" onSubmit={(event) => handleSubmit(event)}>
          <div className="flex flex-wrap">
            <div className="w-full px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Titre
                </label>
                <input
                  type="text"
                  required
                  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  defaultValue={''}
                  onChange={(event) => setTitle(event.target.value)}
                />
              </div>
            </div>
            <div className="w-full px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="description"
                >
                  Description
                </label>
                <ReactQuill
                  theme="snow"
                  name="description"
                  id="description"
                  defaultValue={''}
                  className="bg-white"
                  onChange={(value) => setDescription(value)}
                />
              </div>
            </div>
          </div>

          <div className="flex mx-4 my-4 justify-end items-center">
            <button
              className="bg-green-400 active:bg-gray-700 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="submit"
            >
              Créer
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
