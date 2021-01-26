import React from 'react'

import CardCategories from '../Cards/CardCategories'
import CardMyCourses from 'components/Cards/CardMyCourses.js'

const TeacherDashboard = ({ categories, coursesCreated }) => {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full md:w-8/12 mb-12 xl:mb-0 px-4">
          <CardMyCourses
            courses={coursesCreated}
            title="Cours Créés"
            buttonTitle="Continuer"
            teacher={true}
          />
        </div>
        <div className="w-full md:w-4/12 px-4">
          <CardCategories categories={categories} />
        </div>
      </div>
    </>
  )
}

export default TeacherDashboard
