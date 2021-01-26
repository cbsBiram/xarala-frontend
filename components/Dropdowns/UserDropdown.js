import React, { useEffect, useState } from 'react'
import { createPopper } from '@popperjs/core'
import { logout } from '../../utils/auth'
import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { AUTH_TOKEN, ME_QUERY } from '../../utils/constants'
import { reloadToken } from '../../utils/common'
import { initializeApollo } from '../../lib/apolloClient'

const UserDropdown = ({ setOpen }) => {
  const [token, setToken] = useState(AUTH_TOKEN)
  const { error, loading, data } = useQuery(ME_QUERY)

  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false)
  const btnDropdownRef = React.createRef()
  const popoverDropdownRef = React.createRef()
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: 'bottom-start',
    })
    setDropdownPopoverShow(true)
  }
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false)
  }

  const handleLogout = (event) => {
    event.preventDefault()
    logout()
    closeDropdownPopover()
  }
  const { me } = data ? data : {}
  return (
    <>
      {token && me ? (
        <>
          <a
            className="text-gray-600 block"
            href="#xarala"
            ref={btnDropdownRef}
            onClick={(e) => {
              e.preventDefault()
              dropdownPopoverShow
                ? closeDropdownPopover()
                : openDropdownPopover()
            }}
          >
            <div className="mx-4 my-4 items-center flex">
              <span className="w-12 h-12 text-sm text-white bg-gray-300 inline-flex items-center justify-center rounded-full">
                <img
                  alt="Avatar"
                  className="w-full rounded-full align-middle border-none shadow-lg"
                  src={
                    me.avatar
                      ? `${process.env.MEDIA_URL}${me.avatar}`
                      : require('assets/img/team-1-800x800.jpg')
                  }
                />
              </span>
            </div>
          </a>
          <div
            ref={popoverDropdownRef}
            className={
              (dropdownPopoverShow ? 'block ' : 'hidden ') +
              'bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48'
            }
          >
            <div>
              <button
                type="button"
                className={
                  'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800'
                }
              >
                <i className="text-gray-500 fas fa-school fa-user text-lg leading-lg " />

                <span className="inline-block ml-2">
                  Bonjour, {data.me.email}
                </span>
              </button>
            </div>
            <Link href="/admin/dashboard">
              <a
                type="button"
                className={
                  'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800'
                }
              >
                <i className="text-gray-500 fas fa-school fa-tachometer-alt text-lg leading-lg " />

                <span className="inline-block ml-2">Tableau de board</span>
              </a>
            </Link>
            <Link href="/admin/settings">
              <a
                href="/admin/settings"
                className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
              >
                <i className="text-gray-500 far fa-user text-lg leading-lg" />
                <span className="inline-block ml-2">Mon Compte</span>
              </a>
            </Link>
            <div className="h-0 my-2 border border-solid border-gray-200" />

            <a
              href="#xarala"
              className={
                'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800'
              }
              onClick={(e) => handleLogout(e)}
            >
              <i className="text-gray-500 fas fa-sign-out-alt text-lg leading-lg " />
              <span className="inline-block ml-2">Déconnexion</span>
            </a>
          </div>
        </>
      ) : (
        <li className="flex items-center">
          <Link href="/auth/register">
            <button
              onClick={() => setOpen(false)}
              className="text-white text-xs font-bold uppercase px-4 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
              type="button"
              style={{ backgroundColor: '#10a8e5ff' }}
            >
              Commencez
            </button>
          </Link>
        </li>
      )}
    </>
  )
}

export default UserDropdown
