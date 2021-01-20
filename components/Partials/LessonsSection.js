import React from 'react'

export const LessonSection = ({ lessons }) => {
  return (
    <>
      <div class="flex justify-center">
        <div class="bg-white shadow-xl rounded-lg w-full">
          <ul class="divide-y divide-gray-300">
            {lessons &&
              lessons.map((lesson) => (
                <li
                  key={lesson.id}
                  className="p-1 m-2 hover:bg-gray-500 cursor-pointer"
                >
                  {lesson.title}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  )
}
