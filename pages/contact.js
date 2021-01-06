import Link from 'next/link'

import Navbar from 'components/Navbars/AuthNavbar.js'
import IndexNavbar from 'components/Navbars/IndexNavbar.js'
import Footer from 'components/Footers/Footer.js'

export default function contact() {
  return (
    <>
      <IndexNavbar fixed />
      <main>
        <section className="relative py-20 border-b">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            bg-gray-300
            style={{ transform: 'translateZ(0)' }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto pt-20 mx-2">
            <div className="items-center flex flex-wrap">
              <div className="w-full  ml-auto mr-auto px-4">
                <div
                  className="md:pr-12"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <h2 className="text-3xl font-semibold uppercase text-center">
                    Nous écrire
                  </h2>

                  <div class="w-10 h-1 bg-blue-600 rounded mt-4 mb-5"></div>
                </div>

                <form
                  action=""
                  className="form bg-gray p-6 my-10 relative"
                  style={{
                    backgroundColor: 'rgba(229, 231, 235, 1)',
                    padding: '15px',
                  }}
                >
                  <div
                    className="icon-phone bg-blue-600 text-white w-6 h-6 absolute flex items-center justify-center p-5"
                    style={{ left: '-40px', top: '2px' }}
                  >
                    <i className="fas fa-phone-volume fa-fw text-2xl transform -rotate-45"></i>
                  </div>
                  <h3
                    className="text-2xl text-gray-900 font-semibold"
                    style={{ marginLeft: '50px' }}
                  >
                    Laissez nous vous contacter!
                  </h3>
                  <p className="text-gray-600" style={{ marginLeft: '50px' }}>
                    Afin de faire fructifier la collaboration
                  </p>
                  <div className="flex space-x-5 mt-8">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Nom complet"
                      className="border p-4  w-1/2"
                      style={{ marginRight: '15px' }}
                    />
                    <input
                      type="tel"
                      name=""
                      id=""
                      placeholder="Numéro de téléphone"
                      className="border p-4 w-1/2"
                    />
                  </div>
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Email"
                    className="border p-4 w-full mt-3"
                  />
                  <textarea
                    name=""
                    id=""
                    cols="10"
                    rows="3"
                    placeholder="Tell us about desired property"
                    className="border p-4 mt-3 w-full"
                  ></textarea>
                  <p className="font-bold text-sm mt-3">GDPR Agreement *</p>
                  <div className="flex items-baseline space-x-2 mt-2">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="inline-block mr-4"
                    />
                    <p className="text-gray-600 text-sm">
                      Je consens à laisser ce site web enregistrer les données
                      soumises via ce formulaire afin qu'ils puissent répondre à
                      mes sollicitations.
                    </p>
                  </div>
                  <input
                    type="submit"
                    value="Submit"
                    className="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3 rounded"
                  />
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
