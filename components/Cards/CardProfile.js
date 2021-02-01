import React, { useState } from 'react'
import { createPopper } from '@popperjs/core'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'

import { UPDATE_AVATAR } from '../../utils/mutations'
import { fileToBase64 } from '../../utils/common'

// components
export default function CardProfile({ me }) {
  const [avatar, setAvatar] = useState()
  const router = useRouter()
  const [updateAvatar] = useMutation(UPDATE_AVATAR)
  const [imageUrl, setImageUrl] = useState('')

  const [popoverShow, setPopoverShow] = useState(false)
  const btnRef = React.createRef()
  const popoverRef = React.createRef()
  const openPopover = () => {
    if (!avatar) {
      setPopoverShow(true)
      createPopper(btnRef.current, popoverRef.current, {
        placement: 'left',
      })
    }
  }
  const closePopover = () => {
    setPopoverShow(false)
  }

  const handleAvatarChange = (e) => {
    const imageFile = e.target.files[0]
    const imageUrl = URL.createObjectURL(imageFile)
    setImageUrl(imageUrl)
    if (!imageFile.name.match(/\.(jpg|jpeg|png|gif|svg|tif)$/)) {
      setAvatar(null)
      return alert(
        'Oops!',
        "Le type de l'image n'est pas supporté, choisir (PNG,JPG,JPEG,SVG,GIF ou TIF)",
        'error'
      )
    } else {
      setAvatar(imageFile)
    }
  }

  const handleUpdateAvatar = async () => {
    if (!avatar) return
    const imgTobasse64 = await fileToBase64(avatar)
    const { data: avatarData, error: avatarErrors } = await updateAvatar({
      variables: {
        file: imgTobasse64,
      },
    })
    return { avatarData, avatarErrors }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const avatarInfos = await handleUpdateAvatar()
    const { avatarData, avatarErrors } = avatarInfos ? avatarInfos : {}

    if (avatarErrors) setErrorMessage(errors[0].message)
    if (!avatar) return
    else {
      alert('Profil modifié avec succès!')
      router.reload()
    }
  }

  return (
    <>
      {me && (
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <form
                onSubmit={(event) => handleSubmit(event)}
                encType="multipart/form-data"
              >
                <div className="w-full px-4 flex justify-center">
                  <div className="relative">
                    <label htmlFor="file-input">
                      <img
                        alt="..."
                        src={
                          imageUrl
                            ? `${imageUrl}`
                            : me.avatar
                            ? `${process.env.MEDIA_URL}${me.avatar}`
                            : require('assets/img/team-2-800x800.jpg')
                        }
                        style={{ height: '150px' }}
                        className="shadow-xl cursor-pointer rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      />
                    </label>
                    <input
                      id="file-input"
                      type="file"
                      name="files"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 rounded text-sm focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150 hidden"
                      onChange={handleAvatarChange}
                    />
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    className="bg-blue-400 active:bg-gray-700 text-white font-bold uppercase text-xs mx-4 px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    style={{ marginTop: '100px' }}
                    onClick={() => {
                      popoverShow ? closePopover() : openPopover()
                    }}
                    ref={btnRef}
                    type="submit"
                  >
                    Changer
                  </button>

                  <div
                    className={
                      (popoverShow ? '' : 'hidden ') +
                      'bg-gray-600 border-0 mr-10 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg'
                    }
                    ref={popoverRef}
                  >
                    <div>
                      <div className="text-white p-3 text-sm">
                        Cliquez sur la photo de profil actuelle pour la
                        remplacer, puis sur le bouton 'Changer'
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="text-center">
              <h3 className="text-xl py-4 font-semibold leading-normal mb-2 text-gray-800 lg:pt-4  pt-8 mb-2">
                {me.firstName} {me.lastName}
              </h3>
              <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase my-4">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{' '}
                {me.address ? me.address : 'Aucune adresse renseignée'}
              </div>
              <div className="mb-2 text-gray-700 my-4">
                <i className="fas fa-phone-alt mr-2 text-lg text-gray-500"></i>
                {me.phone ? me.phone : 'None'}
              </div>
            </div>
            <div className="mt-8 py-10 border-t border-gray-300 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4">
                  <p className="mb-4 text-lg leading-relaxed text-gray-800">
                    {me.bio ? me.bio : 'None'}
                  </p>
                  {/* <a
                    href="#xarala"
                    className="font-normal text-blue-500"
                    onClick={(e) => e.preventDefault()}
                  >
                    Show more
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
