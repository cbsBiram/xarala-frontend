import React, { useState } from 'react'
import _ from 'lodash'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

import Admin from '../../../../../layouts/Admin'
import CardLessonTable from '../../../../../components/Cards/CardLessonTable'
import CreateLessonForm from '../../../../../components/Forms/CreateLessonForm'
import Loading from '../../../../../components/Shared/Loading'
import { SINGLE_CHAPTER_QUERY } from '../../../../../utils/queries'
import ListLessons from '../../../../../components/DragAndDrop/ListLessons'

export default function CourseDetails() {
  const [openTab, setOpenTab] = useState(1)
  const router = useRouter()
  const { slug, section } = router.query

  const { loading, error, data: chapterData } = useQuery(SINGLE_CHAPTER_QUERY, {
    variables: {
      courseSlug: slug,
      chapterSlug: section,
    },
  })

  let { chapterCourse: chapter } = chapterData ? chapterData : {}
  let { courseLessons } = chapter ? chapter : {}
  let lessons = _.orderBy(courseLessons, ['lectureNumber'], ['asc'])

  if (loading) return <Loading />

  return (
    <>
      <div className="relative flex flex-wrap">
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
                Nouvelle leçon
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
                Liste des leçons
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  'text-xs font-bold uppercase px-3 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 3
                    ? 'text-white bg-gray-600'
                    : 'text-gray-600 bg-white')
                }
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab(3)
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Ordre des leçons
              </a>
            </li>
          </ul>

          <div className={openTab === 1 ? 'block' : 'hidden'} id="link1">
            <CreateLessonForm chapterSlug={section} courseSlug={slug} />
          </div>
          <div className="w-full mb-12">
            <div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
              <CardLessonTable
                courseSlug={slug}
                chapter={chapter}
                lessons={lessons}
              />
            </div>
          </div>
          <div className={openTab === 3 ? 'block' : 'hidden'} id="link3">
            <div className="mb-12">
              {lessons && <ListLessons lessons={lessons} />}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

CourseDetails.layout = Admin
