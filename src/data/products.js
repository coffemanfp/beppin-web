import laptopImage from './../img/laptop.png'
import monitorImage from './../img/monitor.png'

const products = [
  {
    id: 1,
    name: 'Laptop XPS 17',
    description: 'Super Laptop XPS 17 lightweight',
    price: 850,
    currency: '$',
    isFavorite: true,
    images: [
      {
        id: 1,
        url: monitorImage
      },
      {
        id: 2,
        url: laptopImage
      }
    ]
  },
  {
    id: 2,
    name: 'Smart Tv',
    description: 'Super Smart Tv',
    price: 500,
    currency: '$',
    images: [
      {
        id: 1,
        url: laptopImage
      },
      {
        id: 2,
        url: laptopImage
      }
    ],
    offert: {
      id: 1,
      price: 345
    }
  },
  {
    id: 3,
    name: 'Blue pen',
    description: 'Amazing big text lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, molestiae. amet consectetur adipisicing elit.',
    price: 200,
    currency: '$'
  },
  {
    id: 4,
    name: 'Redmi Note 9',
    description: '4gb RAM, 128gb ROM',
    price: 700,
    currency: '$',
    images: [
      {
        id: 1,
        url: monitorImage
      },
      {
        id: 2,
        url: laptopImage
      }
    ]
  },
  {
    id: 5,
    name: 'Redmi Note 10',
    description: '4gb RAM, 128gb ROM',
    price: 700,
    currency: '$',
    images: [
      {
        id: 1,
        url: laptopImage
      },
      {
        id: 2,
        url: laptopImage
      }
    ]
  },
  {
    id: 6,
    name: 'Redmi Note 11',
    description: '4gb RAM, 128gb ROM',
    price: 700,
    currency: '$',
    images: [
      {
        id: 1,
        url: monitorImage
      },
      {
        id: 2,
        url: laptopImage
      }
    ]
  },
  {
    id: 7,
    name: 'Redmi Note 12',
    description: '4gb RAM, 128gb ROM',
    price: 700,
    currency: '$',
    images: [
      {
        id: 1,
        url: monitorImage
      },
      {
        id: 2,
        url: laptopImage
      }
    ]
  },
  {
    id: 8,
    name: 'Redmi Note 13',
    description: '4gb RAM, 128gb ROM',
    price: 700,
    currency: '$',
    images: [
      {
        id: 1,
        url: laptopImage
      },
      {
        id: 2,
        url: laptopImage
      }
    ]
  },
  {
    id: 9,
    name: 'Redmi Note 14',
    description: '4gb RAM, 128gb ROM',
    price: 700,
    currency: '$',
    images: [
      {
        id: 1,
        url: monitorImage
      },
      {
        id: 2,
        url: laptopImage
      }
    ]
  },
  {
    id: 10,
    name: 'Redmi Note 15',
    description: '4gb RAM, 128gb ROM',
    price: 700,
    currency: '$',
    images: [
      {
        id: 1,
        url: laptopImage
      },
      {
        id: 2,
        url: laptopImage
      }
    ]
  }
]

export default products
