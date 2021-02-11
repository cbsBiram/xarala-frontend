import React from 'react'
import { NextSeo } from 'next-seo'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

import Loading from '../../../components/Shared/Loading'
import Page from '../../../layouts/Page'
import QuizComponent from '../../../components/Quiz/Quiz'
import Error400 from '../../400'
import { SINGLE_QUIZ_QUERY } from '../../../utils/queries'
import { ME_QUERY } from '../../../utils/constants'

const Quiz = () => {
  const router = useRouter()
  const { slug } = router.query

  const { loading: meLoading, data: meData } = useQuery(ME_QUERY)
  const { loading: quizLoading, errors: quizErrors, data: quizData } = useQuery(
    SINGLE_QUIZ_QUERY,
    {
      variables: {
        chapterSlug: slug,
      },
    }
  )

  const { quiz } = quizData ? quizData : {}
  const { me } = meData ? meData : {}

  if (quizLoading || meLoading) return <Loading />
  if (!me || !me.isStudent) return <Error400 />

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
