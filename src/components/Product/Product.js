import React from 'react'
import noImage from './../../img/no-image.png'
import './Product.css'

export default function Product (props) {
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
      </div>
    </a>
  )
}
