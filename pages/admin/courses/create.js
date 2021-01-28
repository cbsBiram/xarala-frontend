import React from 'react'

import Admin from 'layouts/Admin.js'
import CreateCourseForm from '../../../components/Forms/CreateCourseForm'

export default function CreateCourse() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <CreateCourseForm />
        </div>
      </div>
    </>
  )
}

CreateCourse.layout = Admin
