import React from 'react'
import Product from '../Product/Product'
import Slider from '../Slider/Slider'
import './ProductsList.css'

export default function ProductsList ({ products }) {
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
      slides={productsElement}
    />
  )
}
