import React from 'react'
import Category from '../Category/Category'

export default function CategorysList ({ categories }) {
  return (
    <ul className='categories-list'>
      {categories.map(category =>
        <Category key={category.id} category={category} />
      )}
    </ul>
  )
}
