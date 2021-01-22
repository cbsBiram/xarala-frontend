import Link from 'next/link'
import React, { useState } from 'react'
import { CourseAccordion } from '../Partials/CourseAccordion'
import VideoLecture from '../Partials/VideoLecture'

const CourseLessons = ({ lesson }) => {
  const [openMenu, setOpenMenu] = useState('')

  return (
    <>
      <div id="app" className={`container mx-auto lg:mx-0 ${openMenu}`}>
        <div id="sideNavBg" className="fixed inset-0 w-full h-full"></div>
        {/* Side Nav  */}
        <div
          id="sideNav"
          className="w-64 -ml-64 lg:ml-0 bg-white lg:bg-gray-100 h-full min-h-screen fixed overflow-y-scroll block left-0 z-50"
        >
          <div className="h-24 flex flex-col justify-center relative">
            <Link href="/">
              <img
                src={require('assets/img/logo/logo.png')}
                style={{
                  height: '60px',
                }}
                alt="logo"
                className="w-16 mx-auto -mt-2"
              />
            </Link>
            <div
              id="closeSideNav"
              className="fixed right-0 bg-gray-100 h-8 w-8 flex justify-center items-center rounded-full text-2xl pt-0 pb-1 lg:hidden cursor-pointer mr-10"
              onClick={() => setOpenMenu('closed')}
            >
              &times;
            </div>
          </div>
          <div className="bg-gray-300 p-3 mr-3 rounded-r-full text-sm uppercase font-medium text-gray-600 pl-8 hover:bg-gray-800 hover:text-white cursor-pointer transition hover-invert-img">
            <img
              src="https://saasadventure.io/img/svgs/arrow-down.svg"
              alt="down arrow"
              className="float-left mt-2 mr-2 invert-me"
            />{' '}
            Week 1
          </div>
          <ul>
            <li>
              <a
                href="#_"
                className="text-xs p-3 pr-0 pl-8 mt-2 mr-10 block bg-purple-500 text-white rounded-r-full"
              >
                <img
                  src="https://saasadventure.io/img/svgs/dot.svg"
                  alt="dot"
                  className="float-left mt-1 mr-2"
                />
                <span className="font-bold mr-1">Day 1</span> Crafting the idea
              </a>
            </li>
            <li>
              <a
                href="#_"
                className="text-xs p-3 pr-0 pl-8 mt-2 mr-10 block text-gray-800 rounded-r-full hover:bg-purple-500 hover:text-white hover-invert-img"
              >
                <img
                  src="https://saasadventure.io/img/svgs/lock.svg"
                  alt="lock"
                  className="float-left mt-1 mr-2 invert-me"
                />
                <span className="font-bold mr-1">Day 2</span> The Landing Page
              </a>
            </li>
            <li>
              <a
                href="#_"
                className="text-xs p-3 pr-0 pl-8 mt-2 mr-10 block text-gray-800 rounded-r-full hover:bg-purple-500 hover:text-white hover-invert-img"
              >
                <img
                  src="https://saasadventure.io/img/svgs/lock.svg"
                  alt="lock"
                  className="float-left mt-1 mr-2 invert-me"
                />
                <span className="font-bold mr-1">Day 3</span> Get Our Page Live
              </a>
            </li>
            <li>
              <a
                href="#_"
                className="text-xs p-3 pr-0 pl-8 mt-2 mr-10 block text-gray-800 rounded-r-full hover:bg-purple-500 hover:text-white hover-invert-img"
              >
                <img
                  src="https://saasadventure.io/img/svgs/lock.svg"
                  alt="lock"
                  className="float-left mt-1 mr-2 invert-me"
                />
                <span className="font-bold mr-1">Day 4</span> Create Our App
              </a>
            </li>
            <li>
              <a
                href="#_"
                className="text-xs p-3 pr-0 pl-8 mt-2 mr-10 block text-gray-800 rounded-r-full hover:bg-purple-500 hover:text-white hover-invert-img"
              >
                <img
                  src="https://saasadventure.io/img/svgs/lock.svg"
                  alt="lock"
                  className="float-left mt-1 mr-2 invert-me"
                />
                <span className="font-bold mr-1">Day 5</span> Add Authentication
              </a>
            </li>
            <li>
              <a
                href="#_"
                className="text-xs p-3 pr-0 pl-8 mt-2 mr-10 block text-gray-800 rounded-r-full hover:bg-purple-500 hover:text-white hover-invert-img"
              >
                <img
                  src="https://saasadventure.io/img/svgs/lock.svg"
                  alt="lock"
                  className="float-left mt-1 mr-2 invert-me"
                />
                <span className="font-bold mr-1">Day 6</span> Add billing
              </a>
            </li>
            <li>
              <a
                href="#_"
                className="text-xs p-3 pr-0 pl-8 mt-2 mr-10 block text-gray-800 rounded-r-full hover:bg-purple-500 hover:text-white hover-invert-img"
              >
                <img
                  src="https://saasadventure.io/img/svgs/lock.svg"
                  alt="lock"
                  className="float-left mt-1 mr-2 invert-me"
                />
                <span className="font-bold mr-1">Day 7</span> The Dashboard
              </a>
            </li>
          </ul>
        </div>
        {/* Side Nav  */}
        {/* Main Content  */}
        <div className="lg:ml-64 lg:pl-10 mb-12">
          <div className="flex flex-col justify-center h-24 py-2">
            <div className="flex space-around">
              <h1 className="flex-1 text-xl font-bold justify-center">
                <span
                  id="menuBtn"
                  onClick={() => setOpenMenu('opened')}
                  className="lg:hidden mr-2 h-10 w-8 float-left rounded-full flex justify-center cursor-pointer"
                >
                  <img
                    src="https://saasadventure.io/img/svgs/menu.svg"
                    alt="menu icon"
                  />
                </span>
                <span className="uppercase">Day 1</span> - Crafting the Idea
              </h1>

              <div className="relative cursor-pointer mt-1">
                <div className="w-5 h-5 absolute right-0 top-0 bg-red-500 rounded-full text-center text-white text-xs font-bold -mr-2 -mt-2 pt-small">
                  4
                </div>
                <img
                  src="https://saasadventure.io/img/svgs/bell.svg"
                  alt="Bell Icon"
                />
              </div>
              <div className="ml-8 -mt-2 flex cursor-pointer relative">
                <img
                  src="https://saasadventure.io/img/avatar.jpg"
                  alt="User Avatar"
                  className="w-12 rounded-full border-3 border-purple-400"
                />
                <img
                  src="https://saasadventure.io/img/svgs/angle-down.svg"
                  alt="angle down"
                  className="pl-2"
                />
              </div>
            </div>
          </div>
          {/* Video Container  */}
          <div className="relative rounded-lg cursor-pointer">
            <img
              src="https://saasadventure.io/img/svgs/play-btn.svg"
              alt="play button"
              className="absolute play-btn-pos"
            />
            <img
              src="https://saasadventure.io/img/video-1-screenshot.png"
              alt="video screenshot"
            />
          </div>

          <div className="flex">
            <div className="flex-1">
              <div className="bg-gray-100 p-8 relative mt-8 pt-20 rounded-lg">
                <div className="absolute top-0 left-0 bg-purple-500 rounded-full px-4 py-2 text-white mt-5 -ml-3 font-bold text-sm">
                  Video Sections
                </div>
                <div className="flex space-around w-full mt-2 cursor-pointer p-1 rounded-full border border-gray-100 hover:bg-white hover:border-2 hover:border-gray-200 -ml-1 transition">
                  <div className="flex-1">
                    <div className="w-6 h-6 rounded-full bg-green-400 flex justify-center items-center float-left mr-2">
                      <img
                        src="https://saasadventure.io/img/svgs/checkmark.svg"
                        alt="checkmark"
                      />
                    </div>
                    <span className="text-green-400 float-left font-bold text-sm">
                      Brainstorming
                    </span>
                  </div>
                  <div className="flex-1 text-right hidden xl:block">
                    <span className="text-xs font-light text-gray-600 mr-2 mt-1 block">
                      2 min. 30 sec.
                    </span>
                  </div>
                </div>
                <div className="flex space-around w-full mt-3  bg-white p-1 rounded-full border border-gray-200 -ml-1 transition cursor-pointer">
                  <div className="flex-1">
                    <div className="w-6 h-6 rounded-full bg-gray-800 flex justify-center items-center float-left mr-2">
                      <img
                        src="https://saasadventure.io/img/svgs/pause.svg"
                        alt="pause"
                      />
                    </div>
                    <span className="text-gray-800 float-left font-bold text-sm">
                      Finding a Domain Name
                    </span>
                  </div>
                  <div className="flex-1 text-right hidden xl:block">
                    <span className="text-xs font-light text-gray-600 mr-2 mt-1 block">
                      5 min. 21 sec.
                    </span>
                  </div>
                </div>
                <div className="flex space-around w-full mt-2 cursor-pointer p-1 rounded-full border border-gray-100 hover:bg-white hover:border-2 hover:border-gray-200 -ml-1 transition">
                  <div className="flex-1">
                    <div className="w-6 h-6 rounded-full bg-gray-300 flex justify-center items-center float-left mr-2 ">
                      <img
                        src="https://saasadventure.io/img/svgs/play.svg"
                        alt="play"
                      />
                    </div>
                    <span className="text-gray-500 float-left font-medium text-sm">
                      Creating the Logo
                    </span>
                  </div>
                  <div className="flex-1 text-right hidden xl:block">
                    <span className="text-xs font-light text-gray-600 mr-2 mt-1 block">
                      12 min. 51 sec.
                    </span>
                  </div>
                </div>
                <div className="relative mt-8">
                  <p className="text-gray-600 font-medium text-xs">
                    10% Completed
                  </p>
                  <div className="relative rounded-full h-3 bg-gray-300 w-full mt-2">
                    <div className="absolute w-1/12 bg-green-400 rounded-full h-full"></div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 p-8 relative mt-8 pt-20 rounded-lg">
                <div className="absolute top-0 left-0 bg-purple-500 rounded-full px-4 py-2 text-white mt-5 -ml-3 font-bold text-sm">
                  Video Details
                </div>
                <p className="text-gray-600 text-sm xl:text-normal">
                  In this first video we'll be covering brainstorming, finding a
                  domain, and creating a logo. Why are we creating a logo at
                  such an early stage? Believe me, it will help to conceptualize
                  and motivate throughout this adventure!
                </p>
              </div>
              <div className="bg-gray-100 p-8 relative mt-8 pt-20 rounded-lg">
                <div className="absolute top-0 left-0 bg-purple-500 rounded-full px-4 py-2 text-white mt-5 -ml-3 font-bold text-sm">
                  Homework
                </div>
                <p className="text-gray-600 text-sm xl:text-normal">
                  Here are your homework tasks for the day:
                </p>
                <ol className="list-disc text-gray-700 mt-6 text-normal xl:text-lg ml-5 xl:ml-8">
                  <li>Brainstorm an idea for your SAAS</li>
                  <li className="mt-1">Find a domain for your SAAS</li>
                  <li className="mt-1">Create a logo for your SAAS</li>
                </ol>
              </div>
              <div className="bg-gray-100 p-8 relative mt-8 pt-20 rounded-lg">
                <div className="absolute top-0 left-0 bg-purple-500 rounded-full px-4 py-2 text-white mt-5 -ml-3 font-bold text-sm">
                  Link Resources
                </div>
                <p className="text-gray-600 text-sm xl:text-normal">
                  Here are the link resources mentioned in this video:
                </p>
                <div className="mt-5">
                  <a
                    href="#"
                    className="underline text-pink-400 font-bold block"
                  >
                    Dribbble
                  </a>
                  <a
                    href="#"
                    className="underline text-pink-400 font-bold block"
                  >
                    NameCheap
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-1 ml-8">
              <div className="bg-gray-100 p-8 relative mt-8 pt-20 rounded-lg">
                <div className="absolute top-0 left-0 bg-pink-500 rounded-full px-4 py-2 text-white mt-5 -ml-3 font-bold text-sm">
                  Completion
                </div>
                <img
                  src="https://saasadventure.io/img/badges/day-1.png"
                  alt="Badge Day 1"
                  className="w-3/5 mx-auto badge-filter transition"
                />
                <p className="text-gray-600 text-sm xl:text-normal mt-6 text-center px-4">
                  After finishing your{' '}
                  <span className="font-bold">homework</span>, mark this as
                  <span className="font-bold">completed</span> to earn your
                  badge.
                </p>
                <div className="h-16 bg-gray-400 flex flex-col justify-center text-center rounded mt-4 hover:bg-green-400 transition cursor-pointer">
                  <div className="w-full">
                    <span className="w-5 h-5 rounded bg-gray-200 mr-2 inline-block -mb-1"></span>
                    <span className="text-lg uppercase font-medium text-white inline-block">
                      Mark as Completed
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 p-8 relative mt-4 pt-20 rounded-lg">
                <div className="absolute top-0 left-0 bg-pink-500 rounded-full px-4 py-2 text-white mt-5 -ml-3 font-bold text-sm">
                  File Downloads
                </div>
                <div>
                  <a
                    href="#"
                    className="text-gray-600 font-bold block hover:underline"
                  >
                    Source Code
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 font-bold block hover:underline"
                  >
                    Video HD 1080
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 font-bold block hover:underline"
                  >
                    Video HD 720
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 font-bold block hover:underline"
                  >
                    Video SD 540
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Main Content  */}
      </div>
    </>
  )
}

export default CourseLessons
