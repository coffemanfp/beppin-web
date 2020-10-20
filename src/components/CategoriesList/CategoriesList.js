import React, { useState } from 'react'
import Category from '../Category/Category'
import Slider from '../Slider/Slider'
import './CategoriesList.css'

export default function CategoriesList ({ categories }) {
  const [layout, setLayout] = useState(getLayout())
  const [itemsBySlide, setItemsBySlide] = useState(getItemsBySlide())

  window.addEventListener('resize', () => {
    setLayout(getLayout())
    if (getLayout() === 'screen') {
      setItemsBySlide(getItemsBySlide())
    }
  })

  const categoriesList = (layout === 'mobile')
    ? categoriesListMobile(categories)
    : categoriesListScreen(categories, itemsBySlide)

  return categoriesList
}

function categoriesListMobile (categories) {
  return (
    <ul className='categories-list'>
      {categories.map(category =>
        <li
          key={category.name}
          className='categories-list__category'
        >
          <Category
            category={category}
          />
        </li>
      )}
    </ul>
  )
}

function categoriesListScreen (categories, itemsBySlide) {
  const categoriesList = categories.map(category =>
    <Category
      key={category.name}
      category={category}
    />
  )

  return (
    <Slider
      className='categories-list'
      items={categoriesList}
      itemsBySlide={itemsBySlide}
    />
  )
}

function getLayout (innerWidth = window.innerWidth) {
  return (innerWidth < 480) ? 'mobile' : 'screen'
}

function getItemsBySlide (innerWidth = window.innerWidth) {
  if (innerWidth >= 480 && innerWidth < 720) {
    return 2
  } else if (innerWidth >= 720 && innerWidth < 850) {
    return 3
  } else if (innerWidth >= 850 && innerWidth < 1050) {
    return 4
  } else if (innerWidth >= 1050 && innerWidth < 1250) {
    return 5
  } else {
    return 6
  }

  // if (innerWidth > 480) {
  //   return 2
  // }
}