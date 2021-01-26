import { useMutation, useQuery } from '@apollo/client'
import React from 'react'
import { useRouter } from 'next/router'
import {
  ADD_COURSE_TO_CART,
  CREATE_ORDER,
  SUBSCRIBE_USER_TO_COURSE,
} from '../../utils/mutations'
import { CHECK_ENROLLEMENT_QUERY } from '../../utils/queries'
import Loading from '../Shared/Loading'
import { AUTH_TOKEN } from '../../utils/constants'

export const EnrolledButton = ({ course }) => {
  const courseId = course.id
  const router = useRouter()
  const [subscribeUser] = useMutation(SUBSCRIBE_USER_TO_COURSE)
  const [addCourseToCart] = useMutation(ADD_COURSE_TO_CART)
  const [createOrder] = useMutation(CREATE_ORDER)

  const checkLogin = () => {
    if (!AUTH_TOKEN) {
      router.push(`/auth/login?next=/courses/${course.slug}`)
      return false
    }
    return true
  }

  const addNewOrder = async () => {
    const { data, errors, loading } = await createOrder()
    console.log('dat ', data, errors)
    if (errors) return null
    const { order } = data.createOrder
    return order
  }

  const handleAddToCart = async () => {
    if (checkLogin()) {
      const { id: orderId } = await addNewOrder()
      const { data, error, loading } = await addCourseToCart({
        variables: { courseId, orderId, quantity: 1 },
      })
      console.log(courseId, orderId, data)
      if (data) alert('Formation ajoutée au panier')
    }
  }

  const handleSubscrireUserToCourse = async () => {
    checkLogin()
    const { data, errors, loading } = await subscribeUser({
      variables: { courseId },
    })
    // const { course } = subscribeData
    alert('Cours enrollé avec succès')
    router.push(
      `/courses/lesson/${course.slug}?lecture=${course.courseChapters[0].courseLessons[0].slug}`
    )
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
      ) : course.price > 0 ? (
        <button
          onClick={handleAddToCart}
          type="button"
          className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
        >
          <i className="fas fa-shopping-basket mr-1"></i>
          Acheter
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
