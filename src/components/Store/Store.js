import React from 'react'
import PropTypes from 'prop-types'
import './Store.css'

const Store = ({ background, logo, name }) => {
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

Store.propTypes = {
  background: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default Store
