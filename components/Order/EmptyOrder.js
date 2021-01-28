import Link from 'next/link'
import React from 'react'

const EmptyOrder = () => {
  return (
    <>
      <div className="relative block   pt-10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-center text-center">
            <div className="w-full">
              <h2 className="text-3xl font-semibold uppercase">
                Votre panier est vide
              </h2>
            </div>
          </div>

          <div className="flex justify-center text-sm py-2 px-4 font-normal my-6 w-full whitespace-no-wrap bg-transparent text-gray-800 bg-blue-400">
            <Link href="/courses?paid=1">
              <a href="#" className="text-normal ">
                Nos meilleures formations
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmptyOrder
