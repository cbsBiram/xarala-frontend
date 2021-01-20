import React from 'react'
import { courseFields } from '../../utils/fields'
import { CourseAccordion } from './CourseAccordion'
import DescriptionSection from './DescriptionSection'
import TeacherSection from './TeacherSection'

export const CourseTabs = ({ course }) => {
  const [openTab, setOpenTab] = React.useState(1)
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
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
                Description
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
                Curriculum
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
                Formateur
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? 'block' : 'hidden'} id="link1">
                  <DescriptionSection decription={course.description} />
                </div>
                <div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
                  <CourseAccordion chapters={course.courseChapters} />
                </div>
                <div className={openTab === 3 ? 'block' : 'hidden'} id="link3">
                  <TeacherSection teacher={course.teacher} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
