import React from 'react'
import IndexNavbar from 'components/Navbars/IndexNavbar.js'
import FooterSmall from 'components/Footers/FooterSmall.js'
import Footer from 'components/Footers/Footer.js'

const Page = ({ children }) => {
  return (
    <>
      <IndexNavbar fixed />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-100">
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Page
