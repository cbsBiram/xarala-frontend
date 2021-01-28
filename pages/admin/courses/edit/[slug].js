import React from 'react'
import { useRouter } from 'next/router'

import Admin from 'layouts/Admin.js'
import EditCourseForm from '../../../../components/Forms/EditCourseForm'

export default function EditCourse() {
  const router = useRouter()
  const { slug } = router.query

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <EditCourseForm courseSlug={slug} />
        </div>
      </div>
    </>
  )
}

EditCourse.layout = Admin
