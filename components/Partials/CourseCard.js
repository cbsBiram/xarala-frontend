import Link from 'next/link'
import React from 'react'

export const CourseCard = ({ course }) => {
  return (
    <div className=" w-full md:w-4/12 px-4 text-center my-2">
      <Link as={`/courses/${course.slug}`} passHref href="/courses/[slug]">
        <a href="#">
          <div class="bg-white shadow-lg overflow-hidden border-b-4 border-blue-500  rounded-lg">
            <img
              src={`${process.env.MEDIA_URL}${course.thumbnail}`}
              alt={course.title}
              class="w-full object-cover h-32 sm:h-48 md:h-64"
            />
            <div class="p-4 md:p-6">
              <p class="text-blue-500 font-semibold text-xs mb-1 leading-none">
                {course.categories[0].name}
              </p>
              <h3 class="font-semibold mb-2 text-xl leading-tight sm:leading-normal">
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
              <div class="text-sm flex items-center">
                <i className="far fa-user mx-2"></i>

                <p class="leading-none">
                  {course.teacher.firstName} {course.teacher.lastName}
                </p>
              </div>
              <div class="flex justify-end mr-4 mb-4">
                <h1 class="text-lg font-bold">{course.price} FCFA</h1>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}
