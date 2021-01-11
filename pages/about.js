import Link from 'next/link'
import { motion } from 'framer-motion'
import { NextSeo } from 'next-seo'

import Footer from 'components/Footers/Footer.js'
import IndexNavbar from 'components/Navbars/IndexNavbar.js'
import Navbar from 'components/Navbars/AuthNavbar.js'
import Page from '../layouts/Page'

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

export default function About() {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
    >
      <NextSeo
        title="Xarala Academy | À propos"
        description="Découvrez c'est quoi Xarala?"
      />
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
                    plateforme d'apprentissage en ligne (E-Learning) qui permet
                    à toute personne d'apprendre les nouvelles technologies.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    L'idée est de permettre à tout un chacun d'apprendre la
                    technologie(bientôt tous les domaines) quelque soit la
                    langue qu'il parle, son niveau d'études...
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    L’objectif de
                    <span className="text-blue-600 font-bold"> Xarala </span>est
                    de devenir la référence numéro une de e-learning en Afrique.
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

        <section className="pt-20 pb-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center">
              <div className="w-full md:w-6/12 ml-auto mr-auto px-4">
                <div className="md:pr-2">
                  <h2 className="text-3xl font-semibold">
                    Ce que nous offrons ?
                  </h2>
                  <div className="w-12 h-1 bg-blue-600 rounded mt-4"></div>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    Nous offrons des formations professionnelles enseignées par
                    des formateurs expérimentés et professionnels.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-4">
                      <div className="flex">
                        <div>
                          <span className="text-3xl font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 mr-3">
                            <i className="fas fa-laptop text-blue-600"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600 font-semibold mb-2">
                            Contenu de qualité
                          </h4>
                          <p className="text-gray-600">
                            Des contenus professionnels et accessibles quelques
                            soit votre niveau ou votre langue.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="py-4">
                      <div className="flex">
                        <div>
                          <span className="text-3xl font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 mr-3">
                            <i className="fas fa-crown text-blue-600"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600 font-semibold mb-2">
                            Nous parlons votre langue
                          </h4>
                          <p className="text-gray-600 mb-1">
                            Vivez une expérience unique en apprenant la
                            technologie dans une langue que vous maitrîsez.
                          </p>
                          <p className="text-gray-600 mt-1 mb-4">
                            Promouvoir la technologie dans les langues locales
                            africaines.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="w-full md:w-4/12 ml-auto mr-auto px-4"
                initial="exit"
                animate="enter"
                exit="exit"
              >
                <motion.img
                  alt="..."
                  variants={imageVariants}
                  className="max-w-full rounded-lg shadow-lg object-fill"
                  src={require('assets/img/about/2.jpeg')}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 block bg-gray-100">
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
                    Fonctionnalités requises
                  </h2>
                  <div className="w-10 h-1 bg-blue-600 rounded mt-4 mb-10"></div>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    Enseigner c'est apprendre deux fois. Sur Xarala nous
                    partageons nos connaissances et nos découvertes.
                  </p>
                </div>

                <motion.div variants={cardVariants} className="flex flex-wrap">
                  <motion.div
                    whileHover="hover"
                    variants={{ hover: { scale: 1.1 } }}
                    className="lg:pt-8 pt-4 w-full md:w-4/12 px-4 text-center"
                  >
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                          <i className="fas fa-laptop"></i>
                        </div>
                        <h6 className="text-xl font-semibold">
                          Formation professionnelle
                        </h6>
                        <p className="mt-2 mb-4 text-gray-600">
                          Vivez une expérience unique avec des formations
                          enseignées par des professionnels et experts.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover="hover"
                    variants={{ hover: { scale: 1.1 } }}
                    className="lg:pt-8 pt-4 w-full md:w-4/12 px-4 text-center"
                  >
                    <div
                      whileHover="hover"
                      variants={{ hover: { scale: 1.1 } }}
                      className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
                    >
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                          <i className="fas fa-user-graduate"></i>
                        </div>
                        <h6 className="text-xl font-semibold">
                          Mentorat personnalisé
                        </h6>
                        <p className="mt-2 mb-4 text-gray-600">
                          Soyez entourés par des coaches très expérimentés et
                          disponibles pour vous pousser à atteindre votre
                          objectif.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover="hover"
                    variants={{ hover: { scale: 1.1 } }}
                    className="lg:pt-8 pt-4 w-full md:w-4/12 px-4 text-center"
                  >
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-500">
                          <i className="fas fa-dollar-sign"></i>
                        </div>
                        <h6 className="text-xl font-semibold">
                          Tarif accessible
                        </h6>
                        <p className="mt-2 mb-4 text-gray-600">
                          Nos tarifs sont très abordables et chaque personne
                          peut se former quelques soit son budget.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover="hover"
                    variants={{ hover: { scale: 1.1 } }}
                    className="lg:pt-8 pt-4 w-full md:w-4/12 px-4 text-center"
                  >
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-600">
                          <i className="fas fa-crown"></i>
                        </div>
                        <h6 className="text-xl font-semibold">Projets réels</h6>
                        <p className="mt-2 mb-4 text-gray-600">
                          Nous vous donnons des projets qui représente des
                          problèmes au quotidien et des cas d'utilisation réels.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover="hover"
                    variants={{ hover: { scale: 1.1 } }}
                    className="lg:pt-8 pt-4 w-full md:w-4/12 px-4 text-center"
                  >
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                      <div className="px-4 py-5 flex-auto">
                        <div
                          className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full"
                          style={{
                            backgroundColor: 'rgba(251, 191, 36)',
                          }}
                        >
                          <i className="fas fa-user-cog"></i>
                        </div>
                        <h6 className="text-xl font-semibold">
                          Expérience unique
                        </h6>
                        <p className="mt-2 mb-4 text-gray-600">
                          Personnalisez la plateforme selon votre cas
                          d'utilisation.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    whileHover="hover"
                    variants={{ hover: { scale: 1.1 } }}
                    className="lg:pt-8 pt-4 w-full md:w-4/12 px-4 text-center"
                  >
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                      <div className="px-4 py-5 flex-auto">
                        <div
                          className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full"
                          style={{ backgroundColor: 'rgba(156, 163, 175)' }}
                        >
                          <i className="fas fa-check-square"></i>
                        </div>
                        <h6 className="text-xl font-semibold">
                          Problem Solving mindset
                        </h6>
                        <p className="mt-2 mb-4 text-gray-600">
                          Soyez créatif et apprenez à résoudre des problèmes
                          complexes.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center mb-10">
              <div className="w-full ml-auto mr-auto px-4 ">
                <div
                  className="text-center justify-center"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <h2 className="text-3xl font-semibold">L'équipe</h2>
                  <div
                    className="w-10 h-1 bg-blue-600 rounded mt-2"
                    style={{ marginBottom: '50px' }}
                  ></div>
                </div>
              </div>
              <div
                initial="exit"
                animate="enter"
                exit="exit"
                className="w-full md:w-4/12 ml-auto px-4"
              >
                <motion.img
                  variants={imageVariants}
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={require('assets/img/about/ousseynou.jpg')}
                />
              </div>
              <div className="w-full md:w-6/12  mr-auto px-4 mt-2 items-center">
                <h3 className="text-2xl font-semibold xs:mt-4 sm:mt-4">
                  Ousseynou
                </h3>
                <h4 className="text-gray-600 text-lg font-semibold mb-6">
                  Fondateur & Software developer
                </h4>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  Building the next generation of e-learning platform.
                </p>
                <div className="px-4">
                  <div className="mt-6 lg:mb-0 mb-6">
                    <button
                      className="bg-blue-500 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                      type="button"
                    >
                      <i className="fab fa-twitter text-lg"></i>
                    </button>
                    <button
                      className="bg-blue-600 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                      type="button"
                    >
                      <i className="fab fa-facebook-square text-lg"></i>
                    </button>
                    <button
                      className="bg-red-600 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                      type="button"
                    >
                      <i className="fab fa-google-plus text-lg"></i>
                    </button>
                    <button
                      className="bg-blue-600 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                      type="button"
                    >
                      <i className="fab fa-linkedin text-lg"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  )
}

About.layout = Page
