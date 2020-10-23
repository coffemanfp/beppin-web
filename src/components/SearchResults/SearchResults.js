import React from 'react'
import SearchResult from '../SearchResult/SearchResult'
import './SearchResults.css'

export default function SearchResults ({ results }) {
  console.log('llego aqui', results)

  return (
    <ul className='search-results'>
      {results.map(result =>
        <SearchResult
          key={result.title}
          result={result}
        />
      )}
    </ul>
  )
}
