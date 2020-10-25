import React from 'react'
import CartItem from '../CartItem/CartItem'
import NoItems from '../NoItems/NoItems'
import products from '../../data/products'
import './Cart.css'

export default function Cart () {
  const items = [
    {
      id: products[0].id,
      name: products[0].name,
      price: products[0].price,
      currency: products[0].currency,
      image: products[0].images[0].url,
      quantity: 3,
      quantityAvailable: 12
    },
    {
      id: products[1].id,
      name: products[1].name,
      price: products[1].price,
      currency: products[1].currency,
      image: products[1].images[0].url,
      quantity: 2,
      quantityAvailable: 20
    },
    {
      id: products[3].id,
      name: products[3].name,
      price: products[3].price,
      currency: products[3].currency,
      image: products[3].images[0].url,
      quantityAvailable: 100
    }
  ]

  const cartItems = (items?.length > 0)
    ? items.map(item =>
      <li
        className='cart__item'
        key={item.id}
      >
        <CartItem {...item} />
      </li>
    )
    : <NoItems />

  return (
    <ul className={`cart ${(items?.length > 0) ? '' : 'cart--no-items'}`}>
      {cartItems}
    </ul>
  )
}
