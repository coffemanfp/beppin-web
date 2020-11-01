import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'
import './CartItem.css'

const CartItem = props => {
  const [quantity, setQuantity] = useState((props.quantity) ? props.quantity : 1)

  function subtract () {
    if (quantity === 1) return
    setQuantity(quantity - 1)
    props.handleQuantity(quantity)
  }

  function sum () {
    if (quantity === props.quantityAvailable) return
    setQuantity(quantity + 1)
    props.handleQuantity(quantity)
  }

  return (
    <div className='cart-item'>
      <div className='cart-item__presentation'>
        <img src={props.image} alt={props.name} className='cart-item__image' />
      </div>
      <div className='cart-item__content'>
        <p className='cart-item__name'>{props.name}</p>
        <div className='cart-item__price'>
          <span className='cart-item__currency'>{props.currency}</span>
          <span className='cart-item__amount'>{props.price}</span>
        </div>

        <div className='cart-item__quantity'>
          <Button
            className='cart-item__control'
            type='icon'
            onClick={subtract}
          >
            <span className='fal fa-arrow-left' />
          </Button>
          <span className='cart-item__count'>{quantity}</span>
          <Button
            className='cart-item__control'
            type='icon'
            onClick={sum}
          >
            <span className='fal fa-arrow-right' />
          </Button>
        </div>
      </div>
    </div>
  )
}

CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  quantity: PropTypes.number,
  quantityAvailable: PropTypes.number,

  handleQuantity: PropTypes.func.isRequired
}

export default CartItem
