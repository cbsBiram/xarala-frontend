import React from 'react'
// import Router from "next/router";
import ErrorPage from '../components/Pages/404'
import Page from '../layouts/Page'

const Error404 = () => {
  return <ErrorPage />
}

Error404.layout = Page

export default Error404
