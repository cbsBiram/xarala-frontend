import React from 'react'
import CardMyCourses from '../Cards/CardMyCourses'

const Courses = ({ user }) => {
  return (
    <>
      {user.isTeacher ? (
        <CardMyCourses
          courses={user.coursesCreated}
          title="Cours Créés"
          buttonTitle="Continuer"
          teacher={true}
          icons={true}
        />
      ) : (
        <CardMyCourses
          courses={user.coursesEnrolled}
          title="Cours achetés"
          buttonTitle="Continuer"
        />
      )}
    </>
  )
}

export default Courses
