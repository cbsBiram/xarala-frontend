import React from 'react'
import { motion } from 'framer-motion'

export default function Newsletter() {
  return (
    <div
      className="w-full  bg-gray-500  bg-no-repeat"
      style={{
        backgroundBlendMode: 'multiply',
        backgroundPosition: 'center center',
        backgroundImage:
          "url('https://images.unsplash.com/photo-1572297870735-065d402f7b29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      <div className=" p-10  py-20  flex  flex-col  flex-wrap items-center justify-center  content-center">
        <div className=" m-0  p-0  text-3xl  text-white  antialiased  text-center">
          Newsletter - Restez informés sur nos actualités
        </div>
        <div className=" m-0  p-0  text-lg  text-white  antialiased  text-center">
          En savoir plus sur nos évènements à venir et le reste de notre
          actualité
        </div>
        <div className=" mt-3  flex  flex-row  flex-wrap">
          <input
            type="text"
            className=" text-gray-600   p-2 rounded-l-lg"
            style={{
              borderTopLeftRadius: '0.5rem',
              borderBottomLeftRadius: '0.5rem ',
            }}
            placeholder="john@mail.com"
          />
          <motion.button
            className=" p-2  bg-indigo-400  rounded-r-lg  text-white hover: bg-indigo-300"
            type="button"
            whileHover="hover"
            variants={{
              hover: {
                backgroundColor: 'rgba(129, 140, 248)',
              },
            }}
            style={{
              borderTopRightRadius: '0.5rem ',
              borderBottomRightRadius: '0.5rem ',
              backgroundColor: 'rgba(99, 102, 241)',
            }}
          >
            <span className="font-semibold">S'inscrire</span>
          </motion.button>
        </div>
      </div>
    </div>
  )
}
