import { useMutation, useQuery } from '@apollo/client'
import React from 'react'
import { useRouter } from 'next/router'
import { ADD_COURSE_TO_CART, CREATE_ORDER } from '../../utils/mutations'
import { CHECK_ENROLLEMENT_QUERY } from '../../utils/queries'
import Loading from '../Shared/Loading'
import { getToken } from '../../utils/auth'

export const EnrolledButton = ({ course }) => {
  const courseId = course.id
  const router = useRouter()

  const [addCourseToCart] = useMutation(ADD_COURSE_TO_CART)
  const [createOrder] = useMutation(CREATE_ORDER)

  const checkLogin = () => {
    if (!getToken()) {
      router.push(`/auth/login?next=/courses/${course.slug}`)
      return false
    }
    return true
  }

  const addNewOrder = async () => {
    const { data, error, loading } = await createOrder()
    if (error) return null
    const { order } = data.createOrder
    return order
  }

  const handleAddToCart = async () => {
    if (checkLogin()) {
      const { id: orderId } = await addNewOrder()
      const { data, error, loading } = await addCourseToCart({
        variables: { courseId, orderId, quantity: 1 },
      })
      if (data) {
        alert('Formation ajoutée au panier')
        router.push(`/order?orderId=${orderId}`)
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
          className="block w-full max-w-xs mx-auto bg-blue-500 hover:bg-blue-700 focus:bg-blue-700 text-white rounded-lg px-3 py-3 font-semibold"
        >
          <i className="fas fa-play mr-1"></i>
          Poursuivre
        </button>
      ) : (
        <button
          onClick={handleAddToCart}
          type="button"
          className="block w-full max-w-xs mx-auto bg-blue-500 hover:bg-blue-700 focus:bg-blue-700 text-white rounded-lg px-3 py-3 font-semibold"
        >
          <i className="fas fa-shopping-basket mr-1"></i>
          Enroller
        </button>
      )}
    </>
  )
}
