import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

export default function Items({ item, index, isChapter = false }) {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided) => (
        <div
          className="w-1/2 border border-gray-400 bg-gray-100 mb-2 p-2 text-center"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {isChapter ? item.name : item.title}
        </div>
      )}
    </Draggable>
  )
}
