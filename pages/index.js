import React from 'react'
import dateformat from 'dateformat'

import { motion } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { gql, useQuery } from '@apollo/client'

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

export const COURSES_AND_POSTS_QUERY = gql`
  query coursesAndPosts {
    latestCourses {
      id
      title
      thumbnail
      teacher {
        firstName
        lastName
      }
      categories {
        name
      }
    }

    latestPosts {
      id
      title
      imageUrl
      publishDate
    }
  }
`

export default function Index() {
  const { loading, error, data } = useQuery(COURSES_AND_POSTS_QUERY)

  if (error) return <div>Error loading elements.</div>
  if (loading) return <div>Loading</div>

  const { latestCourses: allCourses, latestPosts: allPosts } = data

  return (
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
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
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
                    Bienvenue sur votre plateforme de e-learning en langue
                    locale
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
                    <a href="#" target="_blank">
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
                  style={{ marginBottom: '30px' }}
                ></div>
                <p className="text-md leading-relaxed m-4 text-gray-600">
                  Chez Xarala, notre mission est d'aider les ingénieurs
                  logiciels novices et professionnels à accroître leurs
                  compétences, à gagner plus d'argent et, en fin de compte, à
                  changer leur vie pour le mieux.
                </p>
                <a href="/auth/register">
                  <button
                    className="bg-blue-600 text-white active:bg-gray-700 text-md font-bold uppercase px-4 py-2 rounded-full shadow hover:shadow-lg hover:bg-blue-500 outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                    type="button"
                  >
                    S'inscrire
                  </button>
                </a>
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
                  style={{ marginBottom: '30px' }}
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
                  Des certificats de réussite que vous pouvez ajouter sur votre
                  CV pour booster votre carrière.
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
                  Des formations claires et concis. Ne perdez plus de temps avec
                  des cours longs, répétitifs et ennuyeux.
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
                  style={{ marginBottom: '30px' }}
                ></div>
                <p className="text-lg leading-relaxed text-gray-600">
                  Choisissez parmi de nombreux cours vidéos en ligne, avec de
                  nouveaux ajouts publiés chaque mois et élargissez vos
                  possibilités de carrière.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap">
              {allCourses.map((course) => (
                <div
                  className=" w-full md:w-4/12 px-4 text-center"
                  key={course.id}
                >
                  <a href="#">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                      <div className="px-4 py-5 flex-auto">
                        <div className="flex items-center justify-center border-b">
                          <img
                            // src={course.thumbnail ? course.thumbnail : require('assets/img/angular.jpg')}
                            src={`${process.env.MEDIA_URL}${course.thumbnail}`}
                          />
                        </div>
                        <div
                          className="items-end justify-end rounded-full"
                          style={{
                            position: 'absolute',
                            top: -3,
                            right: -3,
                          }}
                        >
                          <span className="text-xs font-semibold py-1 px-2 uppercase rounded  bg-green-500 uppercase last:mr-0 mr-1 ">
                            {course.categories[0].name}
                          </span>
                        </div>
                        <h6 className="text-xl font-semibold my-4">
                          {course.title}
                        </h6>
                        <div className="mb-4">
                          <i className="far fa-user mx-2"></i>
                          <span className="text-gray-600">
                            {course.teacher.firstName} {course.teacher.lastName}
                          </span>
                          <p className="mb-0">
                            <i
                              className="fas fa-star text-yellow-600"
                              style={{ color: 'rgba(251, 191, 36)' }}
                            ></i>
                            <i
                              className="fas fa-star text-warning"
                              style={{ color: 'rgba(251, 191, 36)' }}
                            ></i>
                            <i
                              className="fas fa-star text-warning"
                              style={{ color: 'rgba(251, 191, 36)' }}
                            ></i>
                            <i
                              className="fas fa-star text-warning"
                              style={{ color: 'rgba(251, 191, 36)' }}
                            ></i>
                            <i
                              className="fas fa-star text-warning"
                              style={{ color: 'rgba(251, 191, 36)' }}
                            ></i>
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center my-4">
              <a href="#">
                <button
                  className="bg-blue-600 text-white active:bg-gray-700 text-md font-bold uppercase px-4 py-2 rounded-full shadow hover:shadow-lg hover:bg-blue-500 outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  Voir les cours
                </button>
              </a>
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
              {allPosts.map((post) => (
                <div
                  className="p-4 md:w-1/3 md:mb-0 mb-6 my-4 flex flex-col justify-center items-center max-w-sm mx-auto"
                  key={post.id}
                >
                  <div>
                    <img
                      src={
                        post.imageUrl
                          ? post.imageUrl
                          : 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                      }
                    />
                  </div>

                  <div className=" w-70 bg-white  shadow-lg rounded-lg overflow-hidden p-5">
                    <h6 className="text-xl font-semibold my-4 text-center">
                      {post.title}
                    </h6>

                    <div className="inline-flex">
                      <div className="flex-1 text-sm font-semibold mb-2">
                        <i className="fas fa-pen-fancy mx-2"></i>
                        <span className="text-gray-600">
                          Par {post.author ? post.author : 'Xarala'}, le{' '}
                          {dateformat(post.publishDate, 'dd/mm/yyyy')}.
                        </span>
                      </div>
                    </div>
                    <div className="text-base text-justify">
                      <button className="bg-blue-100 text-blue-500 mt-4 block rounded p-2 text-sm ">
                        <span className="">Lire plus</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="flex items-center justify-center mt-8"
              style={{ marginBottom: '-40px' }}
            >
              <a href="/blog">
                <button
                  className="bg-blue-600 text-white active:bg-gray-700 text-md font-bold uppercase px-4 py-2 rounded-full shadow hover:shadow-lg hover:bg-blue-500 outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  Découvrir nos articles
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  )
}

Index.layout = Page
