import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className="relative bg-gray-300 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-4/12 px-4">
              <h4 className="text-3xl font-semibold">Restons en contact!</h4>
              <h5 className="text-sm mt-0 mb-2 text-gray-700">
                Choisissez Xarala et bénéficiez de l'emploi garanti.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <button
                  className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-twitter"></i>
                </button>
                <button
                  className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-facebook-square"></i>
                </button>
                <button
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-dribbble"></i>
                </button>
                <button
                  className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-github"></i>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-8/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                    Liens utiles
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link href="/about">
                        <a
                          className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                          href="#"
                        >
                          Qui sommes-nous
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog">
                        <a
                          className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                          href="#"
                        >
                          Notre Blog
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/courses">
                        <a
                          className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                          href="#"
                        >
                          Formation
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        <a
                          className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                          href="#"
                        >
                          Contacts
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                    La plateforme
                  </span>
                  <ul className="list-unstyled">
                    {' '}
                    <li>
                      <Link href="/community">
                        <a
                          className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                          href="#"
                        >
                          Notre communauté
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about">
                        <a
                          className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                          href="#"
                        >
                          Qui sommes-nous
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog">
                        <a
                          className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                          href="#"
                        >
                          Notre Blog
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/privacy-policy">
                        <a
                          className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                          href="#"
                        >
                          Politique de confidentialité
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-600 font-semibold py-1">
                Copyright © {new Date().getFullYear()} Xarala v.1.7.0{' '}
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Xarala
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
