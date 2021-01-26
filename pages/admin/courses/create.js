import React from 'react'

import Admin from 'layouts/Admin.js'
import CreateCourse from '../../../components/Forms/CreateCourse'

export default function Create() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <CreateCourse />
        </div>
      </div>
    </>
  )
}

Create.layout = Admin
