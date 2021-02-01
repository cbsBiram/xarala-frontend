import React from 'react'

import RegisterComponent from '../../components/Auth/Register'

import Page from 'layouts/Page'
import { NextSeo } from 'next-seo'

export default function Register() {
  return (
    <>
      <NextSeo
        title={`Xarala Academy | Inscription`}
        description={`Page d'inscription`}
      />
      <RegisterComponent />
    </>
  )
}

Register.layout = Page
