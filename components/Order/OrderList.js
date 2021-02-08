import React, { useState } from 'react'
import { totalSum } from '../../utils/common'
import OrderItems from './OrderItems'

import ValidateButton from './ValidateButton'

const OrderList = ({ order }) => {
  const subTotal = totalSum(order.items)
  const tax = 0
  const totalPrice = subTotal + tax

  return (
    <>
      <div className="relative block  bg-gray-200 pt-10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-center text-center">
            <div className="w-full">
              <h2 className="text-3xl font-semibold uppercase">Votre panier</h2>
            </div>
          </div>

          <div className="flex justify-center my-6">
            <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
              <div className="flex-1">
                <table className="w-full text-sm lg:text-base" cellSpacing="0">
                  <thead>
                    <tr className="h-12 uppercase">
                      <th className="hidden md:table-cell"></th>
                      <th className="text-left">Cours</th>
                      <th className="text-right">Prix</th>
                    </tr>
                  </thead>
                  <tbody>
                    <OrderItems items={order.items} />
                  </tbody>
                </table>
                <hr className="pb-6 mt-6" />
                <div className="my-4 mt-6 -mx-2 ">
                  <div className="lg:px-2 w-full">
                    <div className="p-4 bg-gray-100 rounded-full">
                      <h1 className="ml-2 font-bold uppercase">
                        Détails de la facturation
                      </h1>
                    </div>
                    <div className="p-4">
                      <p className="mb-6 italic">
                        Les frais sont calculés en fonction des valeurs que vous
                        avez choisies
                      </p>
                      <div className="flex justify-between border-b">
                        <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                          Sous-total
                        </div>
                        <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                          {subTotal}
                        </div>
                      </div>
                      <div className="flex justify-between pt-4 border-b">
                        <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                          Tax
                        </div>
                        <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                          {tax}
                        </div>
                      </div>
                      <div className="flex justify-between pt-4 border-b">
                        <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                          Total à payer
                        </div>
                        <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                          {totalPrice}
                        </div>
                      </div>

                      <ValidateButton order={order} totalPrice={totalPrice} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderList
