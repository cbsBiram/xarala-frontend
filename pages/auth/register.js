import React from 'react'

import RegisterComponent from '../../components/Auth/Register'

import Page from 'layouts/Page'

export default function Register() {
  return (
    <>
      <RegisterComponent />
    </>
  )
}

Register.layout = Page
