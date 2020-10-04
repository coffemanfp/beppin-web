import React, { Component } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import products from './../../data/products'
import './Search.css'

export default class Search extends Component {
  constructor (props) {
    super(props)

    this.state = {
      results: []
    }

    this.search = this.search.bind(this)
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

  render () {
    const { results } = this.state
    return (
      <div className='search'>
        <SearchBar search={this.search}/>
        {results.length > 0 &&
          <SearchResults results={this.state.results} />
        }
      </div>
    )
  }
}