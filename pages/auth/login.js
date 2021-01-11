import React from 'react'

import LoginComponent from '../../components/Auth/Login'

import Page from 'layouts/Page'

const Login = () => {
  return (
    <>
      <LoginComponent />
    </>
  )
}

Login.layout = Page

export default Login
