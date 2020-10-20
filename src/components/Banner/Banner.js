import React from 'react'
import Dialog from '../Dialog/Dialog'
import Slider from '../Slider/Slider'
import './Banner.css'

export default function Banner ({ slides }) {
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
