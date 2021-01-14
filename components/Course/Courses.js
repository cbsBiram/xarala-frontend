import Link from 'next/link'
import React from 'react'

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
            {courses.map((course) => (
              <div
                className=" w-full md:w-4/12 px-4 text-center"
                key={course.id}
              >
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="flex items-center justify-center">
                      <img
                        src={`${process.env.MEDIA_URL}${course.thumbnail}`}
                      />
                    </div>
                    <div className="items-center py-2">
                      <span className="text-xs font-semibold py-1 px-2 uppercase rounded  bg-green-500 uppercase last:mr-0 mr-1">
                        {course.categories[0].name}
                      </span>
                    </div>
                    <Link
                      as={`/courses/${course.slug}`}
                      passHref
                      href="/courses/[slug]"
                    >
                      <a className="text-xl font-semibold">
                        {course.title} {course.slug}
                      </a>
                    </Link>

                    <div className="mt-2 mb-2">
                      <i className="far fa-user mx-2"></i>
                      <span className="text-gray-600">
                        {course.teacher.firstName} {course.teacher.lastName}
                      </span>
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
                    </div>
                    <p className="mt-2 mb-4 text-gray-600">
                      {course.description.length > 100
                        ? course.description.substring(0, 100) + '...'
                        : course.description}
                    </p>
                    <div className="flex border-t">
                      <div className="w-5/12 my-4">
                        <div className="w-full items-center justify-center">
                          <i className="fas fa-headphones-alt text-xl mx-4"></i>
                          <span className="text-gray-600 ">2 lectures</span>
                        </div>
                        <div className="w-full items-center justify-center mt-4">
                          <i className="fas fa-clock text-xl mx-4"></i>
                          <span className="text-gray-600 ">0 minutes</span>
                        </div>
                      </div>
                      <div className="w-6/12 my-4 flex items-center justify-end">
                        {course.price ? (
                          <span className="text-2xl font-bold  py-1 px-2 uppercase rounded  bg-white uppercase ">
                            {course.price}
                          </span>
                        ) : (
                          <span className="text-xs font-semibold  py-1 px-2 uppercase rounded  bg-white uppercase last:mr-0 mr-1 text-green-500">
                            Gratuit
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default AllCourses
