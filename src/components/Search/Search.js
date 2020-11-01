import React, { useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import products from './../../data/products'
import './Search.css'

function Search () {
  const [isSearchBarActived, setIsSearchBarActived] = useState(false)
  const [results, setResults] = useState([])

  function search (input) {
    if (!input) {
      setResults([])
      return
    }
    
    const newResults = products.filter(product => 
      (product.name.toLowerCase().includes(input.toLowerCase())
      || product.description.toLowerCase().includes(input.toLowerCase()))
    )
    
    setResults(newResults.map(product => ({...product, image: product.images[0].url})))
  }

  const showResults = ((results.length > 0 && isSearchBarActived))

  return (
    <div className='search'>
      <SearchBar
        search={search}
        handleToggleSearchBar={() => setIsSearchBarActived(!isSearchBarActived)}
        activateSearchBar={() => setIsSearchBarActived(true)}
        isActived={isSearchBarActived}
      />
      {showResults &&
        <SearchResults results={results} />}
    </div>
  )
}

export default Search
