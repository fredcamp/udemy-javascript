// global imports
import '../toggleSidebar.js'
import '../cart/toggleCart.js'
import '../cart/setupCart.js'

//  filter imports
import setupSearch from '../filters/search.js'
import setupCompanies from '../filters/companies.js'
import setupPrice from '../filters/price.js'

import fetchProducts from '../fetchProducts.js'

// specific imports
import { store, setupStore } from '../store.js'
import display from '../displayProducts.js'
import { getElement } from '../utils.js'

const productsDOM = getElement('.products-container')
const loading = getElement('.page-loading')

const init = async () => {
  if (store.length < 1) {
    const newStore = await fetchProducts()
    setupStore(newStore)
  }
  display(store, productsDOM)
  setupSearch(store)
  setupCompanies(store)
  setupPrice(store)
  loading.style.display = 'none'
}

window.addEventListener('DOMContentLoaded', init)
