import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Store from '../Store/Store'
import Slider from '../Slider/Slider'
import './StoresList.css'

const StoresList = ({ stores }) => {
  const [itemsBySlide, setItemBySlide] = useState(getItemsBySlide())

  window.addEventListener('resize', () => {
    setItemBySlide(getItemsBySlide())
  })

  const storesList = stores.map(store =>
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

StoresList.propTypes = {
  stores: PropTypes.arrayOf(
    PropTypes.shape({
      background: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
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

export default StoresList
