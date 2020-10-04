import React from 'react'
import './SearchResult.css'

export default function SearchResult ({ result }) {
  const title = (result.title.length > 30)
    ? result.title.slice(0, 30) + '...'
    : result.title

  const description = (result.description.length > 20)
  ? result.description.slice(0, 20) + '...'
  : result.description


  return (
    <li className='search-result'>
      <a href className='search-result__link'>
        <p className='search-result__title'>{title}</p>
        <p className='search-result__description'>{description}</p>
        <img className='search-result__image' src={result.image} alt={title}/>
      </a>
    </li>
  )
}
