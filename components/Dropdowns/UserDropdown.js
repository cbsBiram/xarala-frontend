import React from 'react'
import { createPopper } from '@popperjs/core'
import { logout } from '../../utils/auth'

const UserDropdown = () => {
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

  const handleLogout = async (event) => {
    event.preventDefault()
    await logout()
  }

  return (
    <>
      <a
        className="text-gray-600 block"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault()
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover()
        }}
      >
        <div className="mx-4 my-4 items-center flex">
          <span className="w-12 h-12 text-sm text-white bg-gray-300 inline-flex items-center justify-center rounded-full">
            <img
              alt="..."
              className="w-full rounded-full align-middle border-none shadow-lg"
              src={require('assets/img/team-1-800x800.jpg')}
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
        <a
          href="#pablo"
          className={
            'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800'
          }
          onClick={(e) => e.preventDefault()}
        >
          <i className="text-gray-500 fas fa-school text-lg leading-lg " />
          <span className="inline-block ml-2">Mes Cours</span>
        </a>
        <a
          href="#pablo"
          className={
            'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800'
          }
          onClick={(e) => e.preventDefault()}
        >
          <i className="text-gray-500 fas fa-clipboard-list text-lg leading-lg " />
          <span className="inline-block ml-2">Mes Commandes</span>
        </a>
        <a
          href="#pablo"
          className={
            'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800'
          }
          onClick={(e) => e.preventDefault()}
        >
          <i className="text-gray-500 fas fa-cog text-lg leading-lg " />
          <span className="inline-block ml-2">Paramètres</span>
        </a>
        <div className="h-0 my-2 border border-solid border-gray-200" />
        <a
          href="#pablo"
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
  )
}

export default UserDropdown
