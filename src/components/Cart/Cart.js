import React from 'react'
import PropTypes from 'prop-types'
import CartItem from '../CartItem/CartItem'
import NoItems from '../NoItems/NoItems'
import './Cart.css'

const Cart = ({ items }) => {
  const cartItems = (items?.length > 0)
    ? items.map(item =>
      <li
        className='cart__item'
        key={item.id}
      >
        <CartItem
          {...item}
          handleQuantity={() => {}}
        />
      </li>
    )
    : <NoItems />

  return (
    <ul className={`cart ${(items?.length > 0) ? '' : 'cart--no-items'}`}>
      {cartItems}
    </ul>
  )
}

Cart.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      quantity: PropTypes.number,
      quantityAvailable: PropTypes.number
    })
  )
}

export default Cart
