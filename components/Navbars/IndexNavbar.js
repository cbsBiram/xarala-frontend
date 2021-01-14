import React from 'react'
import Link from 'next/link'
// components

// import IndexDropdown from 'components/Dropdowns/IndexDropdown.js'
import { AUTH_TOKEN } from '../../utils/constants'
import UserDropdown from '../Dropdowns/UserDropdown'

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex items-center justify-between lg:w-auto lg:static lg:block mx-4">
            <Link href="/">
              <a href="/" className="navbar-brand mr-16pt">
                <span className="avatar avatar-sm navbar-brand-icon mr-0 mr-lg-8pt">
                  <span className="avatar-title rounded bg-primary">
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
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
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
                <Link href="/courses">
                  <button
                    className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    type="button"
                  >
                    <span className=" inline-block ml-2">Nos Cours</span>
                  </button>
                </Link>
              </li>

              <li className="flex items-center">
                <Link href="/blog">
                  <button
                    type="button"
                    className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  >
                    <span className=" inline-block ml-2">Blog</span>
                  </button>
                </Link>
              </li>

              <li className="flex items-center">
                <Link href="/about">
                  <button
                    className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    type="button"
                  >
                    <span className=" inline-block ml-2">À propos</span>
                  </button>
                </Link>
              </li>

              <li className="flex items-center">
                <Link href="/contact">
                  <button
                    type="button"
                    className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  >
                    <span className=" inline-block ml-2">Contact</span>
                  </button>
                </Link>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="#"
                >
                  <i className="fas fa-shopping-cart text-lg leading-lg " />
                </a>
                <p
                  className="relative bg-red-600 justify-center rounded-full font-semibold text-white text-xs text-center"
                  style={{ width: '15px', top: '-15px', right: '10px' }}
                >
                  {/* if card else null */}
                  {/* 0 */}
                </p>
              </li>

              {AUTH_TOKEN ? (
                <li className="flex items-center">
                  <UserDropdown />
                </li>
              ) : (
                <li className="flex items-center">
                  <Link href="/auth/register">
                    <button
                      className="bg-gray-800 text-white active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Commencez
                    </button>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar
