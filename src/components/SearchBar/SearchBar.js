import React, { Component } from 'react'
import Button from '../Button/Button'
import './SearchBar.css'

export default class SearchBar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isActived: false,
      search: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggleSearchBar = this.toggleSearchBar.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()

    this.props.search(this.state.search)
  }

  toggleSearchBar () {
    this.setState({ isActived: !this.state.isActived })
  }

  render () {
    return (
      <form
        className='search-bar'
        onSubmit={this.handleSubmit}
      >
        <div onKeyPress={e => console.log(e.key)} className={`search-bar__container ${(this.state.isActived) ? 'search-bar__container--actived' : ''}`}>
          <input
            type='text'
            className='search-bar__control'
            name='search-bar'
            value={this.state.search}
            onChange={e => this.setState({ search: e.target.value })}
          />
          {window.innerWidth <= 720 &&
            <Button
              className='search-bar__submit'
              type='icon'
            >
              <span className='fal fa-search'></span>
            </Button>}
        </div>
        <Button
          className='search-bar__trigger'
          onClick={(window.innerWidth > 720) ? this.handleSubmit : this.toggleSearchBar}
          type='icon'
        >
          <span className={`fal ${(this.state.isActived) ? 'fa-times': 'fa-search'}`} />
        </Button>
      </form>
    )
  }
}
