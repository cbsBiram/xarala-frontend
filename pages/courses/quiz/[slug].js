import React from 'react'
import { NextSeo } from 'next-seo'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

import Loading from '../../../components/Shared/Loading'
import Page from '../../../layouts/Page'
import QuizComponent from '../../../components/Quiz/Quiz'
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
  return (
    <>
      <NextSeo
        title="Xarala Academy | Examen en ligne"
        description="Testez votre niveau sur Xarala"
      />
      {quiz && <QuizComponent quiz={quiz} />}
    </>
  )
}

Quiz.layout = Page
export default Quiz
