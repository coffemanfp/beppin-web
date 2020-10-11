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
  }

  handleNextSlide () {
    const slides = this.props.slides
    const lastSlideIndex = slides.length - 1
    if (this.state.currentSlide === lastSlideIndex) {
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
    const slides = this.props.slides
    const lastSlideIndex = slides.length - 1

    if (this.state.currentSlide === 0) {
      this.setState({
        currentSlide: lastSlideIndex
      })
      return
    }

    this.setState({
      currentSlide: this.state.currentSlide - 1
    })
  }

  render () {
    const slides = this.props.slides
    const slideTransationStyle = {
      transform: `translate3d(${(this.state.currentSlide) * 100 * -1}%, 0, 0)`
    }
    const className = (this.props.className) ? this.props.className : ''

    return (
      <ul className={`slider ${className}`}>
        <div className='slider__slides' style={slideTransationStyle}>
          {slides.map(slide =>
            <li
              key={slide.id}
              className='slider__slide'
            >{slide}
            </li>
          )}
        </div>
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
        </div>
      </ul>
    )
  }
}
