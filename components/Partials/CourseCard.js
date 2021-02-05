import Link from 'next/link'
import React from 'react'

export const CourseCard = ({ course }) => {
  return (
    <div className="w-full md:w-4/12 px-4 text-center my-2">
      <Link as={`/courses/${course.slug}`} passHref href="/courses/[slug]">
        <a href="#">
          <div className="bg-white shadow-lg overflow-hidden border-b-4 border-blue-500  rounded-lg">
            <img
              src={`${process.env.MEDIA_URL}${course.thumbnail}`}
              alt={course.title}
              className="h-full w-full object-cover object-center"
            />
            <div className="p-4 md:p-6">
              <p className="text-blue-500 font-semibold text-xs mb-1 leading-none">
                {course.categories && course.categories[0]
                  ? course.categories[0].name
                  : ''}
              </p>
              <h3 className="font-semibold mb-2 text-sm leading-tight sm:leading-normal">
                {course.title}
              </h3>
              <p className="mb-0">
                <i
                  className="fas fa-star text-yellow-600"
                  style={{ color: 'rgba(251, 191, 36)' }}
                ></i>
                <i
                  className="fas fa-star text-warning"
                  style={{ color: 'rgba(251, 191, 36)' }}
                ></i>
                <i
                  className="fas fa-star text-warning"
                  style={{ color: 'rgba(251, 191, 36)' }}
                ></i>
                <i
                  className="fas fa-star text-warning"
                  style={{ color: 'rgba(251, 191, 36)' }}
                ></i>
                <i
                  className="fas fa-star text-warning"
                  style={{ color: 'rgba(251, 191, 36)' }}
                ></i>
              </p>
              <div className="text-sm flex items-center">
                <i className="far fa-user mx-2"></i>

                <p className="leading-none my-4">
                  {course.teacher.firstName} {course.teacher.lastName}
                </p>
              </div>
              <div className="flex justify-end mr-4 mb-4">
                <h1 className="text-lg font-bold">{course.price} FCFA</h1>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}
