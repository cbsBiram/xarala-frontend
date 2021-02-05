import React from 'react'
import { useQuery } from '@apollo/client'

import CardQuizTable from '../Cards/CardQuizTable'
import Loading from '../Shared/Loading'
import { ALL_CHAPTERS_USER_QUERY } from '../../utils/queries'

const Quizzes = ({ user }) => {
  const { loading, data } = useQuery(ALL_CHAPTERS_USER_QUERY)
  const { chaptersUser } = data ? data : []

  const chapters = chaptersUser
    ? chaptersUser.filter((chapter) => chapter.quiz)
    : {}

  if (loading) return <Loading />

  return (
    <>
      <CardQuizTable user={user} chapters={chapters} />
    </>
  )
}

export default Quizzes
