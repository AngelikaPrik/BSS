import { createServer, Factory, Model } from 'miragejs'
import data from '../db.json'
import { IProduct } from './types'

const ProductFactory = Factory.extend<IProduct>({
  brand: '',
  name: '',
  price: 0,
  rating: 0,
})

export function makeServer({ environment = 'test' } = {}) {
  let server = createServer({
    environment,

    models: {
      product: Model,
    },

    factories: {
      product: ProductFactory,
    },

    seeds(server) {
      data.products.forEach((p: IProduct) => server.create('product', p))
    },

    routes() {
      this.namespace = 'api'

      this.get('/products', schema => schema.all('product'))
    },
  })

  return server
}
