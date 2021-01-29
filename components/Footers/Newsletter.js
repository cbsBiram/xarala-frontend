import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useMutation } from '@apollo/client'
import { SUBSCRIBE_USER_TO_NEWSLETTER } from '../../utils/mutations'

const Newsletter = () => {
  const [subscribeUser] = useMutation(SUBSCRIBE_USER_TO_NEWSLETTER)
  const [email, setEmail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const {
      data: data,
      errors: errors,
      loading: loading,
    } = await subscribeUser({
      variables: { email },
    })
    alert("Merci beaucoup pour l'inscription -:)")
    setEmail('')
  }

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
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="email"
              className=" text-gray-600   p-2 rounded-l-lg"
              style={{
                borderTopLeftRadius: '0.5rem',
                borderBottomLeftRadius: '0.5rem ',
              }}
              placeholder="john@mail.com"
              name="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <motion.button
              className=" p-2  bg-indigo-400  rounded-r-lg  text-white hover:bg-blue-300"
              type="submit"
              whileHover="hover"
              variants={{
                hover: {
                  backgroundColor: 'rgba(129, 140, 248)',
                },
              }}
              style={{
                borderTopRightRadius: '0.5rem ',
                borderBottomRightRadius: '0.5rem ',
                backgroundColor: '#10a8e5ff',
              }}
            >
              <span className="font-semibold"> S'abonner</span>
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
