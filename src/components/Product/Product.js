import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'
import noImage from './../../img/no-image.png'
import './Product.css'

const Product = props => {
  const image = (props.images && props.images.length > 0) ? props.images[0].url : noImage

  return (
    <a className='product'>
      <div className='product__presentation'>
        <img
          src={image}
          alt=''
          className='product__image'
        />
      </div>
      <div className='product__content'>
        <p className='product__price'>
          <span className='product__currency'>{props.currency}</span> <span className='product__amount'>{props.price}</span>
        </p>
        {props?.quantity > 0 &&
          <div className='product__quantity'>
            <Button
              className='product__control'
              type='icon'
              onClick={props.handleSubtract}
            >
              <span className='fal fa-arrow-left' />
            </Button>
            <span className='product__count'>{props.quantity}</span>
            <Button
              className='product__control'
              type='icon'
              onClick={props.handleSum}
            >
              <span className='fal fa-arrow-right' />
            </Button>
          </div>}
      </div>
    </a>
  )
}

Product.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  quantity: PropTypes.number,

  handleSubtract: PropTypes.func,
  handleSum: PropTypes.func
}

export default Product
