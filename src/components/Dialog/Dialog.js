import React from 'react'
import PropTypes from 'prop-types'
import './Dialog.css'

const Dialog = ({ title, children }) => {
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

Dialog.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any
}

export default Dialog