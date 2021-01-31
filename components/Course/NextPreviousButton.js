import Link from 'next/link'
import React from 'react'

const NextPreviousButton = ({ courseSlug, lesson }) => {
  const { getPrevious, getNext } = lesson

  return (
    <>
      <div className="flex relative items-center my-4">
        {getPrevious && (
          <Link href={`/courses/lesson/${courseSlug}?lecture=${getPrevious}`}>
            <button className="border cursor-pointer border-blue-400 text-blue-400  rounded-sm font-bold py-4 px-6 mr-2 flex items-center hover:bg-blue-700 hover:text-white">
              Précedent
            </button>
          </Link>
        )}

        {getNext && (
          <Link
            href={`/courses/lesson/${courseSlug}?lecture=${lesson.getNext}`}
          >
            <button className="border cursor-pointer border-blue-400 bg-blue-400 text-white rounded-sm font-bold py-4 px-6 ml-2 flex items-center">
              Suivant
            </button>
          </Link>
        )}
      </div>
    </>
  )
}

export default NextPreviousButton
