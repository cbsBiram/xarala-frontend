import React from 'react'
import { useRouter } from 'next/router'

import Admin from 'layouts/Admin.js'
import EditCourse from '../../../../components/Forms/EditCourse'

export default function Edit() {
  const router = useRouter()
  const { slug } = router.query

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <EditCourse courseSlug={slug} />
        </div>
      </div>
    </>
  )
}

Edit.layout = Admin
