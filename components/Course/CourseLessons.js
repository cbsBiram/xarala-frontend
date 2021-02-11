import React, { useState } from 'react'
import UserDropdown from '../Dropdowns/UserDropdown'
import VideoLecture from '../Partials/VideoLecture'

import LessonsSidebar from './LessonsSidebar'
import NextPreviousButton from './NextPreviousButton'

const CourseLessons = ({ course, lesson }) => {
  const [openMenu, setOpenMenu] = useState('')

  return (
    <>
      <div className="px-4">
        <div id="app" className={`container mx-auto px-4 lg:mx-0 ${openMenu}`}>
          <div id="sideNavBg" className="fixed inset-0 w-full h-full"></div>
          <LessonsSidebar
            course={course}
            lessonId={lesson.id}
            setOpen={setOpenMenu}
          />
          {/* Main Content  */}
          <div className="lg:ml-64 mb-12 content-container">
            <div className="flex flex-col justify-center h-24 py-2">
              <div className="flex space-around pt-4">
                <span
                  id="menuBtn"
                  onClick={() => setOpenMenu('opened')}
                  className="lg:hidden mr-2 h-auto w-auto float-left rounded-full flex justify-center cursor-pointer pt-8 "
                >
                  <i className="fas fa-bars"></i>
                </span>
                <h1 className="flex-1 text-normal font-bold justify-center pt-4 mt-1">
                  {lesson.title}
                </h1>

                <div className="ml-8 -mt-2 flex cursor-pointer relative">
                  <UserDropdown />
                </div>
              </div>
            </div>
            {/* Video Container  */}
            <div className="relative rounded-lg cursor-pointer">
              <VideoLecture lesson={lesson} />
            </div>

            <div className="flex relative">
              <p className="mt-2">{lesson.text}</p>
              {/* ressources */}
            </div>

            <NextPreviousButton courseSlug={course.slug} lesson={lesson} />
          </div>
          {/* Main Content  */}
        </div>
      </div>
    </>
  )
}

export default CourseLessons
