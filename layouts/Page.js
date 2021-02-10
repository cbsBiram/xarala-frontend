import React from 'react'

import IndexNavbar from '../components/Navbars/IndexNavbar'
import Loading from '../components/Shared/Loading'
import Footer from '../components/Footers/Footer'
import Newsletter from '../components/Footers/Newsletter'
import { useQuery } from '@apollo/client'
import { ME_QUERY } from '../utils/constants'

const Page = ({ children }) => {
  const { data, errors, loading } = useQuery(ME_QUERY)
  if (loading) return <Loading />
  if (errors) return <h2>Error</h2>
  const user = data ? data.me : null
  return (
    <>
      <IndexNavbar fixed currentUser={user} />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-100">
          {children}
        </div>
      </main>
      <Newsletter />
      <Footer />
    </>
  )
}

export default Page
