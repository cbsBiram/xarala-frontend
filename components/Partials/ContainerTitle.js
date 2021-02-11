import React from 'react'

const ContainerTitle = ({ title }) => {
  return (
    <>
      <div className="w-full flex flex-col items-center lg:w-7/12 px-4 mb-10">
        <h2 className="text-normal font-semibold uppercase">{title}</h2>
        <div
          className="w-10 h-1 bg-blue-600 rounded mt-2"
          style={{ marginBottom: '30px' }}
        ></div>
      </div>
    </>
  )
}

export default ContainerTitle
