import { getElement } from '../utils.js'
import display from '../displayProducts.js'

const productsDOM = getElement('.products-container')
const form = getElement('.input-form')
const searchValue = getElement('.search-input')

const setupSearch = products => {
  form.addEventListener('input', e => {
    const value = searchValue.value.trim()

    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().startsWith(value.toLowerCase())
    )

    if (filteredProducts.length < 1) {
      productsDOM.innerHTML = `<h3 class="filter-error">sorry, no results matched with your search. try again.</h3>`
      return
    }

    display(filteredProducts, productsDOM, true)
  })

  form.addEventListener('submit', e => {
    e.preventDefault()
    return
  })
}

export default setupSearch
