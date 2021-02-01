import React from 'react'
import { NextSeo } from 'next-seo'

import LoginComponent from '../../components/Auth/Login'
import Page from 'layouts/Page'

const Login = () => {
  return (
    <>
      <NextSeo
        title={`Xarala Academy | Authentification`}
        description={`Page d'authentification`}
      />
      <LoginComponent />
    </>
  )
}

Login.layout = Page

export default Login
