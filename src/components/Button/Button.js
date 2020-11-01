import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

const Button = ({ type, className, onClick, children}) => {
  return (
    <button
      className={`button ${(type) ? 'button--' + type : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any.isRequired,

  onClick: PropTypes.func
}

export default Button
