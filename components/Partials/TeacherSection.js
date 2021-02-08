import React from 'react'

const TeacherSection = ({ teacher }) => {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
                <img
                  alt="..."
                  src={
                    teacher.avatar
                      ? `${process.env.MEDIA_URL}${teacher.avatar}`
                      : require('assets/img/team-2-800x800.jpg')
                  }
                  className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                />
              </div>
            </div>
            <div className="w-full px-4 text-center mt-20">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                    {teacher.coursesCreated.length}
                  </span>
                  <span className="text-sm text-gray-500">Cours</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-2">
            <h3 className="text-xl font-semibold leading-normal mb-2 text-gray-800">
              {teacher.firstName} {teacher.lastName}
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{' '}
              {teacher.address}
            </div>
            <div className="mb-2 text-gray-700 mt-2">
              <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
              {teacher.title}
            </div>
            <div className="mb-2 text-gray-700">
              <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
              Xarala Academy
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-gray-300 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <p className="mb-4 text-lg leading-relaxed text-gray-800">
                  {teacher.bio}
                </p>
                <a
                  href="#xarala"
                  className="font-normal text-blue-500"
                  onClick={(e) => e.preventDefault()}
                >
                  En savoir plus
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TeacherSection
