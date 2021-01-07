import React from 'react'
import ReactDOM from 'react-dom'
import '@fortawesome/fontawesome-free/js/all.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Head from 'next/head'
import Router from 'next/router'

import { AnimatePresence } from 'framer-motion'

import PageChange from 'components/PageChange/PageChange.js'
import 'assets/styles/tailwind.css'

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  document.body.classList.add('body-page-transition')
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById('page-transition')
  )
})
Router.events.on('routeChangeComplete', () => {
  ReactDOM.unmountComponentAtNode(document.getElementById('page-transition'))
  document.body.classList.remove('body-page-transition')
})
Router.events.on('routeChangeError', () => {
  ReactDOM.unmountComponentAtNode(document.getElementById('page-transition'))
  document.body.classList.remove('body-page-transition')
})

import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../lib/apolloClient'

export default function App({ Component, pageProps, pageTitle, router }) {
  const apolloClient = useApollo(pageProps.initialApolloState)
  const Layout = Component.layout || (({ children }) => <>{children}</>)

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Xarala Academy | {pageTitle}</title>
      </Head>
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <ApolloProvider client={apolloClient}>
            <Component {...pageProps} key={router.route} />
          </ApolloProvider>
        </AnimatePresence>
      </Layout>
    </>
  )
}
