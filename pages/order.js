import React from 'react'
import Page from '../layouts/Page'
import OrderList from '../components/Order/OrderList'
import { ORDER_QUERY } from '../utils/queries'
import Loading from '../components/Shared/Loading'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import EmptyOrder from '../components/Order/EmptyOrder'

const Order = () => {
  const router = useRouter()
  const { orderId } = router.query
  const { errors, loading, data } = useQuery(ORDER_QUERY, {
    variables: { orderId: orderId ? orderId : null },
  })
  if (loading) return <Loading />
  const { order } = data
  return <>{order ? <OrderList order={order} /> : <EmptyOrder />}</>
}

Order.layout = Page
export default Order
