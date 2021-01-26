import React from 'react'

export default function QuizAnswer({
  questionId,
  answer,
  index,
  handleChange,
}) {
  return (
    <>
      <div className="w-full  mb-2">
        <label className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio text-green-600"
            name={'answer-' + index}
            value={answer.id}
            onChange={() => handleChange(questionId, answer.id)}
          />
          <span className="ml-2 tex-sm text-gray-600">{answer.label}</span>
        </label>
      </div>
    </>
  )
}
