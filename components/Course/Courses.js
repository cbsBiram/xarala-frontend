import Link from 'next/link'
import React from 'react'
import { CourseCard } from '../Partials/CourseCard'

const AllCourses = ({ courses }) => {
  return (
    <>
      <div className="relative block  bg-gray-200 pt-10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-center text-center">
            <div
              className="w-full lg:w-7/12 px-4 mb-10"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <h2 className="text-3xl font-semibold uppercase">
                Nos meilleurs cours
              </h2>
              <div
                className="w-10 h-1 bg-blue-600 rounded mt-2"
                style={{ marginBottom: '30px' }}
              ></div>
            </div>
          </div>

          <div className="flex flex-wrap">
            {courses &&
              courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default AllCourses
