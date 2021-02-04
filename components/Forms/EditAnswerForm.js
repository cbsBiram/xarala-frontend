import { useMutation } from '@apollo/client'
import React, { useState } from 'react'

import { UPDATE_ANSWER } from '../../utils/mutations'
import { SINGLE_QUIZ_QUERY } from '../../utils/queries'

export default function EditAnswerForm({ answer, question, chapterSlug }) {
  const [label, setLabel] = useState(answer.label)
  const [isCorrect, setIsCorrect] = useState(answer.isCorrect)
  const [errorMessage, setErrorMessage] = useState('')

  const { id: questionId } = question
  const { id: answerId } = answer

  const updateCache = (cache, { data }) => {
    const existingQuiz = cache.readQuery({
      query: SINGLE_QUIZ_QUERY,
      variables: { chapterSlug },
    })
    console.log('Data', data)
    const { answer } = data.updateAnswer

    const existingAnwers = [...existingQuiz.quiz.questions, question]

    cache.writeQuery({
      query: SINGLE_QUIZ_QUERY,
      data: {
        quiz: [
          existingQuiz.quiz,
          ...existingQuiz.quiz.questions,
          ...existingAnwers.concat(answer),
        ],
      },
    })
  }

  const [updateAnswer, { data, errors }] = useMutation(UPDATE_ANSWER, {
    update: updateCache,
  })

  const handleSubmit = async (event) => {
    event.preventDefault()

    console.log(label, isCorrect)
    const { errors, data } = await updateAnswer({
      variables: { questionId, answerId, label, isCorrect },
    })

    if (errors) setErrorMessage(errors[0].message)
    else {
      alert('Réponse modifiée avec succès!')
    }
  }

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full bg-gray-200 border-0">
      <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        {errorMessage ? <FormError message={errorMessage} /> : <span></span>}
        <form className="mt-6 mb-6" onSubmit={(event) => handleSubmit(event)}>
          <div className="flex flex-wrap">
            <div className="w-full px-4">
              <div className="relative w-full mb-5">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="label"
                >
                  Label
                </label>
                <input
                  type="text"
                  name="label"
                  id="label"
                  required
                  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  defaultValue={answer.label}
                  onChange={(event) => setLabel(event.target.value)}
                />
              </div>
              <div className="flex flex-wrap mb-3 ml-5 items-center ">
                <label
                  className="uppercase text-gray-700 text-xs font-bold mb-2 mr-4"
                  htmlFor="is-correct"
                >
                  Est ce la bonne réponse ?
                </label>
                <input
                  type="checkbox"
                  name="is_correct"
                  id="is-correct"
                  className="px-4 -mt-2 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow"
                  defaultValue={answer.isCorrect}
                  onChange={(event) => setIsCorrect(event.target.checked)}
                />
              </div>
            </div>
          </div>

          <div className="flex mx-4 my-4 justify-end items-center">
            <button
              className="bg-green-400 active:bg-gray-700 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="submit"
            >
              Modifier
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
