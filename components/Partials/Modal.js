import React, { useState } from 'react'
import Tooltip from './Tooltip'

export default function Modal({ children, title, buttonTitle, edit }) {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      {buttonTitle && (
        <button
          className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-2 py-1 rounded shadow ml-2 mb-1 "
          type="button"
          onClick={() => setShowModal(true)}
        >
          {buttonTitle}
        </button>
      )}
      {edit && (
        <Tooltip tooltipText="Modifier" color="rgba(52, 211, 153)">
          <a role="button" tabIndex="0" onClick={() => setShowModal(true)}>
            <i className="fas fa-edit text-red-500 ml-2 mr-2 text-lg"></i>
          </a>
        </Tooltip>
      )}
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            // onClick={() => setShowModal(false)}
          >
            <div className="relative  w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 bg-gray-200 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-500 rounded-t rounded-b">
                  <h3 className="text-2xl font-semibold text-black">{title}</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-red-500 opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative flex-auto">{children}</div>
              </div>
            </div>
          </div>
          <div
            className="fixed inset-0 z-40 bg-black"
            style={{ opacity: '0.5' }}
          ></div>
        </>
      ) : null}
    </>
  )
}
