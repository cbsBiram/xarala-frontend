import React from 'react'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { NextSeo } from 'next-seo'

import Page from '../../../../layouts/Page'
import Loading from '../../../../components/Shared/Loading'
import {
  SINGLE_QUIZ_QUERY,
  USER_ANSWERS_QUERY,
} from '../../../../utils/queries'

function Result() {
  const router = useRouter()
  const { slug } = router.query
  const { loading: loadingUserAnswer, data: userAnswerData } = useQuery(
    USER_ANSWERS_QUERY,
    {
      variables: { chapterSlug: slug },
    }
  )
  const { loading: loadingQuiz, data: quizData } = useQuery(SINGLE_QUIZ_QUERY, {
    variables: { chapterSlug: slug },
  })

  const { userAnswer } = userAnswerData ? userAnswerData : {}
  const { quiz } = quizData ? quizData : {}
  const nbQuestions = userAnswer ? userAnswer[0].quiz.questions.length : 0
  const nbCorrectAnswers = userAnswer
    ? userAnswer.filter((userAns) => userAns.answer.isCorrect).length
    : 0
  const score = nbQuestions ? (nbCorrectAnswers / nbQuestions) * 100 : 0

  console.log(userAnswerData)

  if (loadingUserAnswer || loadingQuiz) return <Loading />

  return (
    <>
      <NextSeo
        title="Xarala Academy | Examen en ligne"
        description="Evaluez vos résultats"
      />
      <div className="container px-10">
        <div className="flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0 mt-12">
          <div className="rounded-t bg-gray-200 mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-gray-800  text-xl font-bold">
                Résultat de l'exercice sur :{' '}
                <span className="text-blue-400 uppercase">
                  {userAnswer ? userAnswer[0].quiz.title : ''}
                </span>
              </h6>
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-4 pt-0">
            <p className="text-gray-700 text-sm mt-6 font-bold">
              Vous avez répondu correctement à {nbCorrectAnswers} questions sur{' '}
              {nbQuestions}. Ce qui vous fait un score de {score.toPrecision(3)}
              {'%'}.
            </p>
            <p className="text-gray-700 text-sm mt-2 font-bold">
              Revoyez les questions ci-dessous et retentez l'examen dans le
              futur.
            </p>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-8 pt-0">
            {quiz
              ? quiz.questions.map((question, i) => (
                  <div key={question.id}>
                    <hr className="mt-6 mb-6 border-b-1 border-gray-400" />
                    <p className="flex text-gray-700 text-lg mt-2 mb-2 font-bold">
                      {question.label} ?
                    </p>
                    <div className="overflow-x-auto">
                      <table className="table-auto striped border-collapse w-full">
                        <thead>
                          <tr
                            className="rounded-lg text-sm font-medium text-gray-700 text-left"
                            style={{ fontSize: '0.9674rem' }}
                          >
                            <th
                              className="px-4 py-2 bg-gray-200 "
                              style={{ backgroundColor: '#f8f8f8' }}
                            >
                              Réponse(s) :
                            </th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody className="text-sm font-normal text-gray-700">
                          {question.answers &&
                            question.answers.map((answer) =>
                              userAnswer &&
                              userAnswer[i].answer.id === answer.id ? (
                                <tr
                                  key={answer.id}
                                  className={`${
                                    answer.isCorrect
                                      ? 'bg-green-400 text-white font-bold'
                                      : 'bg-red-500 text-white font-bold'
                                  } border-gray-200`}
                                >
                                  <td className="px-4 py-4">{answer.label}</td>
                                  <td>
                                    <i
                                      className={`fas fa-${
                                        answer.isCorrect ? 'check' : 'times'
                                      }  text-xl text-white`}
                                    ></i>
                                  </td>
                                </tr>
                              ) : (
                                <tr
                                  key={answer.id}
                                  className={`${
                                    answer.isCorrect
                                      ? 'bg-green-400 text-white font-bold'
                                      : 'hover:bg-gray-100'
                                  }  border-b border-gray-200 py-10`}
                                >
                                  <td
                                    className="px-4 py-4"
                                    style={{ width: '95%' }}
                                  >
                                    {answer.label}
                                  </td>
                                  <td style={{ width: '5%' }}>
                                    <i
                                      className={`fas fa-${
                                        answer.isCorrect ? 'check' : 'times'
                                      }  text-xl text-white`}
                                    ></i>
                                  </td>
                                </tr>
                              )
                            )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))
              : ''}
          </div>
        </div>
      </div>
    </>
  )
}

Result.layout = Page
export default Result
