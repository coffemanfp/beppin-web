import React from 'react'
import PropTypes from 'prop-types'
import Slider from '../Slider/Slider'
import Menu from '../Menu/Menu'
import Cart from '../Cart/Cart'
import Login from '../Login/Login'
import SignUp from '../SignUp/SignUp'
import Button from '../Button/Button'
import cart from '../../data/cart'
import './Aside.css'

const Aside = ({ isActived, type, triggerAside }) => {
  const currentSlide = getSlideIndex(type)
  const slides = [
    <Menu key={1} />,
    <Cart key={2} items={cart} />,
    <Login key={3} />,
    <SignUp key={4} />
  ]

  const navButtons = [
    { icon: 'list', handleClick: () => triggerAside('menu') },
    { icon: 'shopping-cart', handleClick: () => triggerAside('cart') },
    { icon: 'user', handleClick: () => triggerAside('login') },
    { icon: 'user-circle', handleClick: () => triggerAside('signUp') }
  ]

  return (
    <aside className={`aside ${(isActived) ? 'aside--actived' : ''}`}>
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
      <div className='aside__content'>
        <Slider
          className='aside__slides'
          initialSlide={currentSlide}
          items={slides}
          withArrows={false}
        />
      </div>
    </aside>
  )
}

Aside.propTypes = {
  isActived: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  triggerAside: PropTypes.func.isRequired
}

function getSlideIndex (name) {
  switch (name) {
    case 'menu':
      return 0
    case 'cart':
      return 1
    case 'login':
      return 2
    case 'signUp':
      return 3
    default:
      return 0
  }
}

export default Aside
