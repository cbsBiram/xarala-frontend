import React, { useState } from 'react'
import { useMutation } from '@apollo/client'

import ChangePasswordForm from '../Forms/ChangePasswordForm'
import FormError from '../Shared/FormError'
import { UPDATE_PROFILE } from '../../utils/mutations'

export default function CardSettings({ me }) {
  const [firstName, setFirstName] = useState(me.firstName)
  const [lastName, setLastName] = useState(me.lastName)
  const [address, setAddress] = useState(me.address)
  const [phone, setPhone] = useState(me.phone)
  const [bio, setBio] = useState(me.bio)
  const [accountType, setAccountType] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const [updateUser] = useMutation(UPDATE_PROFILE)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const { error: userErrors, data: userData } = await updateUser({
      variables: { firstName, lastName, address, phone, bio, accountType },
    })

    if (userErrors) setErrorMessage(errors[0].message)
    else alert('Profil modifié avec succès!')
  }

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-gray-800 text-xl font-bold">Mon compte</h6>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          {errorMessage ? <FormError message={errorMessage} /> : <span></span>}
          <form
            onSubmit={(event) => handleSubmit(event)}
            encType="multipart/form-data"
          >
            <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
              Infos utilisateur
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Prénom
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    defaultValue={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    defaultValue={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-gray-400" />

            <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
              Infos contact
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Adresse
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    defaultValue={address}
                    onChange={(event) => setAddress(event.target.value)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Téléphone
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    defaultValue={phone}
                    onChange={(event) => setPhone(event.target.value)}
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-gray-400" />

            <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
              À propos de moi
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Bio
                  </label>
                  <textarea
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    rows="4"
                    defaultValue={bio}
                    onChange={(event) => setBio(event.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-gray-400" />

            <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
              Type de compte
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="flex items-center w-full mb-3">
                  <input
                    type="radio"
                    className="text-green-500"
                    name="account_type"
                    id="account-type"
                    value="student"
                    onChange={(event) => setAccountType(event.target.value)}
                  />
                  <label
                    className="uppercase text-gray-700 text-xs font-bold ml-2"
                    htmlFor="account-type"
                  >
                    Apprenant
                  </label>
                </div>
                <div className="flex items-center w-full mb-3">
                  <input
                    type="radio"
                    className="text-green-500"
                    name="account_type"
                    id="account-type"
                    value="teacher"
                    onChange={(event) => setAccountType(event.target.value)}
                  />
                  <label
                    className="uppercase text-gray-700 text-xs font-bold ml-2"
                    htmlFor="account-type"
                  >
                    Instructeur
                  </label>
                </div>
                <div className="flex items-center w-full mb-3">
                  <input
                    type="radio"
                    className="text-green-500"
                    name="account_type"
                    id="account-type"
                    value="author"
                    onChange={(event) => setAccountType(event.target.value)}
                  />
                  <label
                    className="uppercase text-gray-700 text-xs font-bold ml-2"
                    htmlFor="account-type"
                  >
                    Auteur
                  </label>
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

      <hr className="mt-6 border-b-2 border-gray-800" />

      <ChangePasswordForm />
    </>
  )
}
