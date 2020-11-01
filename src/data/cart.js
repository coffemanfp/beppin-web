import products from './products'

const cart = [
  {
    id: products[0].id,
    name: products[0].name,
    price: products[0].price,
    currency: products[0].currency,
    image: products[0].images[0].url,
    quantity: 3,
    quantityAvailable: 12
  },
  {
    id: products[1].id,
    name: products[1].name,
    price: products[1].price,
    currency: products[1].currency,
    image: products[1].images[0].url,
    quantity: 2,
    quantityAvailable: 20
  },
  {
    id: products[3].id,
    name: products[3].name,
    price: products[3].price,
    currency: products[3].currency,
    image: products[3].images[0].url,
    quantityAvailable: 100
  }
]

export default cart