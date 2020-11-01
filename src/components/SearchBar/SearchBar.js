import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'
import FormControl from '../FormControl/FormControl'
import './SearchBar.css'

const SearchBar = ({ isActived, activateSearchBar, handleToggleSearchBar, search }) => {
  const [searchInput, setSearch] = useState('')
  const handleSubmit = e => {e.preventDefault(); search(searchInput)}

  return (
    <form
      className='search-bar'
      onSubmit={handleSubmit}
    >
      <div
        className={`search-bar__container ${(isActived) ? 'search-bar__container--actived' : ''}`}
      >
        <FormControl
          className='search-bar__control'
          name='search'
          placeHolder='What are you looking for?'
          onChange={search => setSearch(search)}
          onFocus={() => activateSearchBar()}
        />
        <Button
          className='search-bar__submit'
          type='icon'
        >
          <span className='fal fa-search' />
        </Button>
      </div>
      <Button
        className='search-bar__submit search-bar__submit--mobile'
        onClick={handleToggleSearchBar}
        type='icon'
      >
        <span className={`fal ${(isActived) ? 'fa-times' : 'fa-search'}`} />
      </Button>
    </form>
  )
}

SearchBar.propTypes = {
  isActived: PropTypes.bool.isRequired,
  activateSearchBar: PropTypes.func.isRequired,
  handleToggleSearchBar: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired
}

export default SearchBar

