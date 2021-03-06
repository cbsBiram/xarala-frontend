import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { useMutation } from '@apollo/client'

import FormError from '../Shared/FormError'
import { UPDATE_POST } from '../../utils/mutations'
import { fileToBase64 } from '../../utils/common'
import { useRouter } from 'next/router'

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
})

export default function EditPostForm({ post }) {
  const {
    title: existTitle,
    description: existDesc,
    content: existContent,
  } = post
  const [title, setTitle] = useState(existTitle)
  const [description, setDescription] = useState(existDesc)
  const [content, setContent] = useState(existContent)
  const [image, setImage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const [createPost] = useMutation(UPDATE_POST)
  const router = useRouter()

  const handleThumbnailChange = (e) => {
    const imageFile = e.target.files[0]
    if (!imageFile.name.match(/\.(jpg|jpeg|png|gif|svg|tif)$/)) {
      setImage(null)
      return alert(
        'Oops!',
        "Le type de l'image n'est pas supporté, choisir (PNG,JPG,JPEG,SVG,GIF ou TIF)",
        'error'
      )
    } else {
      setImage(imageFile)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const imageStr = image ? await fileToBase64(image) : null
    const { errors, data } = await createPost({
      variables: {
        title,
        description,
        content,
        image: imageStr,
        postId: post.id,
      },
    })

    if (errors) setErrorMessage(errors[0].message)
    else {
      alert('Post modifié avec succès!')
      router.push('/admin/posts', undefined, { shallow: true })
    }
  }

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
      <div className="rounded-t bg-white mb-0 px-6 py-6">
        <div className="text-center flex justify-between">
          <h6 className="text-gray-800 text-xl font-bold">
            Modifier article <span className="text-blue-400">{post.title}</span>
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
                  value={title}
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
                  Description courte
                </label>
                <textarea
                  required
                  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />
              </div>
            </div>
            <div className="w-full px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Content
                </label>
                <ReactQuill
                  theme="snow"
                  value={content}
                  className="bg-white"
                  required
                  onChange={(value) => setContent(value)}
                />
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
