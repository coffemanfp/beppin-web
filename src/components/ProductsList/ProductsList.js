import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Product from '../Product/Product'
import Slider from '../Slider/Slider'
import './ProductsList.css'

const ProductsList = ({ products }) => {
  const [itemsBySlide, setItemBySlide] = useState(getItemsBySlide())

  window.addEventListener('resize', () => {
    setItemBySlide(getItemsBySlide())
  })

  const productsElement = products.map(product =>
    <Product
      key={product.id}
      {...product}
    />
  )

  return (
    <Slider
      className='products-list'
      items={productsElement}
      itemsBySlide={itemsBySlide}
    />
  )
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
      quantity: PropTypes.number,

      handleSubtract: PropTypes.func,
      handleSum: PropTypes.func
    }).isRequired
  ).isRequired
}

function getItemsBySlide (innerWidth = window.innerWidth) {
  if (innerWidth <= 480) {
    return 1
  } else if (innerWidth > 480 && innerWidth <= 670) {
    return 2
  } else if (innerWidth > 670 && innerWidth <= 880) {
    return 3
  } else if (innerWidth > 880 && innerWidth <= 1200) {
    return 4
  } else if (innerWidth > 1200) {
    return 5
  }
}

export default ProductsList
