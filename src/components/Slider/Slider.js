import React, { Component } from 'react'
import Button from '../Button/Button'
import './Slider.css'

export default class Slider extends Component {
  constructor (props) {
    super(props)

    this.state = {
      currentSlide: 0
    }

    this.handleNextSlide = this.handleNextSlide.bind(this)
    this.handlePrevSlide = this.handlePrevSlide.bind(this)
    this.getCountSlides = this.getCountSlides.bind(this)
  }

  handleNextSlide () {
    if (this.state.currentSlide === this.getCountSlides() - 1) {
      this.setState({
        currentSlide: 0
      })
      return
    }
    this.setState({
      currentSlide: this.state.currentSlide + 1
    })
  }

  handlePrevSlide () {
    if (this.state.currentSlide === 0) {
      this.setState({
        currentSlide: this.getCountSlides() - 1
      })
      return
    }

    this.setState({
      currentSlide: this.state.currentSlide - 1
    })
  }

  getCountSlides () {
    let countSlides = this.props.items.length / (this.props.itemsBySlide || 1)
    if (countSlides % 1 !== 0) {
      countSlides++
      countSlides -= countSlides % 1
    }

    return countSlides
  }

  render () {
    const itemsBySlide = this.props.itemsBySlide || 1

    const countSlides = this.getCountSlides()

    if (this.state.currentSlide > countSlides) {
      this.setState({ currentSlide: countSlides - 1 })
    }

    const slideTransationStyle = {
      transform: `translate3d(${(this.state.currentSlide) * 100 * -1}%, 0, 0)`
    }
    const className = (this.props.className) ? this.props.className : ''

    let lastItemIndex = 0
    let slides = Array(countSlides)

    for (let i = 0; i < slides.length; i++) {
      slides[i] = []
      slides[i].push(this.props.items.slice(lastItemIndex, lastItemIndex + itemsBySlide))
      lastItemIndex += itemsBySlide
    }

    return (
      <ul className={`slider ${className}`}>
        <div className='slider__slides' style={slideTransationStyle}>
          {slides.map((slide, i) =>
            <Slide
              key={i}
              items={[...slide]}
            />)}
        </div>
        {slides.length > 1 &&
          <div className='slider__controls'>
            <Button
              className='slider__control'
              type='icon'
              onClick={this.handlePrevSlide}
            >
              <span className='fal fa-arrow-left' />
            </Button>
            <Button
              className='slider__control'
              type='icon'
              onClick={this.handleNextSlide}
            >
              <span className='fal fa-arrow-right' />
            </Button>
          </div>}
      </ul>
    )
  }
}

function Slide ({ items }) {
  return (
    <li
      className={`slider__slide ${(items > 1) ? 'slider__slide--multiple' : ''}`}
    >{items}
    </li>
  )
}
