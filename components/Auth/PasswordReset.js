import Link from 'next/link'
import FormError from '../Shared/FormError'
import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { PASSWORD_RESET_EMAIL } from '../../utils/mutations'

const PasswordReset = () => {
  const [email, setEmail] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [passwordReset] = useMutation(PASSWORD_RESET_EMAIL)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const { errors, data } = await passwordReset({ variables: { email } })
    if (errors) {
      setErrorMessage(errors[0].message)
    } else {
      alert('Ouvrez votre email pour récuperer votre code')
    }
  }

  return (
    <>
      <div className="container mx-auto px-4 h-full py-4">
        {errorMessage ? <FormError message={errorMessage} /> : <span></span>}

        <div className="flex content-center items-center justify-center h-full mt-8">
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
              <h2 className="md:text-2xl text-2xl font-bold">
                Récuperationn de compte
                <span className="text-primary">Xarala!</span>
              </h2>
              <div className="mt-10">
                <form onSubmit={(event) => handleSubmit(event)}>
                  <div className="flex flex-col mb-6">
                    <label
                      htmlFor="email"
                      className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                    >
                      Votre email:
                    </label>
                    <div className="relative">
                      <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
                      </div>

                      <input
                        id="email"
                        type="email"
                        name="email"
                        className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                        placeholder="email@gmail.com"
                        value={email}
                        required
                        onChange={(event) => setEmail(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex items-center mb-6 -mt-4">
                    <div className="flex ml-auto">
                      <Link href="/auth/password-reset-confirm">
                        <a
                          href="#"
                          className="inline-flex text-xs sm:text-sm text-blue-500 hover:text-blue-700"
                        >
                          J'ai déja un code
                        </a>
                      </Link>
                    </div>
                  </div>

                  <div className="flex w-full">
                    <button
                      type="submit"
                      className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
                    >
                      <span className="mr-2 uppercase">Envoyer le code</span>
                      <span>
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PasswordReset
