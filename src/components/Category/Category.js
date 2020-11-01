import React from 'react'
import PropTypes from 'prop-types'
import './Category.css'

const Category  = ({ icon, name }) => {
  const image = (icon.includes('.'))
    ? <img
      className='category__icon'
      src={icon}
      alt={name}
    />
    : <span className={`category__icon fal fa-${icon}`} />


  return (
    <a href className='category'>
      {image}
      <h4 className='category__name'>{name}</h4>
    </a>
  )
}

Category.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Category