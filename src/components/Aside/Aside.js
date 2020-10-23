import React, { useState } from 'react'
import Slider from '../Slider/Slider'
import Menu from '../Menu/Menu'
import Login from '../Login/Login'
import SignUp from '../SignUp/SignUp'
import Button from '../Button/Button'
import './Aside.css'

export default function Aside ({ isActived, type }) {
  const [currentSlide, setCurrentSlide] = useState(getSlideIndex(type))
  const slides = [
    <Menu key={1} />,
    <Login key={2} />,
    <SignUp key={3} />
  ]

  const navButtons = [
    { icon: 'list', handleClick: () => setCurrentSlide(getSlideIndex('menu')) },
    { icon: 'user', handleClick: () => setCurrentSlide(getSlideIndex('login')) },
    { icon: 'user-circle', handleClick: () => setCurrentSlide(getSlideIndex('signUp'))}
  ]

  return (
    <aside className={`aside ${(isActived) ? 'aside--actived' : ''}`}>
      <div className='aside__content'>
        <header className='aside__header'>
          {navButtons.map((navButton, i) =>
            <Button
              key={i}
              type='icon'
              onClick={navButton.handleClick}
              className={`aside__nav-button ${(currentSlide === i) ? 'aside__nav-button--actived' : ''}`}
            >
              <span className={`fal fa-${navButton.icon}`} />
            </Button>
          )}
        </header>
        <Slider
          className='aside__slides'
          currentSlide={currentSlide}
          items={slides}
          withArrows={false}
        />
      </div>
    </aside>
  )
}

function getSlideIndex (name) {
  switch (name) {
    case 'menu':
      return 0
    case 'login':
      return 1
    case 'signUp':
      return 2
    default:
      return 0
  }
}