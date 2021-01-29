import React from 'react'
import { useApolloClient, useMutation } from '@apollo/client'
import { REMOVE_COURSE_FROM_CART } from '../../utils/mutations'

const RemoveCourseButton = ({ itemId }) => {
  const [removeCourse] = useMutation(REMOVE_COURSE_FROM_CART)

  const apolloClient = useApolloClient()
  const removeCourseFromCart = async (itemId) => {
    const { data, errors, loading } = await removeCourse({
      variables: { orderItemId: itemId },
    })
    alert('Element enleve')
    await apolloClient.resetStore()
  }

  return (
    <>
      <button
        type="submit"
        className="text-gray-700 md:ml-4"
        onClick={() => removeCourseFromCart(itemId)}
      >
        <small>(Supprimer)</small>
      </button>
    </>
  )
}

export default RemoveCourseButton
