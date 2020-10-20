import React, { useState } from 'react'
import Product from '../Product/Product'
import Slider from '../Slider/Slider'
import './ProductsList.css'

export default function ProductsList ({ products }) {
  const [itemsBySlide, setItemBySlide] = useState(getItemsBySlide())

  window.addEventListener('resize', () => {
    setItemBySlide(getItemsBySlide())
  })

  const productsElement = products.map(product =>
    <Product
      key={product.id}
      name={product.name}
      images={product.images}
      currency={product.currency}
      price={product.price}
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
