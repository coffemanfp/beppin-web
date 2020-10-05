import React, { Component } from 'react'
import MainHeader from './components/MainHeader/MainHeader'
import products from './data/products'
import logo from './img/logo.png'
import './App.css'
import Banner from './components/Banner/Banner'
import banner from './data/banner'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      products: products
    }
  }

  render () {
    return (
      <>
        <MainHeader logo={logo} />
        <Banner slides={banner}/>
        <main className='main-content'>
        </main>
        <footer className='main-footer'>
          <div>
            {/* Icons made by <a href="https://www.flaticon.local/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.local/" title="Flaticon">www.flaticon.local</a> */}
          </div>
        </footer>
      </>
    )
  }
}
