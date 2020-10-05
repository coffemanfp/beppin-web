import React from 'react'
import './Dialog.css'

export default function Dialog ({ title, children }) {
  return (
    <div className='dialog'>
      {title &&
        <div className='dialog__header'>
          <p className='dialog__title'>{title}</p>
        </div>
      }
      <div className='dialog__content'>
        {children}
      </div>
    </div>
  )
}
