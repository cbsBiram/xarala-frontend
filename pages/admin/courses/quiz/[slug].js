import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

import Admin from '../../../../layouts/Admin'
import CardQuestionsTable from '../../../../components/Cards/CardQuestionsTable'
import CreateQuestionForm from '../../../../components/Forms/CreateQuestionForm'
import Loading from '../../../../components/Shared/Loading'
import { SINGLE_QUIZ_QUERY } from '../../../../utils/queries'

export default function ViewQuiz() {
  const [openTab, setOpenTab] = useState(1)
  const router = useRouter()

  const { slug } = router.query
  const { loading, error, data: quizData } = useQuery(SINGLE_QUIZ_QUERY, {
    variables: {
      chapterSlug: slug,
    },
  })
  let { quiz } = quizData ? quizData : {}
  let { questions } = quiz ? quiz : {}

  if (loading) return <Loading />

  return (
    <>
      <div className="relative mt-20 flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-8 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  'text-xs font-bold uppercase px-3 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 1
                    ? 'text-white bg-gray-600'
                    : 'text-gray-600 bg-white')
                }
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab(1)
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Nouvelle question
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  'text-xs font-bold uppercase px-3 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 2
                    ? 'text-white bg-gray-600'
                    : 'text-gray-600 bg-white')
                }
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab(2)
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Liste des questions
              </a>
            </li>
          </ul>

          <div className={openTab === 1 ? 'block' : 'hidden'} id="link1">
            <CreateQuestionForm quiz={quiz} chapterSlug={slug} />
          </div>
          <div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
            <div className="mb-12">
              {quiz && (
                <CardQuestionsTable chapterSlug={slug} questions={questions} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

ViewQuiz.layout = Admin
