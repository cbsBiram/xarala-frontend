import React from 'react'

// components

export default function CardProfile({ me }) {
  return (
    <>
      {me && (
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4 flex justify-center">
                <div className="relative">
                  <img
                    alt="..."
                    src={require('assets/img/team-2-800x800.jpg')}
                    className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                  />
                </div>
              </div>
              {/* <div className="w-full px-4 text-center mt-20">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                    22
                  </span>
                  <span className="text-sm text-gray-500">Friends</span>
                </div>
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                    10
                  </span>
                  <span className="text-sm text-gray-500">Photos</span>
                </div>
                <div className="lg:mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                    89
                  </span>
                  <span className="text-sm text-gray-500">Comments</span>
                </div>
              </div>
            </div> */}
            </div>
            <div className="text-center mt-20">
              <h3 className="text-xl py-4 font-semibold leading-normal mb-2 text-gray-800 lg:pt-4  pt-8 mb-2">
                {me.firstName} {me.lastName}
              </h3>
              <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase my-4">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{' '}
                {me.address ? me.address : 'Aucune adresse renseignée'}
              </div>
              <div className="mb-2 text-gray-700 my-4">
                <i className="fas fa-phone-alt mr-2 text-lg text-gray-500"></i>
                {me.phone ? me.phone : 'None'}
              </div>
            </div>
            <div className="mt-8 py-10 border-t border-gray-300 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4">
                  <p className="mb-4 text-lg leading-relaxed text-gray-800">
                    {me.bio ? me.bio : 'None'}
                  </p>
                  {/* <a
                    href="#xarala"
                    className="font-normal text-blue-500"
                    onClick={(e) => e.preventDefault()}
                  >
                    Show more
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
