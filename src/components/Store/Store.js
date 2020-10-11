import React from 'react'
import './Store.css'

export default function Store ({ background, logo, name }) {
  return (
    <a className='store'>
      <div
        className='store__presentation'
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className='store__logo-container'>
          <img
            src={logo}
            alt=''
            className='store__logo'
          />
        </div>
        <p className='store__name'>{name}</p>
      </div>
    </a>
  )
}
