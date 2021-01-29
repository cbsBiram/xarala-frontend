import React from 'react'
import RemoveCourseButton from './RemoveCourseButton'

const OrderItems = ({ items }) => {
  return (
    <>
      {items &&
        items.map((item) => (
          <tr key={item.id}>
            <td className="hidden pb-4 md:table-cell">
              <a href="#">
                <img
                  src={`${process.env.MEDIA_URL}${item.course.thumbnail}`}
                  className="w-20 rounded"
                  alt="Thumbnail"
                />
              </a>
            </td>
            <td>
              <p className="mb-2 md:ml-4">{item.course.title}</p>
              <RemoveCourseButton itemId={item.id} />
            </td>
            <td className="text-right">
              <span className="text-sm lg:text-base font-medium">
                {item.price} FCFA
              </span>
            </td>
          </tr>
        ))}
    </>
  )
}

export default OrderItems
