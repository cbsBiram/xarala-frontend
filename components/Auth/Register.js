import Link from 'next/link'
import React, { useState } from 'react'
import { useMutation } from '@apollo/client'

import { signup } from '../../utils/auth'
import { RESGISTER_MUTATION } from '../../utils/constants'
import FormError from '../Shared/FormError'

const Register = () => {
  const [email, setEmail] = useState('')
  const [passwordTwo, setPasswordTwo] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [registerUser] = useMutation(RESGISTER_MUTATION)

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (password !== passwordTwo) {
      setErrorMessage('Les deux mot de passes ne sont pas identiques!')
    } else {
      const { errors, data } = await registerUser({
        variables: { email, password },
      })
      if (errors) {
        setErrorMessage(errors[0].message)
      } else {
        signup()
        alert('Compte crée avec succès')
      }
    }
  }

  return (
    <>
      <div className="container mx-auto px-4 h-full py-4">
        {errorMessage ? <FormError message={errorMessage} /> : <span></span>}

        <div className="container px-4 mx-auto flex flex-wrap items-center justify-around h-full mt-8">
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
              <h2 className="md:text-2xl text-2xl font-bold">
                Inscrivez-vous et commencez à apprendre!
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
                  <div className="flex flex-col mb-6">
                    <label
                      htmlFor="password"
                      className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                    >
                      Mot de passe:
                    </label>
                    <div className="relative">
                      <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
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
                            <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        </span>
                      </div>

                      <input
                        id="password"
                        type="password"
                        name="password"
                        className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                        placeholder="******"
                        value={password}
                        required
                        onChange={(event) => setPassword(event.target.value)}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col mb-6">
                    <label
                      htmlFor="password"
                      className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                    >
                      Confirmation Mot de passe:
                    </label>
                    <div className="relative">
                      <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
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
                            <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        </span>
                      </div>

                      <input
                        id="password2"
                        type="password"
                        name="password2"
                        className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                        placeholder="******"
                        value={passwordTwo}
                        onChange={(event) => setPasswordTwo(event.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-center mb-6 -mt-4">
                    <div className="flex ml-auto">
                      <Link href="/auth/password-reset">
                        <a
                          href="/auth/password-reset"
                          className="inline-flex text-xs sm:text-sm text-blue-500 hover:text-blue-700"
                        >
                          Mot de passe oublié?
                        </a>
                      </Link>
                    </div>
                  </div>

                  <div className="flex w-full">
                    <button
                      disabled={!email || !password || !passwordTwo}
                      type="submit"
                      className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
                    >
                      <span className="mr-2 uppercase">Inscription</span>
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
              <div className="flex justify-center items-center mt-6">
                <Link href="/auth/login">
                  <a
                    href="/auth/login"
                    className="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center"
                  >
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
                        <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                      </svg>
                    </span>

                    <span className="ml-2">Déja membre? Connexion</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
