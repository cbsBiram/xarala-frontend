import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

import Admin from 'layouts/Admin.js'
import CourseDetailsComponent from '../../../../components/Course/CourseDetails'
import Loading from '../../../../components/Shared/Loading'
import { SINGLE_COURSE_QUERY } from '../../../../utils/constants'
import CreateChapterForm from '../../../../components/Forms/CreateChapterForm'
import CardChaptersTable from '../../../../components/Cards/CardChaptersTable'

export default function CourseDetails() {
  const [openTab, setOpenTab] = useState(1)

  const router = useRouter()
  const { slug } = router.query

  const { loading, error, data: courseData } = useQuery(SINGLE_COURSE_QUERY, {
    variables: {
      courseSlug: slug,
    },
  })

  let { course } = courseData ? courseData : {}

  if (loading) return <Loading />

  return (
    <>
      {course && <CourseDetailsComponent course={course} />}
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-8 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  'text-xs font-bold uppercase px-3 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 1
                    ? 'text-white bg-gray-600'
                    : 'text-gray-600 bg-white')
                }
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab(1)
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Nouveau chapitre
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  'text-xs font-bold uppercase px-3 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 2
                    ? 'text-white bg-gray-600'
                    : 'text-gray-600 bg-white')
                }
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab(2)
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Liste des chapitres
              </a>
            </li>
          </ul>

          <div className={openTab === 1 ? 'block' : 'hidden'} id="link1">
            <CreateChapterForm courseSlug={slug} />
          </div>
          <div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
            <div className="w-full mb-12">
              <CardChaptersTable courseSlug={slug} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

CourseDetails.layout = Admin
