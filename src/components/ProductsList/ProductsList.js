import React from 'react'
import Product from '../Product/Product'
import './ProductsList.css'

export default function ProductsList ({ products, isGrid }) {
  return (
    <ul className='products-list'>
      {products.map(product =>
        <Product key={product.id} product={product} />
      )}
    </ul>
  )
}
