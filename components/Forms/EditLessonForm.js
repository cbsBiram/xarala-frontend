import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'

import FormError from '../Shared/FormError'
import { UPDATE_LESSON } from '../../utils/mutations'

export default function EditLessonForm({ lesson }) {
  const [title, setTitle] = useState(lesson.title)
  const [videoId, setVideoId] = useState(lesson.videoId)
  const [duration, setDuration] = useState(lesson.duration)
  const [platform, setPlatform] = useState(lesson.platform)
  const [errorMessage, setErrorMessage] = useState('')
  const router = useRouter()

  const [updateLesson] = useMutation(UPDATE_LESSON)

  const handleSubmit = async (event) => {
    event.preventDefault()

    const { id: lessonId, lectureNumber } = lesson

    const { errors, data } = await updateLesson({
      variables: {
        lessonId,
        title,
        videoId,
        duration,
        platform,
        lectureNumber,
      },
    })

    if (errors) setErrorMessage(errors[0].message)
    else {
      alert('Leçon modifiée avec succès!')
      router.back()
    }
  }

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
      <div className="rounded-t bg-white mb-0 px-6 py-6">
        <div className="text-center flex justify-between">
          <h6 className="text-gray-800 text-xl font-bold">Modifier leçon</h6>
        </div>
      </div>
      <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        {errorMessage ? <FormError message={errorMessage} /> : <span></span>}
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="flex flex-wrap">
            <div className="w-full px-4">
              <div className="relative w-full mb-3 mt-6">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="title"
                >
                  Titre
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  defaultValue={lesson ? lesson.title : ''}
                  onChange={(event) => setTitle(event.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full md:w-6/12 px-4">
              <div className="relative w-full mb-3 mt-2">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="video-id"
                >
                  Id Vidéo
                </label>
                <input
                  type="text"
                  name="videoId"
                  id="video-id"
                  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  defaultValue={lesson ? lesson.videoId : ''}
                  onChange={(event) => setVideoId(event.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 px-4">
                <div className="relative w-full mb-3 mt-2">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Durée
                  </label>
                  <input
                    type="number"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    defaultValue={lesson ? lesson.duration : ''}
                    onChange={(event) => setDuration(event.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="w-full px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="platform"
                >
                  Plateforme
                </label>
                <select
                  id="platform"
                  name="platform"
                  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  defaultValue={lesson ? lesson.platform : 'Youtube'}
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
              Modifier
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
