import React from 'react'
import Category from '../Category/Category'
import './CategoriesList.css'

export default function CategoriesList ({ categories }) {
  return (
    <ul className='categories-list'>
      {categories.map(category =>
        <Category
          key={category.name}
          category={category}
        />
      )}
    </ul>
  )
}
