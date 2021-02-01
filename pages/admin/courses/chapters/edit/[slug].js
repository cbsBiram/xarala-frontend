import React from 'react'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

import EditChapterForm from '../../../../../components/Forms/EditChapterForm'
import { SINGLE_CHAPTER_QUERY } from '../../../../../utils/queries'
import Admin from '../../../../../layouts/Admin'

export default function EditChapter() {
  const router = useRouter()
  const { slug, section } = router.query

  const { data, errors, loading } = useQuery(SINGLE_CHAPTER_QUERY, {
    variables: {
      courseSlug: slug,
      chapterSlug: section,
    },
  })
  const { chapterCourse } = data ? data : {}

  return (
    <div className="flex flex-wrap">
      <div className="w-full px-4">
        {chapterCourse && <EditChapterForm chapter={chapterCourse} />}
      </div>
    </div>
  )
}

EditChapter.layout = Admin
