import React, { useState } from 'react'
import { useMutation } from '@apollo/client'

import FormError from '../Shared/FormError'
import { CREATE_CHAPTER } from '../../utils/mutations'
import { SINGLE_COURSE_QUERY } from '../../utils/constants'

export default function CreateChapterForm({ courseSlug }) {
  const [name, setName] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const updateCache = (cache, { data }) => {
    const existingCourse = cache.readQuery({
      query: SINGLE_COURSE_QUERY,
      variables: { courseSlug },
    })

    const { chapter } = data.createChapter
    cache.writeQuery({
      query: SINGLE_COURSE_QUERY,
      data: {
        course: [
          existingCourse.course,
          ...existingCourse.course.courseChapters.concat(chapter),
        ],
      },
    })
  }

  const [createChapter, { data, errors }] = useMutation(CREATE_CHAPTER, {
    update: updateCache,
  })

  const handleSubmit = async (event) => {
    event.preventDefault()
    const { data, errors } = await createChapter({
      variables: {
        courseSlug,
        name,
      },
    })

    if (errors) setErrorMessage(errors[0].message)
    else {
      alert('Chapitre ajouté avec succès!')
    }
  }

  return (
    <div className="flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
      <div className="rounded-t bg-white mb-0 px-6 py-6">
        <div className="text-center flex justify-between">
          <h6 className="text-gray-800 text-xl font-bold">
            Ajouter un nouveau chapitre
          </h6>
        </div>
      </div>
      <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        {errorMessage ? <FormError message={errorMessage} /> : <span></span>}
        <form className="mt-6 mb-6" onSubmit={(event) => handleSubmit(event)}>
          <div className="flex flex-wrap">
            <div className="w-full px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="name"
                >
                  Titre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  defaultValue={''}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="flex mx-4 my-4 justify-end items-center">
            <button
              className="bg-green-400 active:bg-gray-700 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="submit"
            >
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
