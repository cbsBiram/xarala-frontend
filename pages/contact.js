import Link from 'next/link'
import { motion } from 'framer-motion'
import { NextSeo } from 'next-seo'

import Footer from 'components/Footers/Footer.js'
import IndexNavbar from 'components/Navbars/IndexNavbar.js'
import Navbar from 'components/Navbars/AuthNavbar.js'
import Page from '../layouts/Page'

let easing = [0.175, 0.85, 0.42, 0.96]
const formVariants = {
  exit: { y: 150, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
}

export default function Contact() {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
    >
      <NextSeo
        title="Xarala Academy | Contact"
        description="Contactez-nous n'importe quand."
      />
      <main>
        <section className="relative border-b">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            bg-gray-300
            style={{ transform: 'translateZ(0)' }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <motion.div
            initial="exit"
            animate="enter"
            exit="exit"
            className="container mx-auto pt-20 px-4"
          >
            <div className="items-center flex flex-wrap">
              <div className="w-full  ml-auto mr-auto px-4">
                <div
                  className="md:pr-12"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <h2 className="text-3xl font-semibold uppercase text-center">
                    Nous écrire
                  </h2>

                  <div className="w-10 h-1 bg-blue-600 rounded mt-4 mb-5"></div>
                </div>
                <motion.div
                  variants={formVariants}
                  className="relative flex items-top justify-center  bg-white dark:bg-gray-900 sm:items-center sm:pt-0"
                >
                  <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div className="mt-8 overflow-hidden">
                      <div className="flex flex-wrap h-50 items-center justify-between">
                        <div className="w-full sm:w-full md:w-6/12 px-4 py-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
                          <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                            Contactez-nous
                          </h1>
                          <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                            Remplissez le formulaire pour démarrer une
                            conversation.
                          </p>

                          <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                              viewBox="0 0 24 24"
                              className="w-8 h-8 text-gray-500"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                            <div className="ml-4 text-md tracking-wide font-semibold w-40">
                              Acme Inc, Street, State, Postal Code
                            </div>
                          </div>

                          <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                              viewBox="0 0 24 24"
                              className="w-8 h-8 text-gray-500"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                              />
                            </svg>
                            <div className="ml-4 text-md tracking-wide font-semibold w-40">
                              +44 1234567890
                            </div>
                          </div>

                          <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                              viewBox="0 0 24 24"
                              className="w-8 h-8 text-gray-500"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                            <div className="ml-4 text-md tracking-wide font-semibold w-40">
                              info@acme.org
                            </div>
                          </div>
                        </div>

                        <div className="w-full md:w-6/12 px-4">
                          <form className="p-6 flex flex-col justify-center">
                            <div className="flex flex-col">
                              <label for="name" className="hidden">
                                Full Name
                              </label>
                              <input
                                type="name"
                                name="name"
                                id="name"
                                placeholder="Nom Complet"
                                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                              />
                            </div>

                            <div className="flex flex-col mt-2">
                              <label for="email" className="hidden">
                                Email
                              </label>
                              <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                              />
                            </div>

                            <div className="flex flex-col mt-2">
                              <label for="tel" className="hidden">
                                Number
                              </label>
                              <input
                                type="tel"
                                name="tel"
                                id="tel"
                                placeholder="Numéro de Téléphone"
                                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                              />
                            </div>

                            <motion.button
                              whileHover="hover"
                              variants={{
                                hover: {
                                  scale: 1.1,
                                  backgroundColor: 'rgba(99, 102, 241)',
                                },
                              }}
                              type="submit"
                              className="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300"
                              style={{ backgroundColor: 'rgba(79, 70, 229)' }}
                            >
                              Submit
                            </motion.button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </motion.div>
  )
}

Contact.layout = Page
