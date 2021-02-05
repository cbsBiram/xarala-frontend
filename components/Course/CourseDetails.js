import React from 'react'
import dateformat from 'dateformat'

export default function CourseDetailsComponent({ course }) {
  return (
    <>
      <div className="bg-white dark:bg-gray-800 overflow-hidden relative">
        <div className="text-start w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl mt-4">
            <span className="block text-blue-400 font-bold uppercase">
              {course.title}
            </span>
          </h2>
          <p className="mt-4 text-lg font-semibold">Description :</p>
          <p
            className="text-xl my-2 mx-4 mt-2 text-gray-600"
            dangerouslySetInnerHTML={{ __html: `${course.description}` }}
          ></p>
          <div className="flex justify-center items-center mt-8">
            <span className="text-sm mx-2 font-semibold inline-block py-2 px-2 uppercase rounded-full text-white bg-indigo-600 uppercase last:mr-0 mr-1">
              {course.categories[0] ? course.categories[0].name : 'No category'}
            </span>
            <span className="text-sm mx-2 font-semibold inline-block py-2 px-2 uppercase rounded-full text-white bg-red-600 uppercase last:mr-0 mr-1">
              {course.level ? course.level : 'Débutant'}
            </span>
            <span className="text-sm mx-2 font-semibold inline-block py-2 px-2 uppercase rounded-full text-white-200 bg-teal-200 uppercase last:mr-0 mr-1">
              {course.language.name}
            </span>
          </div>
          <div className="flex justify-center items-center mt-6">
            <p className="mt-4 text-lg font-semibold">
              Créé le {dateformat(course.dateCreated, 'dd/mm/yyyy')}
            </p>
          </div>
          <div className="flex justify-start items-center mt-4 mx-4">
            <p className="mt-4 text-lg font-bold text-2xl">
              Coût : {course.price} F CFA
            </p>
          </div>
          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow"></div>
          </div>
        </div>
        <img
          src={
            course.thumbnail
              ? `${process.env.MEDIA_URL}${course.thumbnail}`
              : require('assets/img/team-2-800x800.jpg')
          }
          style={{ width: '459.5px', height: '540px' }}
          className="absolute h-full max-w-1/2 hidden lg:block right-0 top-0"
        />
      </div>
    </>
  )
}
