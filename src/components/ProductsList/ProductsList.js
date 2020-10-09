import React from 'react'
import Product from '../Product/Product'
import './ProductsList.css'

export default function ProductsList ({ products, isGrid }) {
  console.log(products[0].price)

  return (
    <ul className='products-list'>
      {products.map(product =>
        <Product
          key={product.id}
          images={product.images}
          name={product.name}
          currency={product.currency}
          price={product.price}
        />
      )}
    </ul>
  )
}
