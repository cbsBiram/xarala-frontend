import Link from 'next/link'
import React from 'react'

export default function FooterAdmin() {
  return (
    <>
      <footer className="block py-4">
        <div className="container mx-auto px-4">
          <hr className="mb-4 border-b-1 border-gray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm text-gray-600 font-semibold py-1 text-center md:text-left">
                Copyright © {new Date().getFullYear()}{' '}
                <a
                  href="https://www.xarala.co"
                  className="text-gray-600 hover:text-gray-800 text-sm font-semibold py-1"
                >
                  Xarala
                </a>
              </div>
            </div>
            <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                <li>
                  <Link href="/about">
                    <a
                      href="#"
                      className="text-gray-700 hover:text-gray-900 text-sm font-semibold block py-1 px-3"
                    >
                      A propos
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/contacts">
                    <a
                      href="#"
                      className="text-gray-700 hover:text-gray-900 text-sm font-semibold block py-1 px-3"
                    >
                      Contacts
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog">
                    <a
                      href="#"
                      className="text-gray-700 hover:text-gray-900 text-sm font-semibold block py-1 px-3"
                    >
                      Blog
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
