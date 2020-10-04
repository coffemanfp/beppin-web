import React from 'react'
import './Category.css'

export default function Category ({ icon, name }) {
  return (
    <div className='category'>
      <img
        className='category__icon'
        src={icon}
        alt={name}
      />
      <h4 className='category__name'>{name}</h4>
    </div>
  )
}
