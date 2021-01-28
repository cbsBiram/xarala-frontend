import { useQuery } from '@apollo/client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { ORDER_QUERY } from '../../utils/queries'

const UserCart = () => {
  const { data, errors, loading } = useQuery(ORDER_QUERY)
  // const [order, setOrderData] = useState(null)
  if (loading) return <h2>Loading...</h2>
  // useEffect(() => {
  //   const { order } = data
  //   setOrderData(order)
  // }, [data])
  const { order } = data
  return (
    <>
      <Link href={`/order?orderId=${order ? order.id : ''}`}>
        <a
          className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
          href="#"
        >
          <i className="fas fa-shopping-cart text-lg leading-lg " />
        </a>
      </Link>

      <p
        className="relative bg-red-600 justify-center rounded-full font-semibold text-white text-xs text-center"
        style={{ width: '15px', top: '-15px', right: '10px' }}
      >
        {/* if card else null */}
        {order && order.items ? order.items.length : '0'}
      </p>
    </>
  )
}

export default UserCart
