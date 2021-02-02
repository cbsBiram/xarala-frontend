import React from 'react'

import Admin from 'layouts/Admin.js'
import CreatePostForm from '../../../components/Forms/CreatePost'

export default function CreatePost() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <CreatePostForm />
        </div>
      </div>
    </>
  )
}

CreatePost.layout = Admin
