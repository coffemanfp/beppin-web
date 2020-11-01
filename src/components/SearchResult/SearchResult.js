import React from 'react'
import PropTypes from 'prop-types'
import SearchBar from '../SearchBar/SearchBar'
import './SearchResult.css'

const SearchResult = ({name, description, image}) => {
  const shortName = (name.length > 30)
    ? name.slice(0, 30) + '...'
    : name

  const shortDescription = (description?.length > 20)
    ? description.slice(0, 20) + '...'
    : description

  return (
    <li className='search-result'>
      <a href className='search-result__link'>
        <p className='search-result__title'>{shortName}</p>
        {shortDescription &&
        <p className='search-result__description'>{shortDescription}</p>}
        {image &&
        <img className='search-result__image' src={image} alt={shortName} />}
      </a>
    </li>
  )
}

SearchResult.propTypes = {
  result: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string
  })
}

export default SearchResult
