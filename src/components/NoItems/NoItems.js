import React from 'react'
import noItemsImage from '../../img/noItems.png'
import './NoItems.css'

const NoItems = () => {
  return (
    <div className='no-items'>
      <img src={noItemsImage} alt='No items' className='no-items__image' />
      <p className='no-items__text'>There is nothing yet</p>
    </div>
  )
}

export default NoItems
