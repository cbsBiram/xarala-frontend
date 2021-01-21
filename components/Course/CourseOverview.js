import { useMutation } from '@apollo/client'
import React from 'react'
import { SUBSCRIBE_USER_TO_COURSE } from '../../utils/mutations'
import { CourseTabs } from '../Partials/CourseTab'
import { EnrolledButton } from '../Partials/EnrolledButton'
import VideoLecture from '../Partials/VideoLecture'

const CourseOverview = ({ course }) => {
  const [subscribeUser] = useMutation(SUBSCRIBE_USER_TO_COURSE)

  const handleSubscrireUserToCourse = async (courseId) => {
    const { data, errors, loading } = await subscribeUser({
      variables: { courseId },
    })
    console.log(data, errors, loading)
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center text-center">
          <div className="mb-10 w-full h-auto mt-4">
            <h2 className="text-3xl font-semibold uppercase ">
              {course.title}
            </h2>
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
