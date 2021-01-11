import React from 'react'

export default function FooterSmall({ absolute }) {
  return (
    <>
      <footer
        className={
          (absolute
            ? 'absolute w-full bottom-0 bg-gray-900'
            : 'w-full bottom-0 bg-gray-900') + ' pb-6'
        }
      >
        <div className="container mx-auto px-4">
          <hr className="mb-6 border-b-1 border-gray-700" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm text-gray-600 font-semibold py-1 text-center md:text-left">
                Copyright © {new Date().getFullYear()}{' '}
                <a
                  href="https://www.creative-tim.com?ref=nnjs-footer-small"
                  className="text-white hover:text-gray-400 text-sm font-semibold py-1"
                >
                  Xarala
                </a>
              </div>
            </div>
            <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                <li>
                  <a
                    href="https://xarala.co"
                    className="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                  >
                    Xarala
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                  >
                    Qui sommes-nous?
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                  >
                    Notre Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                  >
                    Nous contacter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
