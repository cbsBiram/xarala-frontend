import React from 'react'

import CreatePostForm from '../../../components/Forms/CreatePost'
import { withAuthSync } from '../../../utils/auth'

const CreatePost = () => {
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

export default withAuthSync(CreatePost)
