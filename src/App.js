import React from 'react'
import MainHeader from './components/MainHeader/MainHeader'
import Banner from './components/Banner/Banner'
import ProductsList from './components/ProductsList/ProductsList'
import Section from './components/Section/Section'
import logo from './img/logo.png'
import './App.css'
import banner from './data/banner'
import products from './data/products'

export default function App () {
  return (
    <>
      <MainHeader logo={logo} />
      <Banner slides={banner} />
      <main className='main-content'>
        <Section title='Trending'>
          <ProductsList products={products.slice(0, 4)} />
        </Section>
        <Section title='Trending'>
          <ProductsList products={products.slice(0, 4)} />
        </Section>
        <Section title='Trending'>
          <ProductsList products={products.slice(0, 4)} />
        </Section>
      </main>
      <footer className='main-footer'>
        <div>
          {/* Icons made by <a href="https://www.flaticon.local/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.local/" title="Flaticon">www.flaticon.local</a> */}
        </div>
      </footer>
    </>
  )
}
