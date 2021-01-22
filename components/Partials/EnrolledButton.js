import { useMutation, useQuery } from '@apollo/client'
import React from 'react'
import { useRouter } from 'next/router'
import { SUBSCRIBE_USER_TO_COURSE } from '../../utils/mutations'
import { CHECK_ENROLLEMENT_QUERY } from '../../utils/queries'
import Loading from '../Shared/Loading'
import { AUTH_TOKEN } from '../../utils/constants'

export const EnrolledButton = ({ course }) => {
  const courseId = course.id
  const router = useRouter()
  const [subscribeUser] = useMutation(SUBSCRIBE_USER_TO_COURSE)

  const handleSubscrireUserToCourse = async () => {
    if (!AUTH_TOKEN) {
      router.push(`/auth/login?next=/courses/${course.slug}`)
    } else {
      const {
        data: subscribeData,
        errors: subsCribeErrors,
        loading: subscribeLoading,
      } = await subscribeUser({
        variables: { courseId },
      })
      const { course } = subscribeData
      if (course) {
        alert('Cours enrollé avec succès')
        router.push(
          `/courses/lesson/${course.slug}?lecture=${course.courseChapters[0].courseLessons[0].slug}`
        )
      }
    }
  }

  const { data, errors, loading } = useQuery(CHECK_ENROLLEMENT_QUERY, {
    variables: {
      courseId,
    },
  })
  if (loading) return <Loading />
  if (errors) return <h2>Error</h2>
  const { checkEnrollement } = data

  return (
    <>
      {checkEnrollement ? (
        <button
          onClick={() =>
            router.push(
              `/courses/lesson/${course.slug}?lecture=${course.courseChapters[0].courseLessons[0].slug}`
            )
          }
          type="button"
          className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
        >
          <i className="fas fa-play mr-1"></i>
          Poursuivre
        </button>
      ) : (
        <button
          onClick={handleSubscrireUserToCourse}
          className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
        >
          <i className="fas fa-check mr-1"></i>
          Enroller
        </button>
      )}
    </>
  )
}
