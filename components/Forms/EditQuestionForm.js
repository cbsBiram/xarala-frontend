import React, { useState } from 'react'
import { useMutation } from '@apollo/client'

import FormError from '../Shared/FormError'
import { UPDATE_QUESTION } from '../../utils/mutations'
import { SINGLE_QUIZ_QUERY } from '../../utils/queries'

export default function EditQuestionForm({ question, chapterSlug }) {
  const [label, setLabel] = useState(question.label)
  const [errorMessage, setErrorMessage] = useState('')

  const updateCache = (cache, { data }) => {
    const existingQuiz = cache.readQuery({
      query: SINGLE_QUIZ_QUERY,
      variables: { chapterSlug },
    })

    const { question } = data.updateQuestion

    cache.writeQuery({
      query: SINGLE_QUIZ_QUERY,
      data: {
        quiz: [
          existingQuiz.quiz,
          ...existingQuiz.quiz.questions.concat(question),
        ],
      },
    })
  }

  const [updateQuestion, { data, errors }] = useMutation(UPDATE_QUESTION, {
    update: updateCache,
  })

  const handleSubmit = async (event) => {
    event.preventDefault()

    const { id: questionId } = question
    const { errors, data } = await updateQuestion({
      variables: { questionId, label },
    })

    if (errors) setErrorMessage(errors[0].message)
    else {
      alert('Question modifiée avec succès!')
    }
  }

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full bg-gray-200 border-0">
      <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        {errorMessage ? <FormError message={errorMessage} /> : <span></span>}
        <form className="mt-6 mb-6" onSubmit={(event) => handleSubmit(event)}>
          <div className="flex flex-wrap">
            <div className="w-full px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="label"
                >
                  Titre
                </label>
                <input
                  type="text"
                  name="label"
                  id="label"
                  required
                  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  defaultValue={label}
                  onChange={(event) => setLabel(event.target.value)}
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
