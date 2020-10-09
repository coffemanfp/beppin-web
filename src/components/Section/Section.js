import React from 'react'
import './Section.css'

export default function Section (props) {
  return (
    <section className='section'>
      <header className='section__header'>
        <h3 className='section__title'>{props.title}</h3>
        {props.subTitle &&
          <h4 className='section__sub-title'>{props.subTitle}</h4>
        }
      </header>
      <div className='section__content'>
        {props.children}
      </div>
    </section>
  )
}
