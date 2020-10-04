import exampleImage1 from './../img/rsz_loginpresentation.jpg'
import exampleImage2 from './../img/rsz_signuppresentation.jpg'

const products = [
  {
    id: 1,
    name: 'Laptop XPS 17',
    description: 'Super Laptop XPS 17 lightweight',
    price: 850,
    isFavorite: true,
    images: [
      {
        id: 1,
        url: exampleImage1
      },
      {
        id: 2,
        url: exampleImage2
      }
    ]
  },
  {
    id: 2,
    name: 'Smart Tv',
    description: 'Super Smart Tv',
    price: 500,
    images: [
      {
        id: 1,
        url: exampleImage1
      },
      {
        id: 2,
        url: exampleImage2
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
    price: 200
  },
  {
    id: 4,
    name: 'Redmi Note 9',
    description: '4gb RAM, 128gb ROM',
    price: 700,
    images: [
      {
        id: 1,
        url: exampleImage1
      },
      {
        id: 2,
        url: exampleImage2
      }
    ]
  },
  {
    id: 5,
    name: 'Redmi Note 10',
    description: '4gb RAM, 128gb ROM',
    price: 700,
    images: [
      {
        id: 1,
        url: exampleImage1
      },
      {
        id: 2,
        url: exampleImage2
      }
    ]
  },
  {
    id: 6,
    name: 'Redmi Note 11',
    description: '4gb RAM, 128gb ROM',
    price: 700,
    images: [
      {
        id: 1,
        url: exampleImage1
      },
      {
        id: 2,
        url: exampleImage2
      }
    ]
  },
  {
    id: 7,
    name: 'Redmi Note 12',
    description: '4gb RAM, 128gb ROM',
    price: 700,
    images: [
      {
        id: 1,
        url: exampleImage1
      },
      {
        id: 2,
        url: exampleImage2
      }
    ]
  },
  {
    id: 8,
    name: 'Redmi Note 13',
    description: '4gb RAM, 128gb ROM',
    price: 700,
    images: [
      {
        id: 1,
        url: exampleImage1
      },
      {
        id: 2,
        url: exampleImage2
      }
    ]
  },
  {
    id: 9,
    name: 'Redmi Note 14',
    description: '4gb RAM, 128gb ROM',
    price: 700,
    images: [
      {
        id: 1,
        url: exampleImage1
      },
      {
        id: 2,
        url: exampleImage2
      }
    ]
  },
  {
    id: 10,
    name: 'Redmi Note 15',
    description: '4gb RAM, 128gb ROM',
    price: 700,
    images: [
      {
        id: 1,
        url: exampleImage1
      },
      {
        id: 2,
        url: exampleImage2
      }
    ]
  }
]

export default products