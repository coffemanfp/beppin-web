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
    this.activateSearchBar = this.activateSearchBar.bind(this)
  }

  search (input) {
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

  activateSearchBar () {
    this.setState({ isSearchBarActived: true })
  }

  render () {
    const { results } = this.state
    const showResults = ((results.length > 0 && this.state.isSearchBarActived))

    return (
      <div className='search'>
        <SearchBar
          search={this.search}
          handleToggleSearchBar={this.toggleSearchBar}
          activateSearchBar={this.activateSearchBar}
          isActived={this.state.isSearchBarActived}
        />
        {showResults &&
          <SearchResults results={results} />}
      </div>
    )
  }
}
