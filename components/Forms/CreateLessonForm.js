import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useMutation } from '@apollo/client'

import FormError from '../Shared/FormError'
import { CREATE_LESSON } from '../../utils/mutations'

export default function CreateLessonForm({ courseSlug, chapterSlug }) {
  const [title, setTitle] = useState('')
  const [duration, setDuration] = useState('')
  const [platform, setPlatform] = useState('Youtube')
  const [errorMessage, setErrorMessage] = useState('')

  const [createChapter] = useMutation(CREATE_LESSON)
  const router = useRouter()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const { errors, data } = await createChapter({
      variables: {
        courseSlug,
        chapterSlug,
        title,
        duration,
        platform,
      },
    })
    if (errors) setErrorMessage(errors[0].message)
    else {
      alert('Leçon ajoutée avec succès!')
      router.reload()
    }
  }

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
      <div className="rounded-t bg-white mb-0 px-6 py-6">
        <div className="text-center flex justify-between">
          <h6 className="text-gray-800 text-xl font-bold">
            Ajouter une nouvelle leçon
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
                  htmlFor="title"
                >
                  Titre
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
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
                  htmlFor="duration"
                >
                  Durée
                </label>
                <input
                  type="number"
                  id="duration"
                  name="duration"
                  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  defaultValue={''}
                  onChange={(event) => setDuration(event.target.value)}
                />
              </div>
            </div>
            <div className="w-full px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="platform"
                >
                  Durée
                </label>
                <select
                  id="platform"
                  name="platform"
                  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  defaultValue={'Youtube'}
                  required
                  onChange={(event) => setPlatform(event.target.value)}
                >
                  <option value="Youtube">Youtube</option>
                  <option value="Vimeo">Vimeo</option>
                  <option value="Wista">Wista</option>
                  <option value="Custom">Custom</option>
                  <option value="Cloudinary">Cloudinary</option>
                </select>
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
