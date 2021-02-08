import React from 'react'
import { motion } from 'framer-motion'
import { NextSeo } from 'next-seo'

let easing = [0.175, 0.85, 0.42, 0.96]

const imageVariants = {
  exit: { y: 150, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
}

const cardVariants = {
  initial: { scale: 0.96, y: 30, opacity: 0 },
  enter: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
  },
  exit: {
    scale: 0.6,
    y: 100,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] },
  },
}
const Community = () => {
  return (
    <>
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
      >
        <NextSeo
          title="Xarala Academy | La communauté"
          description="Rejoignez-nous!"
        />
        <main>
          <section className="relative py-20 border-b">
            <div
              className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20 bg-gray-300"
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

            <div className="container  pt-20 mx-2">
              <div className="items-center flex flex-wrap">
                <motion.div
                  className="w-full md:w-4/12 ml-auto mr-auto px-4"
                  initial="exit"
                  animate="enter"
                  exit="exit"
                >
                  <motion.img
                    variants={imageVariants}
                    alt="..."
                    className="max-w-full rounded-lg shadow-lg"
                    src={require('assets/img/about/1.jpeg')}
                  />
                </motion.div>
                <div className="w-full  md:w-6/12 ml-auto mr-auto px-4">
                  <div className="md:pr-12">
                    <h2 className="text-3xl font-semibold">
                      <span className="text-blue-600 font-bold">Qui</span>{' '}
                      sommes-nous ?
                    </h2>
                    <div className="w-10 h-1 bg-blue-600 rounded mt-4"></div>
                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                      <span className="text-blue-600 fontw-full md:w-4/12 ml-auto mr-auto px-4-bold">
                        Xarala{' '}
                      </span>
                      , qui signifie “La technologie”, en Wolof, est une
                      plateforme d'apprentissage en ligne (E-Learning) qui
                      permet à toute personne d'apprendre les nouvelles
                      technologies.
                    </p>
                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                      L'idée est de permettre à tout un chacun d'apprendre la
                      technologie(bientôt tous les domaines) quelque soit la
                      langue qu'il parle, son niveau d'études...
                    </p>
                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                      L’objectif de
                      <span className="text-blue-600 font-bold"> Xarala </span>
                      est de devenir la référence numéro une de e-learning en
                      Afrique.
                    </p>
                    <ul className="list-none mt-6">
                      <li className="py-2">
                        <div className="flex items-center">
                          <div>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600  mr-4">
                              <i className="fas fa-check-circle text-base text-blue-600"></i>
                            </span>
                          </div>
                          <div>
                            <h4 className="text-gray-600">
                              Formateurs professionels et experimentés
                            </h4>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="flex items-center">
                          <div>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600  mr-4">
                              <i className="fas fa-check-circle text-base text-blue-600"></i>
                            </span>
                          </div>
                          <div>
                            <h4 className="text-gray-600">
                              Progressez dans votre vie
                            </h4>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="flex items-center">
                          <div>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600  mr-4">
                              <i className="fas fa-check-circle text-base text-blue-600"></i>
                            </span>
                          </div>
                          <div>
                            <h4 className="text-gray-600">
                              Améliorez votre niveau
                            </h4>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="flex items-center">
                          <div>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600  mr-4">
                              <i className="fas fa-check-circle text-base text-blue-600"></i>
                            </span>
                          </div>
                          <div>
                            <h4 className="text-gray-600">
                              Contenu de qualité et accessible
                            </h4>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="pb-5 block bg-gray-100">
            <div
              className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
                  className="text-gray-900 fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>

            <div className="container mx-auto px-4 lg:pt-24 lg:pb-24">
              <div className="items-center flex flex-wrap">
                <div className="w-full  ml-auto mr-auto px-4">
                  <div
                    className="md:pr-12 pb-20"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <h2 className="text-3xl font-semibold uppercase text-center">
                      Rejoignez notre communauté
                    </h2>

                    <div className="w-10 h-1 bg-blue-600 rounded mt-4 mb-5"></div>
                  </div>
                </div>
              </div>
              <motion.div
                variants={cardVariants}
                className="items-center flex flex-wrap justify-center"
              >
                <motion.div
                  whilehover="hover"
                  variants={{ hover: { scale: 1.1 } }}
                  className="lg:pt-8 pt-4 w-full md:w-4/12 px-4 text-center"
                >
                  <a
                    target="_blank"
                    href="http://bit.ly/xaralaYouTube"
                    className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
                  >
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-600">
                        <i className="fab fa-youtube text-2xl"></i>
                      </div>
                      <h6 className="text-xl font-semibold">Youtube</h6>
                    </div>
                  </a>
                </motion.div>

                <motion.div
                  whilehover="hover"
                  variants={{ hover: { scale: 1.1 } }}
                  className="lg:pt-8 pt-4 w-full md:w-4/12 px-4 text-center"
                >
                  <a
                    target="_blank"
                    href="https://discord.gg/2gZqqp5"
                    whilehover="hover"
                    variants={{ hover: { scale: 1.1 } }}
                    className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
                  >
                    <div className="px-4 py-5 flex-auto">
                      <div
                        className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full"
                        style={{ backgroundColor: 'rgba(165, 180, 252)' }}
                      >
                        <i className="fab fa-discord text-2xl"></i>
                      </div>
                      <h6 className="text-xl font-semibold">Discord</h6>
                    </div>
                  </a>
                </motion.div>

                <motion.div
                  whilehover="hover"
                  variants={{ hover: { scale: 1.1 } }}
                  className="lg:pt-8 pt-4 w-full md:w-4/12 px-4 text-center"
                >
                  <a
                    target="_blank"
                    href="https://twitter.com/xarala221"
                    className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
                  >
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                        <i className="fab fa-twitter text-2xl"></i>
                      </div>
                      <h6 className="text-xl font-semibold">Twitter</h6>
                    </div>
                  </a>
                </motion.div>

                <motion.div
                  whilehover="hover"
                  variants={{ hover: { scale: 1.1 } }}
                  className="lg:pt-8 pt-4 w-full md:w-4/12 px-4 text-center"
                >
                  <a
                    target="_blank"
                    href="https://web.facebook.com/xarala"
                    className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
                  >
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-600">
                        <i className="fab fa-facebook text-2xl"></i>
                      </div>
                      <h6 className="text-xl font-semibold">Facebook</h6>
                    </div>
                  </a>
                </motion.div>

                <motion.div
                  whilehover="hover"
                  variants={{ hover: { scale: 1.1 } }}
                  className="lg:pt-8 pt-4 w-full md:w-4/12 px-4 text-center"
                >
                  <a
                    target="_blank"
                    href="https://linkedin.com/in/xarala221"
                    className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
                  >
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-600">
                        <i className="fab fa-linkedin text-2xl"></i>
                      </div>
                      <h6 className="text-xl font-semibold">LinkedIn</h6>
                    </div>
                  </a>
                </motion.div>
                <motion.div
                  whilehover="hover"
                  variants={{ hover: { scale: 1.1 } }}
                  className="lg:pt-8 pt-4 w-full md:w-4/12 px-4 text-center"
                >
                  <a
                    target="_blank"
                    href="https://github.com/xarala221"
                    className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
                  >
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-black p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg bg-white rounded-full">
                        <i className="fab fa-github text-3xl"></i>
                      </div>
                      <h6 className="text-xl font-semibold">GitHub</h6>
                    </div>
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </main>
      </motion.div>
    </>
  )
}

export default Community
