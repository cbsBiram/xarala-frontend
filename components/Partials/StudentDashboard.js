import React from 'react'

// components
import CardCategories from '../Cards/CardCategories'
import CardMyCourses from 'components/Cards/CardMyCourses.js'
import { CourseCard } from './CourseCard'

const StudentDashboard = ({ allCourses, coursesEnrolled, categories }) => {
  return (
    <>
      <div className="relative min-w-0 break-words w-full mb-6 shadow-lg rounded bg-gray-800">
        <div className="mb-12 md:mb-0 px-4">
          <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3 className="font-semibold text-base text-white">
                  Cours les plus récents
                </h3>
              </div>
              <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                <a href="/courses">
                  <button
                    className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Voir plus
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center text-center ">
            {allCourses &&
              allCourses.length &&
              allCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full md:w-8/12 mb-12 xl:mb-0 px-4">
          <CardMyCourses
            courses={coursesEnrolled}
            title="Cours achetés"
            buttonTitle="Continuer"
          />
        </div>
        <div className="w-full md:w-4/12 px-4">
          <CardCategories categories={categories} />
        </div>
      </div>
    </>
  )
}

export default StudentDashboard
