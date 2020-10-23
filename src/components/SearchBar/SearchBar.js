import React, { Component } from 'react'
import Button from '../Button/Button'
import FormControl from '../FormControl/FormControl'
import './SearchBar.css'

export default class SearchBar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      search: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()

    this.props.search(this.state.search)
  }

  render () {
    return (
      <form
        className='search-bar'
        onSubmit={this.handleSubmit}
      >
        <div
          className={`search-bar__container ${(this.props.isActived) ? 'search-bar__container--actived' : ''}`}
        >
          <FormControl
            className='search-bar__control'
            name='search'
            placeHolder='What are you looking for?'
            onChange={search => this.setState({ search })}
            onFocus={() => this.props.activateSearchBar()}
          />
          <Button
            className='search-bar__submit'
            onClick={this.handleSubmit}
            type='icon'
          >
            <span className='fal fa-search' />
          </Button>
        </div>
        <Button
          className='search-bar__submit search-bar__submit--mobile'
          onClick={e => { e.preventDefault(); this.props.handleToggleSearchBar() }}
          type='icon'
        >
          <span className={`fal ${(this.props.isActived) ? 'fa-times' : 'fa-search'}`} />
        </Button>
      </form>
    )
  }
}
