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
  const analyticsId = process.env.ANALYTICS_ID
  const Layout = Component.layout || (({ children }) => <>{children}</>)

  return (
    <>
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`}
        ></script>
        <script
          async
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', ${analyticsId});`,
          }}
        />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Xarala Academy La technologie dans votre langue"
        />
        <meta
          name="keywords"
          content="Xarala Academy, Xarala, Apprendre à coder, Apprendre Python, Formation Xarala, Formation Python"
        />
        <meta name="author" content="xarala" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>
          Xarala Academy |{' '}
          {pageTitle
            ? pageTitle
            : 'Accueil, Cours en ligne - La technologie dans votre langue'}
        </title>
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
