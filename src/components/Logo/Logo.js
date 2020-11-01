import React from 'react'
import PropTypes from 'prop-types'
import './Logo.css'

const Logo = ({ logo }) => {
  return (
    <div className='logo'>
      <img
        className='logo__image'
        src={logo} alt='Beppin'
      />
    </div>
  )
}

Logo.propTypes = {
  logo: PropTypes.string,
}

export default Logo
