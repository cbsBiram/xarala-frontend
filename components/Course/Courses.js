import React, { useState } from 'react'

import ContainerTitle from '../Partials/ContainerTitle'
import Loading from '../Shared/Loading'
import Pagination from '../Shared/Pagination'
import { CourseCard } from '../Partials/CourseCard'
import {
  COURSES_BY_SEARCH,
  COURSES_BY_CATEGORY,
  COURSES_BY_USER,
} from '../../utils/queries'
import { useLazyQuery } from '@apollo/client'

const AllCourses = ({
  allCourses,
  pages,
  currentPage,
  categories,
  teachers,
}) => {
  const [query, setQuery] = useState('')
  const [categoryName, setCategoryName] = useState('Toutes')
  const [teacherId, setTeacherId] = useState('Tous')
  const [courses, setCourses] = useState(allCourses)
  const [
    searchCourses,
    { called: coursesCalled, loading: loadingCourses },
  ] = useLazyQuery(COURSES_BY_SEARCH, {
    variables: { query },
    onCompleted: (data) => {
      setCourses(data.coursesBySearch)
    },
  })
  const [
    filterByCategory,
    { called: categoriesCalled, loading: loadingCategories },
  ] = useLazyQuery(COURSES_BY_CATEGORY, {
    variables: { categoryName },
    onCompleted: (data) => {
      setCourses(data.coursesByCategory)
    },
  })
  const [
    filterByTeacher,
    { called: teachersCalled, loading: loadingTeacher },
  ] = useLazyQuery(COURSES_BY_USER, {
    variables: { userId: teacherId },
    onCompleted: (data) => {
      setCourses(data.coursesByUser)
    },
  })

  const filterCourseByCategory = async (event) => {
    event.preventDefault()
    await filterByCategory()
  }

  const filterCourseByTeacher = async (event) => {
    event.preventDefault()
    await filterByTeacher()
  }

  const submitSearch = async (e) => {
    e.preventDefault()
    await searchCourses()
  }

  let called = coursesCalled || categoriesCalled || teachersCalled
  let loading = loadingCategories || loadingCourses || loadingTeacher

  if (called && loading) return <Loading />

  return (
    <>
      <div className="relative block pt-8">
        <div className="container  mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-center text-center">
            <div className="w-1/3 px-2">
              <div className="text-sm block my-4 p-3 text-gray-800 rounded border border-solid border-gray-200">
                <span
                  htmlFor="category"
                  className="text-blue-400 font-semibold "
                >
                  Catégories :
                </span>
                <select
                  className="form-select ml-2 bg-white border  rounded py-1"
                  name="category"
                  id="category"
                  defaultValue={categoryName}
                  onChange={(e) => {
                    setCategoryName(e.target.value)
                    filterCourseByCategory(e)
                  }}
                >
                  <option value="">Toutes</option>
                  {categories.map((category) => (
                    <option
                      key={category.id}
                      className="px-2"
                      value={category.name}
                    >
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="w-1/3 px-2">
              <div className="text-sm block my-4 p-3 text-gray-800 rounded border border-solid border-gray-200">
                <span
                  htmlFor="teachers"
                  className="text-blue-400 font-semibold ml-2 mr-2"
                >
                  Instructeurs :
                </span>
                <select
                  className="form-select bg-white border mr-2 rounded py-1"
                  name="teachers"
                  id="teachers"
                  defaultValue={teacherId}
                  onChange={(e) => {
                    setTeacherId(e.target.value)
                    filterCourseByTeacher(e)
                  }}
                >
                  <option value="0">Tous</option>
                  {teachers &&
                    teachers.map((teacher) => (
                      <option
                        key={teacher.id}
                        className="px-2"
                        value={teacher.id}
                      >
                        {teacher.firstName} {teacher.lastName}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="w-1/3 px-2">
              <div className="text-sm block my-4 p-3 text-gray-800 rounded border border-solid border-gray-200">
                <div className="ml-4 inline-flex text-gray-600">
                  <input
                    className="border-2 border-gray-300 bg-white h-10 px-5 mr-4 rounded-lg text-sm focus:outline-none"
                    type="text"
                    name="search"
                    defaultValue={query}
                    placeholder="Que souhaitez-vous apprendre ?"
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  <button
                    type="submit"
                    onClick={(e) => submitSearch(e)}
                    className="right-0 top-0  text-white rounded px-2 bg-blue-400 hover:bg-blue-500"
                  >
                    Rechercher
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container  mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-center text-center">
            <ContainerTitle title="Nos meilleurs cours" />
            <div className="flex flex-wrap">
              {courses &&
                courses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
            </div>
            {pages > 1 && (
              <Pagination pages={pages} currentPage={currentPage} />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default AllCourses
