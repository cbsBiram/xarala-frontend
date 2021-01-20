import React from 'react'
import { CourseTabs } from '../Partials/CourseTab'

const CourseOverview = ({ course }) => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center text-center">
          <div className="mb-10 w-full h-auto mt-4">
            <h2 className="text-3xl font-semibold uppercase ">
              {course.title}
            </h2>
            <div className="iframe-container">
              <iframe
                src="https://www.youtube.com/embed/ZYaPKYQy2Sw"
                class="inset-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <CourseTabs course={course} />
      </div>
    </>
  )
}

export default CourseOverview
