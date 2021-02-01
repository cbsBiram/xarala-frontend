import React from 'react'
import { NextSeo } from 'next-seo'

import EmptyOrder from '../components/Order/EmptyOrder'
import Loading from '../components/Shared/Loading'
import Page from '../layouts/Page'
import OrderList from '../components/Order/OrderList'
import { ORDER_QUERY } from '../utils/queries'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

const Order = () => {
  const router = useRouter()
  const { orderId } = router.query
  const { errors, loading, data } = useQuery(ORDER_QUERY, {
    variables: { orderId: orderId ? orderId : null },
  })
  if (loading) return <Loading />
  const { order } = data
  return (
    <>
      <NextSeo
        title={`Xarala Academy | Commandes`}
        description={`Consultez vos commandes`}
      />
      {order && order.items.length ? (
        <OrderList order={order} />
      ) : (
        <EmptyOrder />
      )}
    </>
  )
}

Order.layout = Page
export default Order
