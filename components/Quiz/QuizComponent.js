import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'

import QuizAnswer from './QuizAnswer'
import { CREATE_USER_ANSWER } from '../../utils/mutations'

const QuizComponent = ({ quiz }) => {
  const router = useRouter()
  const [createUserAnswer] = useMutation(CREATE_USER_ANSWER)
  const [userAnswers, setUserAnswers] = useState([])

  const answerChange = (questionId, answerId) => {
    let element = {}
    element.question = questionId
    element.answer = answerId

    let isExist = false
    userAnswers.map((userAnswer) => {
      if (userAnswer.element.question === questionId) {
        userAnswer.element.answer = answerId
        isExist = true
      }
    })
    if (!isExist) userAnswers.push({ element })

    setUserAnswers(userAnswers)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    userAnswers.map(async (userAnswer) => {
      let questionId = userAnswer.element.question
      let answerId = userAnswer.element.answer
      let quizId = quiz.id

      const { data } = await createUserAnswer({
        variables: { quizId, questionId, answerId },
      })
    })
    router.push(`/courses/quiz/results/${quiz.chapter.slug}`)
  }

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
    >
      <NextSeo
        title="Xarala Academy | Examen en ligne"
        description="Testez votre niveau sur Xarala"
      />
      <main>
        <section className="py-10">
          <div className="container mx-auto pt-10 mx-2">
            <div className="shadow rounded-md w-full max-w-lg h-48">
              <div className="rounded-t bg-gray-200 mb-0 px-6 py-6">
                <div className="text-center flex justify-between">
                  <h6 className="text-gray-800 text-xl font-bold break-words">
                    Quiz pour le chapitre sur : {quiz.title}
                  </h6>
                </div>
              </div>

              <hr />

              <div className="flex-auto flex-wrap px-4 py-10 pt-0">
                <form onSubmit={(event) => handleSubmit(event)}>
                  {quiz.questions &&
                    quiz.questions.map((question, index) => (
                      <div key={question.id}>
                        <h6 className="text-sm mt-8 mb-6 font-semibold uppercase">
                          Q{index + 1} : {question.label} ?
                        </h6>
                        <div className="flex flex-wrap justify-center mx-4">
                          {question.answers &&
                            question.answers.map((answer) => (
                              <QuizAnswer
                                questionId={question.id}
                                key={answer.id}
                                answer={answer}
                                index={index}
                                handleChange={answerChange}
                              />
                            ))}
                        </div>
                        <hr className="mt-6 border-b-1 border-gray-400" />
                      </div>
                    ))}

                  <div className="flex mx-4 my-4 mt-10 justify-end items-center">
                    <button
                      className="bg-blue-400 active:bg-gray-700 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md hover:bg-green-400 mr-1 ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Valider
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  )
}

export default QuizComponent
