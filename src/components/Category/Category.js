import React from 'react'
import './Category.css'

export default function Category ({ category }) {
  const icon = (category.icon.includes('.'))
    ? <img
      className='category__icon'
      src={category.icon}
      alt={category.name}
    />
    : <span className={`category__icon fal fa-${category.icon}`}/>


  return (
    <li className='category'>
      <a href className='category__link'>
        {icon}
        <h4 className='category__name'>{category.name}</h4>
      </a>
    </li>
  )
}
