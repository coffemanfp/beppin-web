import React from 'react'
import Product from '../Product/Product'

export default function ProductsList ({ products }) {
  return (
    <ul className='products-list'>
      {products.map(product =>
        <Product key={product.id} product={product} />
      )}
    </ul>
  )
}
