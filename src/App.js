import React, { useState } from 'react'
import Menu from './components/Menu/Menu'
import MainHeader from './components/MainHeader/MainHeader'
import Banner from './components/Banner/Banner'
import CategoriesList from './components/CategoriesList/CategoriesList'
import ProductsList from './components/ProductsList/ProductsList'
import StoresList from './components/StoresList/StoresList'
import Section from './components/Section/Section'
import logo from './img/logo.png'
import './App.css'
import banner from './data/banner'
import products from './data/products'
import stores from './data/stores'
import categories from './data/categories'

export default function App () {
  const [isMenuActived, setIsMenuActived] = useState(false)

  return (
    <>
      <MainHeader
        logo={logo}
        isMenuActived={isMenuActived}
        triggerMenu={() => setIsMenuActived(!isMenuActived)}
      />
      <Menu isActived={isMenuActived} />
      <Banner slides={banner} />
      <main className='main-content'>
        <Section title='Hot'>
          <ProductsList products={products.slice(0, 5)} />
        </Section>
        <Section title='Our stores'>
          <StoresList stores={stores.slice(0, 5)} />
        </Section>
        <Section title='Categories'>
          <CategoriesList categories={categories.slice(0, 10)} />
        </Section>
      </main>
    </>
  )
}
