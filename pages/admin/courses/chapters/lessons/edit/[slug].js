import React from 'react'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

import Admin from '../../../../../../layouts/Admin'
import EditLessonForm from '../../../../../../components/Forms/EditLessonForm'
import Loading from '../../../../../../components/Shared/Loading'
import { SINGLE_LESSON_CHAPTER } from '../../../../../../utils/queries'

export default function EditLesson() {
  const router = useRouter()
  const { slug, section, lecture } = router.query

  const { data, errors, loading } = useQuery(SINGLE_LESSON_CHAPTER, {
    variables: {
      courseSlug: slug,
      chapterSlug: section,
      lessonSlug: lecture,
    },
  })
  const { lessonChapter } = data ? data : {}

  if (loading) return <Loading />

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          {lessonChapter && <EditLessonForm lesson={lessonChapter} />}
        </div>
      </div>
    </>
  )
}

EditLesson.layout = Admin
