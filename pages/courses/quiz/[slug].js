import React from 'react'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

import Loading from '../../../components/Shared/Loading'
import Page from '../../../layouts/Page'
import QuizComponent from '../../../components/Quiz/QuizComponent'
import { SINGLE_QUIZ_QUERY } from '../../../utils/queries'

const Quiz = () => {
  const router = useRouter()
  const { slug } = router.query

  const { loading: quizLoading, errors: quizErrors, data: quizData } = useQuery(
    SINGLE_QUIZ_QUERY,
    {
      variables: {
        chapterSlug: slug,
      },
    }
  )
  const { quiz } = quizData ? quizData : {}

  if (quizLoading) return <Loading />
  return <>{quiz && <QuizComponent quiz={quiz} />}</>
}

Quiz.layout = Page
export default Quiz
