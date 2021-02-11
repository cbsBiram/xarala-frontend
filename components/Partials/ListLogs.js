import React from 'react'
import dateformat from 'dateformat'
import { motion } from 'framer-motion'

import Pagination from '../Shared/Pagination'

const ListLogs = ({ currentPage, pages, logs }) => {
  return (
    <>
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
      >
        <div className="container flex flex-col mx-auto w-full items-center justify-center">
          <div className="relative px-4 py-5 sm:px-6 w-full border dark:bg-gray-800 bg-white shadow mb-2 rounded-md">
            <h3 className="text-2xl leading-6 font-medium text-gray-900 dark:text-white">
              Base de données des utilisateurs
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500 font-semibold dark:text-gray-200">
              Informations et détails sur les actividatatés des utilisateurs.
            </p>
          </div>
          <ul className="flex flex-col w-full">
            {logs.map((log) => (
              <li className="border-gray-400 flex flex-row mb-2" key={log.id}>
                <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                  <div className="flex flex-col w-10 h-10 justify-center items-center">
                    <a href="#" className="block relative">
                      <img
                        alt="profil"
                        src={
                          log.user && log.user.avatar
                            ? `${process.env.MEDIA_URL}${log.user.avatar}`
                            : require('assets/img/placeholder.jpg')
                        }
                        className="mx-auto object-cover rounded-full h-10 w-10"
                      />
                    </a>
                  </div>
                  <div className="flex-1 items-center justify-center pl-1 ">
                    <div className="flex font-medium dark:text-white justify-center">
                      <p
                        className="text-sm break-all ml-4"
                        style={{ marginRight: '25px' }}
                      >
                        {log.user ? log.user.email : 'Undefined'}
                      </p>
                    </div>
                    <div className="flex text-gray-600 dark:text-gray-200 text-xs justify-center">
                      {log.userType}
                    </div>
                  </div>
                  <div className="flex-1 items-center">
                    <div
                      className="flex justify-end font-bold dark:text-white"
                      style={{ marginLeft: '25px' }}
                    >
                      {log.action}
                    </div>
                    <div className="flex text-gray-600 dark:text-gray-200 text-sm justify-end mr-8">
                      {dateformat(log.createdAt, 'dd/mm/yyyy hh:mm')}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {pages > 1 && <Pagination pages={pages} currentPage={currentPage} />}
        </div>
      </motion.div>
    </>
  )
}

export default ListLogs
