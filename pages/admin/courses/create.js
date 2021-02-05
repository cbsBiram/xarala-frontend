import React from 'react'

import Admin from 'layouts/Admin.js'
import CreateCourseForm from '../../../components/Forms/CreateCourseForm'
import { withAuthSync } from '../../../utils/auth'

const CreateCourse = () => {
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

export default withAuthSync(CreateCourse)
