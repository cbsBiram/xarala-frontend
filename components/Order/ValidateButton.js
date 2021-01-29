import React from 'react'
import { useRouter } from 'next/router'
import { useMutation } from '@apollo/client'
import { SUBSCRIBE_USER_TO_COURSE, VALIDATE_ORDER } from '../../utils/mutations'

const ValidateButton = ({ order, totalPrice }) => {
  const [subscribeUser] = useMutation(SUBSCRIBE_USER_TO_COURSE)
  const [validateOrder] = useMutation(VALIDATE_ORDER)
  const router = useRouter()
  const redirectoToLecture = async (course) => {
    const { data, error, loading } = await subscribeUser({
      variables: { courseId: course.id },
    })

    if (error) {
      alert("Une erreur s'est produite")
    } else {
      alert('Cours enrollé avec succès')
      router.push(`/courses/`)
    }
  }

  const handleOrderPayment = async (orderId, course) => {
    const { data, error, loading } = await validateOrder({
      variables: { orderId, courseId: course.id },
    })
    const { isSuccess } = data.validateOrder
    if (isSuccess) {
      await redirectoToLecture(course)
    }
  }

  const handleSubscrireUserToCourse = async (items) => {
    if (totalPrice <= 0)
      if (items.length > 1) {
        items.map((item) => {
          handleOrderPayment(order.id, item.course)
        })
      } else {
        await handleOrderPayment(order.id, items[0].course)
      }
  }

  return (
    <>
      <button
        onClick={() => handleSubscrireUserToCourse(order.items)}
        className="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none"
      >
        <svg
          aria-hidden="true"
          data-prefix="far"
          data-icon="credit-card"
          className="w-8"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path
            fill="currentColor"
            d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
          />
        </svg>
        <span className="ml-2 mt-5px">Valider</span>
      </button>
    </>
  )
}

export default ValidateButton
