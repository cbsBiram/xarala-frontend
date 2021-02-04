import React from 'react'

export default function AdminKpis({ users }) {
  const teachers = users.filter((user) => user.isTeacher)
  const students = users.filter((user) => user.isStudent)
  const authors = users.filter((user) => user.isWriter)
  const prices = students.map((student) =>
    student.coursesEnrolled.map((course) => Number(course.price))
  )
  const sales_figures = prices.reduce(
    (totalSale, price) =>
      totalSale + price.reduce((itemPrice, item) => itemPrice + item, 0),
    0
  )

  return (
    <>
      <div className="relative shadow-lg rounded-2xl w-36 p-4 bg-white dark:bg-gray-800">
        <div className="flex items-center">
          <span className="bg-green-500 p-2 h-4 w-4 rounded-full relative"></span>
          <p className="text-md text-gray-700 dark:text-gray-50 ml-2">
            Nombre d'apprenants
          </p>
        </div>
        <div className="flex flex-col justify-start">
          <p className="text-gray-800 text-4xl text-left dark:text-white font-bold my-4">
            {students ? students.length : 0}
          </p>
          <div className="relative w-28 h-2 bg-gray-200 rounded">
            <div className="absolute top-0 h-1  left-0 rounded bg-green-500 w-2/3"></div>
          </div>
        </div>
      </div>
      <div className="relative shadow-lg rounded-2xl w-36 p-4 bg-white dark:bg-gray-800">
        <div className="flex items-center">
          <span className="bg-red-500 p-2 h-4 w-4 rounded-full relative"></span>
          <p className="text-md text-gray-700 dark:text-gray-50 ml-2">
            Nombre d'auteurs
          </p>
        </div>
        <div className="flex flex-col justify-start">
          <p className="text-gray-800 text-4xl text-left dark:text-white font-bold my-4">
            {authors ? authors.length : 0}
          </p>
          <div className="relative w-28 h-2 bg-gray-200 rounded">
            <div className="absolute top-0 h-2  left-0 rounded bg-black w-2/3"></div>
          </div>
        </div>
      </div>
      <div className="relative shadow-lg rounded-2xl w-36 p-4 bg-white dark:bg-gray-800">
        <div className="flex items-center">
          <span className="bg-orange-500 p-2 h-4 w-4 rounded-full relative"></span>
          <p className="text-md text-gray-700 dark:text-gray-50 ml-2">
            Nombre d'instructeurs
          </p>
        </div>
        <div className="flex flex-col justify-start">
          <p className="text-gray-800 text-4xl text-left dark:text-white font-bold my-4">
            {teachers ? teachers.length : 0}
          </p>
          <div className="relative w-28 h-2 bg-gray-200 rounded">
            <div className="absolute top-0 h-1  left-0 rounded bg-green-500 w-2/3"></div>
          </div>
        </div>
      </div>
      <div className="relative shadow-lg rounded-2xl w-36 p-4 bg-white dark:bg-gray-800">
        <div className="flex items-center">
          <span className="bg-indigo-500 p-2 h-4 w-4 rounded-full relative"></span>
          <p className="text-md text-gray-700 dark:text-gray-50 ml-2">
            Chiffre d'Affaire
          </p>
        </div>
        <div className="flex flex-col justify-start">
          <p className="text-gray-800 text-4xl text-left dark:text-white font-bold my-4">
            {sales_figures} &nbsp;F CFA
          </p>
          <div className="relative w-28 h-2 bg-gray-200 rounded">
            <div className="absolute top-0 h-1  left-0 rounded bg-green-500 w-2/3"></div>
          </div>
        </div>
      </div>
    </>
  )
}
