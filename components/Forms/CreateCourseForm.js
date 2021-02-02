import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

import FormError from '../Shared/FormError'
import Loading from '../Shared/Loading'
import { ALL_LANGUAGES_QUERY } from '../../utils/queries'
import { CREATE_COURSE } from '../../utils/mutations'
import { fileToBase64 } from '../../utils/common'

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
})

export default function CreateCourse() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const [level, setLevel] = useState('Débutant')
  const [thumbnail, setThumbnail] = useState('')
  const [languageName, setLanguageName] = useState('Français')
  const [errorMessage, setErrorMessage] = useState('')
  const { loading, error, data: languagesData } = useQuery(ALL_LANGUAGES_QUERY)
  const [createCourse] = useMutation(CREATE_COURSE)
  const router = useRouter()

  let { languages } = languagesData ? languagesData : {}

  const handleThumbnailChange = (e) => {
    const imageFile = e.target.files[0]
    if (!imageFile.name.match(/\.(jpg|jpeg|png|gif|svg|tif)$/)) {
      setThumbnail(null)
      return alert(
        'Oops!',
        "Le type de l'image n'est pas supporté, choisir (PNG,JPG,JPEG,SVG,GIF ou TIF)",
        'error'
      )
    } else {
      setThumbnail(imageFile)
    }
  }

  const thumbnailToBase64 = async () => {
    if (!thumbnail) return
    const imgTobase64 = await fileToBase64(thumbnail)
    return imgTobase64
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const file = await thumbnailToBase64()
    const { errors, data } = await createCourse({
      variables: { title, description, price, level, file, languageName },
    })

    if (errors) setErrorMessage(errors[0].message)
    else {
      alert('Cours créé avec succès!')
      router.reload()
    }
  }

  if (loading) return <Loading />

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
      <div className="rounded-t bg-white mb-0 px-6 py-6">
        <div className="text-center flex justify-between">
          <h6 className="text-gray-800 text-xl font-bold">
            Créer un nouveau cours
          </h6>
        </div>
      </div>
      <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        {errorMessage ? <FormError message={errorMessage} /> : <span></span>}
        <form
          className="mt-6 mb-6"
          encType="multipart/form-data"
          onSubmit={(event) => handleSubmit(event)}
        >
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
                  htmlFor="grid-password"
                >
                  Description
                </label>
                <ReactQuill
                  theme="snow"
                  defaultValue={''}
                  className="bg-white"
                  onChange={(value) => setDescription(value)}
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Prix en F CFA
                </label>
                <input
                  type="number"
                  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  defaultValue={0}
                  onChange={(event) => setPrice(event.target.value)}
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Niveau
                </label>
                <select
                  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  defaultValue={'Débutant'}
                  onChange={(event) => setLevel(event.target.value)}
                >
                  <option value="Débutant">Débutant</option>
                  <option value="Moyen">Moyen</option>
                  <option value="Intermédiaire">Intermédiaire</option>
                  <option value="Tous les niveaux">Tous les niveaux</option>
                </select>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Thumbnail
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  defaultValue={''}
                  onChange={handleThumbnailChange}
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Langue
                </label>
                <select
                  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  defaultValue={'Français'}
                  onChange={(event) => setLanguageName(event.target.value)}
                >
                  <option>Choisir la langue</option>
                  {languages &&
                    languages.map((language) => (
                      <option key={language.id} value={language.name}>
                        {language.name}
                      </option>
                    ))}
                </select>
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
