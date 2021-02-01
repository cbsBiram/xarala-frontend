import React from 'react'
import { NextSeo } from 'next-seo'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

import Loading from '../../../components/Shared/Loading'
import CourseLessons from '../../../components/Course/CourseLessons'
import { SINGLE_COURSE_QUERY } from '../../../utils/constants'
import { SINGLE_LESSON_QUERY } from '../../../utils/queries'

const Lesson = () => {
  const router = useRouter()
  const { slug, lecture } = router.query
  // load course
  const {
    loading: courseLoading,
    errors: courseErrors,
    data: courseData,
  } = useQuery(SINGLE_COURSE_QUERY, {
    variables: {
      courseSlug: slug,
    },
  })
  // load lecture
  const {
    loading: lessonLoading,
    errors: lessonErrors,
    data: lessonData,
  } = useQuery(SINGLE_LESSON_QUERY, {
    variables: {
      lessonSlug: lecture,
    },
  })
  if (lessonLoading || courseLoading) return <Loading />
  return (
    <>
      {courseData && lessonData && (
        <>
          <NextSeo
            title={`Xarala Academy | ${courseData.course.title}`}
            description={`Visionnez la leçon sur ${lessonData.lesson.title}`}
          />

          <CourseLessons
            course={courseData.course}
            lesson={lessonData.lesson}
          />
        </>
      )}
    </>
  )
}

export default Lesson
