import React, { createRef, useState } from 'react'
import { createPopper } from '@popperjs/core'

export default function Tooltip({ children, tooltipText, color }) {
  const [popoverShow, setPopoverShow] = useState(false)
  const btnRef = createRef()
  const popoverRef = createRef()
  const openTooltip = () => {
    createPopper(btnRef.current, popoverRef.current, {
      placement: 'right',
    })
    setPopoverShow(true)
  }
  const closeTooltip = () => {
    setPopoverShow(false)
  }

  return (
    <div
      className="flex items-center"
      onMouseEnter={openTooltip}
      onMouseLeave={closeTooltip}
      ref={btnRef}
      className="bg-opacity-0 nl-2 text-white active:bg-gray-600 font-bold uppercase text-sm rounded hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
    >
      <div
        className={
          (popoverShow ? '' : 'hidden ') +
          'border-0 mr-3 block p-2 z-50 font-normal leading-normal text-xs max-w-xs text-left no-underline break-words rounded-lg'
        }
        ref={popoverRef}
        style={{ backgroundColor: `${color}` }}
      >
        {tooltipText}
      </div>
      {children}
    </div>
  )
}
