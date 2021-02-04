import React from 'react'

import CardQuizTable from '../Cards/CardQuizTable'

const Quizzes = ({ user, courses }) => {
  return (
    <>
      <CardQuizTable user={user} courses={courses} />
    </>
  )
}

export default Quizzes
