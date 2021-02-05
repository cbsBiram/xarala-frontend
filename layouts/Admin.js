import React from 'react'
import { NextSeo } from 'next-seo'
import { useQuery } from '@apollo/client'

// components
import AdminNavbar from 'components/Navbars/AdminNavbar.js'
import FooterAdmin from 'components/Footers/FooterAdmin.js'
import Sidebar from 'components/Sidebar/Sidebar.js'
import StudentHeaderStats from 'components/Headers/StudentHeaderStats.js'
import TeacherHeaderStats from '../components/Headers/TeacherHeaderStats'
import Loading from '../components/Shared/Loading'
import { ALL_USER_QUIZZES } from '../utils/queries'
import WriterHeaderStats from '../components/Headers/WriterHeaderStats'

const Admin = ({ children }) => {
  const { loading, error, data } = useQuery(ALL_USER_QUIZZES)
  let { me, allQuizzesUser: userQuizzes } = data ? data : {}
  const user = me ? me : {}

  if (loading) return <Loading />

  return (
    <>
      <NextSeo
        title="Xarala Academy | Tableau de bord"
        description="Consultez votre tableau de bord"
      />
      <Sidebar user={me} />
      <div className="relative md:ml-64 bg-gray-200">
        <AdminNavbar />
        {/* Header */}
        {user && user.isTeacher ? (
          <TeacherHeaderStats courses={user.coursesCreated} />
        ) : user.isStudent ? (
          <StudentHeaderStats
            courses={user.coursesEnrolled}
            userQuizzes={userQuizzes}
          />
        ) : user.isWriter ? (
          <WriterHeaderStats posts={user.getUserPosts} />
        ) : (
          <h2>No data</h2>
        )}
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  )
}

export default Admin
