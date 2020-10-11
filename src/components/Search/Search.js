import React, { Component } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import products from './../../data/products'
import './Search.css'

export default class Search extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isSearchBarActived: false,
      results: []
    }

    this.search = this.search.bind(this)
    this.toggleSearchBar = this.toggleSearchBar.bind(this)
  }

  search (input) {
    console.log('search')

    if (!input) {
      this.setState({ results: [] })
      return
    }

    let results = []

    for (let i = 0; i < products.length; i++) {
      const product = products[i]

      if (product.name.toLowerCase().includes(input.toLowerCase()) || product.description.toLowerCase().includes(input.toLowerCase())) {
        results.push({
          ...product, name: '', title: product.name
        })
      }
    }

    this.setState({ results })
  }

  toggleSearchBar () {
    this.setState({ isSearchBarActived: !this.state.isSearchBarActived })
  }

  render () {
    const { results } = this.state
    return (
      <div className='search'>
        <SearchBar
          search={this.search}
          handleToggleSearchBar={this.toggleSearchBar}
          isActived={this.state.isSearchBarActived}
        />
        {(results.length > 0 && this.state.isSearchBarActived) &&
          <SearchResults results={results} />}
      </div>
    )
  }
}
