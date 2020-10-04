import React from 'react'
import './Logo.css'

export default function Logo (props) {
  return (
    <div className='logo'>
      <img
        className='logo__image'
        src={props.logo} alt='Beppin'
      />
    </div>
  )
}
