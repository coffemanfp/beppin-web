import React from 'react'
import PropTypes from 'prop-types'
import SearchResult from '../SearchResult/SearchResult'
import './SearchResults.css'

const SearchResults = ({ results }) => {
  return (
    <ul className='search-results'>
      {results.map(result =>
        <SearchResult
          key={result.name}
          name={result.name}
          description={result.description}
          image={result.image}
        />
      )}
    </ul>
  )
}

SearchResults.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      image: PropTypes.string
    })
  )
}

export default SearchResults
