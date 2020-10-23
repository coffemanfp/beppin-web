import React, { useState } from 'react'
import MainHeader from './components/MainHeader/MainHeader'
import Banner from './components/Banner/Banner'
import CategoriesList from './components/CategoriesList/CategoriesList'
import ProductsList from './components/ProductsList/ProductsList'
import StoresList from './components/StoresList/StoresList'
import Section from './components/Section/Section'
import Aside from './components/Aside/Aside'
import logo from './img/logo.png'
import banner from './data/banner'
import products from './data/products'
import stores from './data/stores'
import categories from './data/categories'
import './App.css'

export default function App () {
  const [isAsideActived, setIsAsideActived] = useState(false)

  return (
    <>
      <MainHeader
        logo={logo}
        isAsideActived={isAsideActived}
        triggerAside={() => setIsAsideActived(!isAsideActived)}
      />
      <div className={`main-wrapper ${(isAsideActived) ? 'main-wrapper--with-aside' : ''}`}>
        <div className='main-wrapper__container'>
          <Banner slides={banner} />
          <main className='main-content'>
            <Section title='Hot'>
              <ProductsList products={products} />
            </Section>
            <Section title='Our stores'>
              <StoresList stores={stores} />
            </Section>
            <Section title='Categories'>
              <CategoriesList categories={categories} />
            </Section>
          </main>
        </div>
        <div className='main-wrapper__container'>
          <Aside
            isActived={isAsideActived}
          />
        </div>
      </div>
    </>
  )
}
