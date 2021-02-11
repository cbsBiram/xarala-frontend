import React from 'react'
import { CourseTabs } from '../Partials/CourseTab'
import { EnrolledButton } from '../Partials/EnrolledButton'
import VideoLecture from '../Partials/VideoLecture'

const CourseOverview = ({ course }) => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center text-center">
          <div className="mb-10 w-full h-auto mt-4">
            <h2 className="text-xl font-semibold uppercase ">{course.title}</h2>
            <VideoLecture lesson={course.courseChapters[0].courseLessons[0]} />
          </div>
        </div>

        <CourseTabs course={course} />
        <EnrolledButton course={course} />
      </div>
    </>
  )
}

export default CourseOverview
