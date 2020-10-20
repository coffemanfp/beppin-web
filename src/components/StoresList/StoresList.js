import React, { useState } from 'react'
import Store from '../Store/Store'
import Slider from '../Slider/Slider'
import './StoresList.css'

export default function StoresList (props) {
  const [itemsBySlide, setItemBySlide] = useState(getItemsBySlide())

  window.addEventListener('resize', () => {
    setItemBySlide(getItemsBySlide())
  })

  const storesList = props.stores.map(store =>
    <Store
      key={store.id}
      logo={store.logo}
      background={store.background}
      name={store.name}
    />
  )

  return (
    <Slider
      className='stores-list'
      items={storesList}
      itemsBySlide={itemsBySlide}
    />
  )
}

function getItemsBySlide (innerWidth = window.innerWidth) {
  if (innerWidth <= 605) {
    return 1
  } else if (innerWidth > 605 && innerWidth <= 880) {
    return 2
  } else if (innerWidth > 880 && innerWidth <= 1200) {
    return 3
  } else if (innerWidth > 1200) {
    return 4
  }
}
