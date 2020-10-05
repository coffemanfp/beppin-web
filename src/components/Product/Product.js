import React, { Component } from 'react'
import Button from '../Button/Button'
import noImage from './../../img/no-image.png'
import './Product.css'

export default class Product extends Component {
  constructor (props) {
    super(props)

    this.state = {
      currentImage: 0
    }

    this.handleNextImage = this.handleNextImage.bind(this)
    this.handlePrevImage = this.handlePrevImage.bind(this)
  }

  handleNextImage () {
    const lastImageIndex = this.props.product.images.length - 1

    if (this.state.currentImage === lastImageIndex) {
      this.setState({
        currentImage: 0
      })
      return
    }

    this.setState({
      currentImage: this.state.currentImage + 1
    })
  }

  handlePrevImage () {
    const lastImageIndex = this.props.Images.length - 1

    if (this.state.currentImage === 0) {
      this.setState({
        currentImage: lastImageIndex
      })
      return
    }

    this.setState({
      currentImage: this.state.currentImage - 1
    })
  }

  render () {
    const { product } = this.props
    const imageTransation = {
      transform: `translate3d(${(this.state.currentImage) * 100 * -1}%, 0, 0)`
    }
    const images = product.images || false

    const description = (product.description.length > 50)
      ? product.description.slice(0, 50) + '...'
      : product.description

    const name = (product.name.length > 15)
      ? product.name.slice(0, 15) + '...'
      : product.name

    return (
      <div className='product'>
        <div className='product__presentation'>
          <ul className='product__images' style={imageTransation}>
            {(!images && !images.length) &&
              <ProductImage
                image={{ url: noImage }}
                alt={product.name}
              />}
            {(images && images.length) &&
              images.map((image, i) =>
                <ProductImage
                  key={image.id}
                  image={{ url: image.url }}
                  alt={product.name}
                  isActive={this.state.currentImage === i}
                />
              )}
          </ul>
          {(images && images.length > 1) &&
            <div className='product__presentation-controls'>
              <Button
                type='icon'
                onClick={this.handlePrevImage}
                className='product__arrow'
              >
                <span className='fal fa-arrow-left' />
              </Button>
              <Button
                type='icon'
                onClick={this.handleNextImage}
                className='product__arrow'
              >
                <span className='fal fa-arrow-right' />
              </Button>
            </div>}
          <Button
            type='icon'
            // onClick={this.props.isFavorite}
            className='product__toggle-favorite'
          >
            <span className={`${(product.isFavorite) ? 'fas' : 'fal'} fa-heart`} />
          </Button>
        </div>
        <div className='product__content'>
          <b className='product__name'>{name}</b>
          {product.offer &&
            <div className='product__offer'>
              <p className='product__offer-price'>{product.offer.price}</p>
              <p className='product__price'>{product.price}</p>
            </div>}
          {!product.offer &&
            <p className='product__price'>{product.price}</p>}
          <p className='product__description'>{description}</p>
          <Button
            className='product__buy'
            handleClick={() => console.log('Buy product', product.name)}
            type='primary'
          >
            Buy
          </Button>
        </div>
      </div>
    )
  }
}

function ProductImage ({ image, isActive, alt }) {
  return (
    <li key={image.id} className={`product__image ${(isActive) ? 'product__image--actived' : ''}`}>
      <img src={image.url} alt={alt} />
    </li>
  )
}
