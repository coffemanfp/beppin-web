import React from 'react'
import PropTypes from 'prop-types'
import Dialog from '../Dialog/Dialog'
import Slider from '../Slider/Slider'
import './Banner.css'

const Banner = ({ slides }) => {
  const bannerElement = slides.map((slide, i) =>
    <div key={i} className='banner__slide' style={{ backgroundImage: `url(${slide.image})` }}>
      <Dialog title={slide.title}>
        <p>{slide.content}</p>
      </Dialog>
    </div>
  )

  return (
    <Slider
      className='banner'
      items={bannerElement}
    />
  )
}

Banner.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    })
  )
}

export default Banner
