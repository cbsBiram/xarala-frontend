import React from 'react'

const FormError = ({ message }) => {
  return (
    <>
      <p className="items-center text-center font-medium tracking-wide text-red-500 text-md mt-1 ml-1">
        {message}
      </p>
    </>
  )
}

export default FormError
