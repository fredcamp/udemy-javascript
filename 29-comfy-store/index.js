// global imports
import './src/toggleSidebar.js'
import './src/cart/toggleCart.js'
import './src/cart/setupCart.js'

// specific imports
import fetchProducts from './src/fetchProducts.js'
import { setupStore, store } from './src/store.js'
import display from './src/displayProducts.js'
import { getElement } from './src/utils.js'

const featuredDOM = getElement('.featured-center')

const init = async () => {
  const products = await fetchProducts()
  if (!products) return

  setupStore(products)

  const featured = store.filter(item => item.featured)
  display(featured, featuredDOM)
}

window.addEventListener('DOMContentLoaded', init)
