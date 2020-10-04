import React from 'react'
import Logo from '../Logo/Logo'
import Search from '../Search/Search'
import Button from '../Button/Button'
import './MainHeader.css'

export default function MainHeader ({ logo }) {
  return (
    <header className='main-header'>
      <Logo logo={logo} />
      <Search />
      <div className='main-header__options'>
        <Button
          className='trigger-menu'
          type='icon'
          handleClick={() => console.log('Launch menu')}
        >
          <span className='fal fa-bars' />
        </Button>
      </div>
    </header>
  )
}
