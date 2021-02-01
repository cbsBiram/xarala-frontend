import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { Droppable, DragDropContext } from 'react-beautiful-dnd'

import { UPDATE_CHAPTER } from '../../utils/mutations'

import Items from './Items'

const ListChapters = ({ chapters }) => {
  const [orderedChapters, setOrderedChapters] = useState(chapters)
  const [updateChapter] = useMutation(UPDATE_CHAPTER)
  const router = useRouter()

  const onDragEnd = (result) => {
    const { destination, source } = result

    if (!destination) return

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return

    const items = Array.from(orderedChapters)
    const [reorderedItem] = items.splice(source.index, 1)
    items.splice(destination.index, 0, reorderedItem)

    setOrderedChapters(items)
  }

  const handleConfirm = () => {
    const errorsList = []

    orderedChapters.map((chapter, index) => {
      let chapterId = chapter.id
      let { name } = chapter
      let chapterNumber = index + 1
      const { loading, errors, data } = updateChapter({
        variables: {
          chapterId,
          name,
          chapterNumber,
        },
      })
      if (errors) errorsList.push(errors)
    })

    if (!errorsList) {
      alert('Agencement effectué avec succès!')
      router.reload()
    }
  }

  return (
    <div className="border border-gray-400 rounded-lg bg-gray-200">
      <div className=" m-6 bg-white">
        <h3 className="p-4 font-semibold text-lg text-gray-800">
          Agencement des chapitres
        </h3>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="course">
          {(provided) => (
            <div
              className="flex flex-col items-center justify-center p-3 border"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {orderedChapters &&
                orderedChapters.map((chapter, index) => (
                  <Items
                    key={chapter.id}
                    item={chapter}
                    index={index}
                    isChapter={true}
                  />
                ))}

              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <div className="flex mx-4 my-4 justify-end items-center">
        <button
          className="bg-green-400 active:bg-gray-700 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="submit"
          onClick={handleConfirm}
        >
          Sauvegarder
        </button>
      </div>
    </div>
  )
}

export default ListChapters
