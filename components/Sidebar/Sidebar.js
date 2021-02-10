import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import NotificationDropdown from '../Dropdowns/NotificationDropdown'
import UserDropdown from '../Dropdowns/UserDropdown'

export default function Sidebar({ user }) {
  const [collapseShow, setCollapseShow] = React.useState('hidden')
  const router = useRouter()
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-no-wrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-no-wrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow('bg-white m-2 py-3 px-6')}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link href="/">
            <a
              href="#xarala"
              className="md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0"
            >
              <img
                src={require('assets/img/logo/logo.png')}
                style={{
                  height: '60px',
                }}
                alt="logo"
                className=" align-middle border-none"
              />
            </a>
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              'md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ' +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-300">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/">
                    <a
                      href="#xarala"
                      className="md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0"
                    >
                      xarala
                    </a>
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow('hidden')}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="px-3 py-2 h-12 border border-solid  border-gray-600 placeholder-gray-400 text-gray-700 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-gray-600 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Tableau de bord
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link href="/admin/dashboard">
                  <a
                    href="#xarala"
                    className={
                      'text-xs uppercase py-3 font-bold block ' +
                      (router.pathname.indexOf('/admin/dashboard') !== -1
                        ? 'text-blue-500 hover:text-blue-600'
                        : 'text-gray-800 hover:text-gray-600')
                    }
                  >
                    <i
                      className={
                        'fas fa-chart-line mr-2 text-sm ' +
                        (router.pathname.indexOf('/admin/dashboard') !== -1
                          ? 'opacity-75'
                          : 'text-gray-400')
                      }
                    ></i>{' '}
                    Stats
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/settings">
                  <a
                    href="#xarala"
                    className={
                      'text-xs uppercase py-3 font-bold block ' +
                      (router.pathname.indexOf('/admin/settings') !== -1
                        ? 'text-blue-500 hover:text-blue-600'
                        : 'text-gray-800 hover:text-gray-600')
                    }
                  >
                    <i
                      className={
                        'fas fa-user mr-2 text-sm ' +
                        (router.pathname.indexOf('/admin/settings') !== -1
                          ? 'opacity-75'
                          : 'text-gray-400')
                      }
                    ></i>{' '}
                    Mon compte
                  </a>
                </Link>
              </li>

              <li className="items-center">
                {user && user.isWriter && !user.isStaff ? (
                  <Link href="/admin/posts">
                    <a
                      href="#xarala"
                      className={
                        'text-xs uppercase py-3 font-bold block ' +
                        (router.pathname.indexOf('/admin/posts') !== -1
                          ? 'text-blue-500 hover:text-blue-600'
                          : 'text-gray-800 hover:text-gray-600')
                      }
                    >
                      <i
                        className={
                          'fas fa-shapes mr-2 text-sm ' +
                          (router.pathname.indexOf('/admin/posts') !== -1
                            ? 'opacity-75'
                            : 'text-gray-400')
                        }
                      ></i>{' '}
                      Mes articles
                    </a>
                  </Link>
                ) : (
                  <Link href="/admin/courses">
                    <a
                      href="#xarala"
                      className={
                        'text-xs uppercase py-3 font-bold block ' +
                        (router.pathname.indexOf('/admin/courses') !== -1
                          ? 'text-blue-500 hover:text-blue-600'
                          : 'text-gray-800 hover:text-gray-600')
                      }
                    >
                      <i
                        className={
                          'fas fa-play mr-2 text-sm ' +
                          (router.pathname.indexOf('/admin/courses') !== -1
                            ? 'opacity-75'
                            : 'text-gray-400')
                        }
                      ></i>{' '}
                      Mes cours
                    </a>
                  </Link>
                )}
              </li>

              {(user && user.isTeacher) || user.isStudent ? (
                <li className="items-center">
                  <Link href="/admin/quizzes">
                    <a
                      href="#xarala"
                      className={
                        'text-xs uppercase py-3 font-bold block ' +
                        (router.pathname.indexOf('/admin/quizzes') !== -1
                          ? 'text-blue-500 hover:text-blue-600'
                          : 'text-gray-800 hover:text-gray-600')
                      }
                    >
                      <i
                        className={
                          'fas fa-th-large mr-2 text-sm ' +
                          (router.pathname.indexOf('/admin/quizzes') !== -1
                            ? 'opacity-75'
                            : 'text-gray-400')
                        }
                      ></i>{' '}
                      Mes quizs
                    </a>
                  </Link>
                </li>
              ) : (
                ''
              )}

              {user.isStaff && (
                <>
                  <li className="items-center">
                    <Link href="/admin/authors">
                      <a
                        href="#xarala"
                        className={
                          'text-xs uppercase py-3 font-bold block ' +
                          (router.pathname.indexOf('/admin/authors') !== -1
                            ? 'text-blue-500 hover:text-blue-600'
                            : 'text-gray-800 hover:text-gray-600')
                        }
                      >
                        <i
                          className={
                            'fas fa-feather-alt mr-2 text-sm ' +
                            (router.pathname.indexOf('/admin/authors') !== -1
                              ? 'opacity-75'
                              : 'text-gray-400')
                          }
                        ></i>
                        Auteurs
                      </a>
                    </Link>
                  </li>
                  <li className="items-center">
                    <Link href="/admin/students">
                      <a
                        href="#xarala"
                        className={
                          'text-xs uppercase py-3 font-bold block ' +
                          (router.pathname.indexOf('/admin/students') !== -1
                            ? 'text-blue-500 hover:text-blue-600'
                            : 'text-gray-800 hover:text-gray-600')
                        }
                      >
                        <i
                          className={
                            'fas fa-user-graduate mr-2 text-sm ' +
                            (router.pathname.indexOf('/admin/students') !== -1
                              ? 'opacity-75'
                              : 'text-gray-400')
                          }
                        ></i>
                        Apprenants
                      </a>
                    </Link>
                  </li>
                  <li className="items-center">
                    <Link href="/admin/teachers">
                      <a
                        href="#xarala"
                        className={
                          'text-xs uppercase py-3 font-bold block ' +
                          (router.pathname.indexOf('/admin/teachers') !== -1
                            ? 'text-blue-500 hover:text-blue-600'
                            : 'text-gray-800 hover:text-gray-600')
                        }
                      >
                        <i
                          className={
                            'fas fa-chalkboard-teacher mr-2 text-sm ' +
                            (router.pathname.indexOf('/admin/teachers') !== -1
                              ? 'opacity-75'
                              : 'text-gray-400')
                          }
                        ></i>
                        Instructeurs
                      </a>
                    </Link>
                  </li>
                  <li className="items-center">
                    <Link href="/admin/logs">
                      <a
                        href="#xarala"
                        className={
                          'text-xs uppercase py-3 font-bold block ' +
                          (router.pathname.indexOf('/admin/logs') !== -1
                            ? 'text-blue-500 hover:text-blue-600'
                            : 'text-gray-800 hover:text-gray-600')
                        }
                      >
                        <i
                          className={
                            'fas fa-clipboard-list mr-2 text-sm ' +
                            (router.pathname.indexOf('/admin/logs') !== -1
                              ? 'opacity-75'
                              : 'text-gray-400')
                          }
                        ></i>
                        Logs
                      </a>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
