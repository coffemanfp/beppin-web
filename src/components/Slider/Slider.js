import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'
import './Slider.css'

const Slider = ({ initialSlide = 0, items, itemsBySlide = 1, withArrows = true, className }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    setCurrentSlide(initialSlide);
  }, [initialSlide]);


  function getCountSlides () {
    let countSlides = items.length / (itemsBySlide || 1)
    if (countSlides % 1 !== 0) {
      countSlides++
      countSlides -= countSlides % 1
    }

    return countSlides
  }

  function getSlides() {
    let lastItemIndex = 0
    let slides = Array(getCountSlides())
  
    for (let i = 0; i < slides.length; i++) {
      slides[i] = []
      slides[i].push(items.slice(lastItemIndex, lastItemIndex + itemsBySlide))
      lastItemIndex += itemsBySlide
    }

    return slides
  }

  function handleNextSlide () {
    if (currentSlide === getCountSlides() - 1) {
      setCurrentSlide(0)
      return
    }
    setCurrentSlide(currentSlide + 1)
  }

  function handlePrevSlide () {
    if (currentSlide === 0) {
      setCurrentSlide(getCountSlides() - 1)
      return
    }

    setCurrentSlide(currentSlide - 1)
  }
  
  const countSlides = getCountSlides()
  if (currentSlide > countSlides) {
    setCurrentSlide(countSlides - 1)
  }

  const slideTransationStyle = {
    transform: `translate3d(${(currentSlide) * 100 * -1}%, 0, 0)`
  }

  const slides = getSlides()

  return (
    <ul className={`slider ${className}`}>
      <div className='slider__slides' style={slideTransationStyle}>
        {slides.map((slide, i) =>
          <Slide
            key={i}
            items={[...slide]}
          />)}
      </div>
      {(withArrows && slides.length > 1) &&
        <div className='slider__controls'>
          <Button
            className='slider__control'
            type='icon'
            onClick={handlePrevSlide}
          >
            <span className='fal fa-arrow-left' />
          </Button>
          <Button
            className='slider__control'
            type='icon'
            onClick={handleNextSlide}
          >
            <span className='fal fa-arrow-right' />
          </Button>
        </div>}
    </ul>
  )
}

Slider.propTypes = {
  initialSlide: PropTypes.number,
  items: PropTypes.array.isRequired,
  itemsBySlide: PropTypes.number,
  withArrows: PropTypes.bool,
  className: PropTypes.string
}

function Slide ({ items }) {
  return (
    <li
      className={`slider__slide ${(items > 1) ? 'slider__slide--multiple' : ''}`}
    >{items}
    </li>
  )
}

export default Slider
