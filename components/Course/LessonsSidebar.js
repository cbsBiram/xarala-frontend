import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

const LessonsSidebar = ({ course, lessonId, setOpen }) => {
  const router = useRouter()
  return (
    <>
      {/* Side Nav  */}
      <div
        id="sideNav"
        className="w-64  lg:w-auto -ml-64 lg:ml-0 bg-white lg:bg-gray-100 h-full min-h-screen fixed overflow-y-scroll block left-0 z-50"
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
            onClick={() => setOpen('closed')}
          >
            &times;
          </div>
        </div>

        {course.courseChapters.map((chapter) => (
          <div key={chapter.id}>
            <div className="bg-gray-300 p-3 mr-3 rounded-r-full text-sm uppercase font-medium text-gray-600 pl-8 hover:bg-gray-800 hover:text-white cursor-pointer transition hover-invert-img">
              <img
                src={require('assets/img/arrow-down.png')}
                alt="down arrow"
                className="float-left mt-2 mr-2 invert-me"
              />{' '}
              {chapter.name}
            </div>
            {chapter.courseLessons.map((courseLesson) => (
              <ul key={courseLesson.id}>
                <li
                  onClick={() =>
                    router.push(
                      `/courses/lesson/${course.slug}?lecture=${courseLesson.slug}`
                    )
                  }
                  className={`text-xs p-3 pr-0 pl-8 mt-2 mr-10 block  ${
                    courseLesson.id == lessonId
                      ? 'bg-purple-500 text-white'
                      : 'text-gray-800 '
                  }  rounded-r-full hover:bg-purple-500 cursor-pointer hover:text-white`}
                >
                  <button type="button">
                    <img
                      src={require('assets/img/dot.png')}
                      alt="dot"
                      className="float-left mt-1 mr-2"
                    />
                    {courseLesson.title}
                  </button>
                </li>
              </ul>
            ))}
            {chapter.quiz && (
              <ul>
                <li
                  onClick={() => router.push(`/courses/quiz/${chapter.slug}`)}
                  className="text-xs p-3 pr-0 pl-8 mt-2 mr-10 block rounded-r-full cursor-pointer"
                >
                  <button type="button">
                    <img
                      src={require('assets/img/dot.png')}
                      alt="dot"
                      className="float-left mt-1 mr-2"
                    />
                    {chapter.quiz.title} {'(Exercice)'}
                  </button>
                </li>
              </ul>
            )}
          </div>
        ))}
      </div>
      {/* Side Nav  */}
    </>
  )
}

export default LessonsSidebar
