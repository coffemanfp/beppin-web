import React from 'react'
import Store from '../Store/Store'
import Slider from '../Slider/Slider'

export default function StoresList ({ stores }) {
  const storesList = stores.map(store =>
    <Store
      key={store.id}
      logo={store.logo}
      background={store.background}
      name={store.name}
    />
  )

  return (
    <Slider
      slides={storesList}
    />
  )
}
