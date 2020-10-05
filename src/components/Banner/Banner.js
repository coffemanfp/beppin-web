import React, { Component } from 'react'
import Button from '../Button/Button'
import Dialog from '../Dialog/Dialog'
import './Banner.css'

export default class Banner extends Component {
  constructor (props) {
    super(props)

    this.state = {
      currentSlide: 0
    }

    this.handleNextSlide = this.handleNextSlide.bind(this)
    this.handlePrevSlide = this.handlePrevSlide.bind(this)
  }

  handleNextSlide() {
    const lastSlideIndex = this.props.slides.length - 1
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

  handlePrevSlide() {
    const lastSlideIndex = this.props.slides.length - 1

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
    const slideTransation = {
      transform: `translate3d(${(this.state.currentSlide) * 100 * -1}%, 0, 0)`
    }

    return (
      <div className='banner'>
        <ul className='banner__slides' style={slideTransation}>
          {this.props.slides.map((slide, i) => 
            <li
              key={i}
              className={`banner__slide ${(this.currentSlide === i) ? 'banner__slide--actived' : ''}`}
            >
              <img className='banner__image' src={slide.image} alt=''/>
              <div className='banner__content'>
                <Dialog title={slide.title}>
                  <p>{slide.content}</p>
                </Dialog>
              </div>
            </li>
          )}
        </ul>
        <div className='banner__controls'>
          <Button
            className='banner__control'
            type='icon'
            onClick={this.handlePrevSlide}
          >
            <span className='fal fa-arrow-left'></span>
          </Button>
          <Button
            className='banner__control'
            type='icon'
            onClick={this.handleNextSlide}
          >
            <span className='fal fa-arrow-right'></span>
          </Button>
        </div>
      </div>
    )
  }
}
