import React from 'react'
import PropTypes from 'prop-types'
import './Section.css'

const Section = ({ title, subTitle, children }) => {
  return (
    <section className='section'>
      <header className='section__header'>
        <h3 className='section__title'>{title}</h3>
        {subTitle &&
          <h4 className='section__sub-title'>{subTitle}</h4>
        }
      </header>
      <div className='section__content'>
        {children}
      </div>
    </section>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  children: PropTypes.any.isRequired
}

export default Section
