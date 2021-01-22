import React from 'react'

export const ChapterSection = ({ chapters }) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="bg-white shadow-xl rounded-lg w-full">
          <ul className="divide-y divide-gray-300">
            {chapters &&
              chapters.map((chapter) => (
                <li
                  key={chapter.id}
                  className="p-1 m-2 hover:bg-gray-500 cursor-pointer"
                >
                  {chapter.name}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  )
}
