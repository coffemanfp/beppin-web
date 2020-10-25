import React from 'react'
import Logo from '../Logo/Logo'
import Search from '../Search/Search'
import Button from '../Button/Button'
import './MainHeader.css'

export default function MainHeader ({ logo, typeAside, triggerAside }) {

  const isAsideActived = typeAside !== ''

  function toggleAside () {
    if (!typeAside) {
      triggerAside('menu')
    } else {
      triggerAside('')
    }
  }

  return (
    <header className='main-header'>
      <Logo logo={logo} />
      <Search />
      <div className='main-header__options'>
        <Button
          className={`main-header__option ${(isAsideActived) ? 'main-header__option--actived' : ''}`}
          type='icon'
          onClick={toggleAside}
        >
          <span className={`fal fa-${(isAsideActived) ? 'times' : 'bars'}`} />
        </Button>
        <Button
          className={`main-header__option ${(typeAside === 'cart') ? 'main-header__option--actived' : ''}`}
          type='icon'
          onClick={() => triggerAside('cart')}
        >
          <span className='fal fa-shopping-cart' />
        </Button>
      </div>
    </header>
  )
}
