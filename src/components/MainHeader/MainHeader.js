import React from 'react'
import Logo from '../Logo/Logo'
import Search from '../Search/Search'
import Button from '../Button/Button'
import PropTypes from 'prop-types'
import './MainHeader.css'

const MainHeader = ({ logo, typeAside, triggerAside }) => {

  const isAsideActived = typeAside !== ''

  function toggleAside () {
    if (!typeAside) {
      triggerAside('menu')
    } else {
      triggerAside('')
    }
  }

  const options = [
    {
      isActived: isAsideActived,
      handleClick: toggleAside,
      icon: (isAsideActived) ? 'times' : 'bars'
    },
    {
      isActived: typeAside === 'cart',
      handleClick: () => triggerAside('cart'),
      icon: 'shopping-cart'
    }
  ]

  return (
    <header className='main-header'>
      <Logo logo={logo} />
      <Search />
      <div className='main-header__options'>
        {options.map((option, i) =>
          <Button
            key={i}
            className={`main-header__option ${(option.isActived) ? 'main-header__option--actived' : ''}`}
            onClick={option.handleClick}
          >
            <span className={`fal fa-${option.icon}`} />
          </Button>
        )}
      </div>
    </header>
  )
}

MainHeader.propTypes = {
  logo: PropTypes.string.isRequired,
  typeAside: PropTypes.string.isRequired,
  triggerAside: PropTypes.func.isRequired
}

export default MainHeader
