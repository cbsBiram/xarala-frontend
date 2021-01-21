import { useMutation, useQuery } from '@apollo/client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { SUBSCRIBE_USER_TO_COURSE } from '../../utils/mutations'
import { CHECK_ENROLLEMENT_QUERY } from '../../utils/queries'
import Loading from '../Shared/Loading'

export const EnrolledButton = ({ course }) => {
  const { data, errors, loading } = useQuery(CHECK_ENROLLEMENT_QUERY, {
    variables: {
      courseId: course.id,
    },
  })
  if (loading) return <Loading />
  if (errors) return <h2>Error</h2>
  const { checkEnrollement } = data

  return (
    <>
      {checkEnrollement ? (
        <Link
          as={`/courses/lesson/${course.slug}`}
          passHref
          href="/courses/lesson/[slug]"
        >
          <button
            type="button"
            className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
          >
            <i className="fas fa-play mr-1"></i>
            Poursuivre
          </button>
        </Link>
      ) : (
        <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
          <i className="fas fa-check mr-1"></i>
          Enroller
        </button>
      )}
    </>
  )
}
