import React from 'react'
import Link from 'next/link'
// components

// import IndexDropdown from 'components/Dropdowns/IndexDropdown.js'
import UserDropdown from '../Dropdowns/UserDropdown'

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex items-center justify-between lg:w-auto lg:static lg:block mx-4">
            <Link href="/">
              {/* <a
                className="text-gray-800 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
                href="#pablo"
              >
                Notus NextJS
              </a> */}
              <a href="/" class="navbar-brand mr-16pt">
                <span class="avatar avatar-sm navbar-brand-icon mr-0 mr-lg-8pt">
                  <span class="avatar-title rounded bg-primary">
                    <img
                      src={require('assets/img/logo/logo.png')}
                      style={{
                        height: '60px',
                      }}
                      alt="logo"
                      className=" align-middle border-none"
                    />
                  </span>
                </span>
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none' +
              (navbarOpen ? ' block' : ' hidden')
            }
            id="example-navbar-warning"
          >
            {/* <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <a
                  className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index-navbar"
                >
                  <i className="text-gray-500 far fa-file-alt text-lg leading-lg mr-2" />{' '}
                  Docs
                </a>
              </li>
            </ul> */}
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {/* <li className="flex items-center">
                <IndexDropdown />
              </li> */}
              <li className="flex items-center">
                <a
                  className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/"
                >
                  {/* <i className="text-gray-500 fas fa-home text-lg leading-lg " /> */}
                  <span className=" inline-block ml-2">Accueil</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="#"
                >
                  {/* <i className="text-gray-500 fab fa-twitter text-lg leading-lg " /> */}
                  <span className=" inline-block ml-2">Nos Cours</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/blog"
                >
                  {/* <i className="text-gray-500 fab fa-github text-lg leading-lg " /> */}
                  <span className=" inline-block ml-2">Blog</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/about"
                >
                  {/* <i className="text-gray-500 fab fa-github text-lg leading-lg " /> */}
                  <span className=" inline-block ml-2">À propos</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/contact"
                >
                  <span className=" inline-block ml-2">Contact</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="#"
                >
                  <i className="fas fa-shopping-cart text-lg leading-lg " />
                </a>
                <p
                  class="relative bg-red-600 justify-center rounded-full font-semibold text-white text-xs text-center"
                  style={{ width: '15px', top: '-15px', right: '10px' }}
                >
                  0
                </p>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="#"
                >
                  <i className="fas fa-bell text-lg leading-lg " />
                </a>
                <p
                  class="relative bg-red-600 justify-center rounded-full font-semibold text-white text-xs text-center"
                  style={{ width: '15px', top: '-15px', right: '10px' }}
                >
                  4
                </p>
              </li>

              <UserDropdown />

              <li className="flex items-center">
                <button
                  className="bg-gray-800 text-white active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  Contribuez
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
