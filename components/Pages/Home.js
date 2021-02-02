import React from 'react'
import { motion } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { PostCard } from '../../components/Partials/PostCard'
import Link from 'next/link'
import { CourseCard } from '../../components/Partials/CourseCard'

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
const Home = ({ allPosts, allCourses }) => {
  return (
    <>
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
      >
        <NextSeo
          title="Xarala Academy | Accueil"
          description="La technologie dans votre langue"
        />
        <main>
          <div className="relative pt-16 pb-16 flex content-center items-center justify-center min-h-screen-75">
            <motion.div
              variants={imageVariants}
              className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage: `url(${require('assets/img/xarala-header.jpg')})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            >
              <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-75 bg-black"
              ></span>
            </motion.div>
            <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-10/12 px-4 ml-auto mr-auto text-center">
                  <div className="pr-12">
                    <h1 className="text-white font-semibold text-4xl">
                      Prenez Votre carrière en main.
                    </h1>
                    <p className="mt-4 text-xl text-gray-300">
                      Choisissez votre plateforme pour commencer!
                    </p>
                    <p className="flex flex-wrap items-center justify-center mt-4">
                      <a
                        href="https://play.google.com/store/apps/details?id=com.xaralamobile"
                        target="_blank"
                      >
                        <img
                          alt="google play"
                          src={require('assets/img/getiton-anroid.png')}
                          className="mx-4"
                          style={{ height: '50px' }}
                        />
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        className="mt-2 md:mt-0 lg:mt-4 xl:mt-0 sm:mt-0"
                      >
                        <img
                          alt="ios store"
                          src={require('assets/img/appstore1.png')}
                          className="mx-4 rounded"
                          style={{ height: '50px' }}
                        />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
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
                  className="text-gray-200 fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>
          </div>
          <section className="relative block  bg-gray-200 pt-10">
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-wrap justify-center text-center">
                <div
                  className="w-full lg:w-7/12 px-4 mb-10"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <h2 className="text-3xl font-semibold uppercase">
                    Rejoignez notre aventure
                  </h2>
                  <div
                    className="w-10 h-1 bg-blue-600 rounded mt-2"
                    style={{
                      marginBottom: '30px',
                      backgroundColor: '#10a8e5ff',
                    }}
                  ></div>
                  <p className="text-md leading-relaxed m-4 text-gray-600">
                    Chez Xarala, notre mission est d'aider les ingénieurs
                    logiciels novices et professionnels à accroître leurs
                    compétences, à gagner plus d'argent et, en fin de compte, à
                    changer leur vie pour le mieux.
                  </p>
                  <Link href="/auth/register">
                    <button
                      className="text-white active:bg-gray-700 text-md font-bold uppercase px-4 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                      type="button"
                      style={{ backgroundColor: '#10a8e5ff' }}
                    >
                      S'inscrire
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="relative block bg-white">
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
                  className="text-white fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>

            <div className="container mx-auto px-4 lg:pt-12 lg:pb-24">
              <div className="flex flex-wrap text-center justify-center">
                <div
                  className="w-full lg:w-7/12 px-4"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <h2 className="text-3xl font-semibold text-gray-700 uppercase">
                    Nos Fonctionnalités
                  </h2>
                  <div
                    className="w-10 h-1 bg-blue-600 rounded mt-2"
                    style={{
                      marginBottom: '30px',
                      backgroundColor: '#10a8e5ff',
                    }}
                  ></div>
                  <p className="text-lg leading-relaxed text-gray-600">
                    Maîtrisez les compétences qui vous permettront de vous
                    démarquer dans le monde professionnel de l'I.T.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap mt-12 justify-center">
                <div className="w-full lg:w-4/12 py-4 px-4 text-center">
                  <div className="p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                    <i
                      className="fas fa-lightbulb text-xl"
                      style={{ color: 'rgba(251, 191, 36)' }}
                    ></i>
                  </div>
                  <h5 className="text-xl mt-5 font-semibold text-gray-600">
                    Projet
                  </h5>
                  <p className="mt-2 mb-4 text-gray-500">
                    Vous travaillez sur des projets et cas d'utilisation réels.
                  </p>
                </div>
                <div className="w-full lg:w-4/12 py-4 px-4 text-center">
                  <div className="text-green-500 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                    <i className="fas fa-chalkboard-teacher text-xl"></i>
                  </div>
                  <h6 className="text-xl mt-5 font-semibold text-gray-600">
                    Instructeurs expérimentés
                  </h6>
                  <p className="mt-2 mb-4 text-gray-500">
                    Les meilleurs cours enseignés par les meilleurs formateurs.
                  </p>
                </div>
                <div className="w-full lg:w-4/12 py-4 px-4 text-center">
                  <div className="text-red-500 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                    <i className="fas fa-medal text-xl"></i>
                  </div>
                  <h5 className="text-xl mt-5 font-semibold text-gray-600">
                    Certificats professionnels
                  </h5>
                  <p className="mt-2 mb-4 text-gray-500">
                    Des certificats de réussite que vous pouvez ajouter sur
                    votre CV pour booster votre carrière.
                  </p>
                </div>

                <div className="w-full lg:w-4/12 py-4 px-4 text-center">
                  <div className="text-blue-400 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                    <i className="fas fa-file-video text-xl"></i>
                  </div>
                  <h5 className="text-xl mt-5 font-semibold text-gray-600">
                    Formation
                  </h5>
                  <p className="mt-2 mb-4 text-gray-500">
                    Des formations de qualitées, adaptées à votre besoin.
                  </p>
                </div>
                <div className="w-full lg:w-4/12 py-4 px-4 text-center">
                  <div
                    className="text-pink-600 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
                    style={{ color: 'rgba(219, 39, 119)' }}
                  >
                    <i className="fas fa-poll text-xl"></i>
                  </div>
                  <h6 className="text-xl mt-5 font-semibold text-gray-600">
                    Évolution rapide
                  </h6>
                  <p className="mt-2 mb-4 text-gray-500">
                    Des formations claires et concis. Ne perdez plus de temps
                    avec des cours longs, répétitifs et ennuyeux.
                  </p>
                </div>
                <div className="w-full lg:w-4/12 py-4 px-4 text-center">
                  <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                    <i className="fas fa-user-graduate text-xl"></i>
                  </div>
                  <h5 className="text-xl mt-5 font-semibold text-gray-600">
                    Mentorat
                  </h5>
                  <p className="mt-2 mb-4 text-gray-500">
                    Vous serez mentoré par les meilleurs formateurs.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="relative block  bg-gray-200 pt-10">
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-wrap justify-center text-center">
                <div
                  className="w-full lg:w-7/12 px-4 mb-10"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <h2 className="text-3xl font-semibold uppercase">
                    Nos meilleurs cours
                  </h2>
                  <div
                    className="w-10 h-1 bg-blue-600 rounded mt-2"
                    style={{
                      marginBottom: '30px',
                      backgroundColor: '#10a8e5ff',
                    }}
                  ></div>
                  <p className="text-lg leading-relaxed text-gray-600">
                    Choisissez parmi de nombreux cours vidéos en ligne, avec de
                    nouveaux ajouts publiés chaque mois et élargissez vos
                    possibilités de carrière.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap">
                {allCourses &&
                  allCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
              </div>
              <div className="flex items-center justify-center my-4">
                <Link href="/courses">
                  <button
                    className="bg-blue-600 text-white active:bg-gray-700 text-md font-bold uppercase px-4 py-2 rounded-full shadow hover:shadow-lg hover:bg-blue-500 outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Voir les cours
                  </button>
                </Link>
              </div>
            </div>
          </section>

          <section className="relative block pt-10">
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-wrap justify-center text-center">
                <div
                  className="w-full lg:w-7/12 px-4 mb-10"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <h2 className="text-3xl font-semibold uppercase">
                    Nos plus récents articles
                  </h2>
                  <div
                    className="w-10 h-1 bg-blue-600 rounded mt-2"
                    style={{ marginBottom: '20px' }}
                  ></div>
                  <p className="text-lg leading-relaxed text-gray-600">
                    Nous vous proposons aussi des articles marquants sur
                    l'actualité du web.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap">
                {allPosts &&
                  allPosts.map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
              </div>
              <div
                className="flex items-center justify-center mt-8"
                style={{ marginBottom: '-40px' }}
              >
                <a href="/blog">
                  <button
                    className="text-white active:bg-gray-700 text-md font-bold uppercase px-4 py-2 rounded-full hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                    type="button"
                    style={{ backgroundColor: '#10a8e5ff' }}
                  >
                    Découvrir nos articles
                  </button>
                </a>
              </div>
            </div>
          </section>
        </main>
      </motion.div>
    </>
  )
}

export default Home
