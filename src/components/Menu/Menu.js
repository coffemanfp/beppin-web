import React from 'react'
import './Menu.css'

export default function Menu ({ isActived, isUserLogged }) {
  return (
    <menu className={`main-menu ${(isActived) ? 'main-menu--actived' : ''}`}>
      <li>
        <ul className='main-menu__options'>
          <li className='menu-option menu-option--actived main-menu__option'>
            <span className='menu-option__icon fal fa-home' />
            <span className='menu-option__name'>Home</span>
          </li>
          {isUserLogged &&
            <li className='menu-option main-menu__option'>
              <span className='menu-option__icon fal fa-bags-shopping' />
              <span className='menu-option__name'>My Shopping</span>
            </li>}
          {isUserLogged &&
            <li className='menu-option main-menu__option'>
              <span className='menu-option__icon fal fa-user' />
              <span className='menu-option__name'>My Account</span>
            </li>}
          <li className='menu-option main-menu__option'>
            <span className='menu-option__icon fal fa-tag' />
            <span className='menu-option__name'>Sell</span>
          </li>
        </ul>
        <ul className='main-menu__options'>
          <li className='menu-option main-menu__option'>
            <span className='menu-option__icon fal fa-list' />
            <span className='menu-option__name'>Categories</span>
          </li>
          <li className='menu-option main-menu__option'>
            <span className='menu-option__icon fal fa-percentage' />
            <span className='menu-option__name'>Offers</span>
          </li>
          <li className='menu-option main-menu__option'>
            <span className='menu-option__icon fal fa-store' />
            <span className='menu-option__name'>Stores</span>
          </li>
        </ul>
        <ul className='main-menu__options'>
          <li className='menu-option menu-option main-menu__option'>
            <span className='menu-option__icon fal fa-question' />
            <span className='menu-option__name'>Help</span>
          </li>
        </ul>
      </li>
    </menu>
  )
}
