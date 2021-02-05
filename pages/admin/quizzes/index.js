import React from 'react'
import { useQuery } from '@apollo/client'

import Loading from '../../../components/Shared/Loading'
import Quizzes from '../../../components/Dashboard/Quizzes'
import { ME_QUERY } from '../../../utils/constants'
import { withAuthSync } from '../../../utils/auth'

const Index = () => {
  const { error, loading, data } = useQuery(ME_QUERY)
  const { me } = data ? data : []

  const { coursesCreated } = me ? me : {}
  const { coursesEnrolled } = me ? me : {}

  const courses = me.isTeacher ? coursesCreated : coursesEnrolled

  if (loading) return <Loading />

  return (
    <>
      <Quizzes user={me} courses={courses} />
    </>
  )
}

export default withAuthSync(Index)
