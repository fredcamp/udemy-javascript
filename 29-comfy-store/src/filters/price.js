import { getElement } from '../utils.js'
import display from '../displayProducts.js'

const form = getElement('.price-form')
const priceFilter = getElement('.price-filter')
const priceValue = getElement('.price-value')
const productsDOM = getElement('.products-container')

const setupPrice = store => {
  const prices = store.map(product => product.price)
  const maxPrice = Math.ceil(Math.max.apply(null, prices) / 100)

  priceFilter.max = maxPrice
  priceFilter.min = 0
  priceFilter.value = maxPrice
  priceFilter.step = 10
  priceValue.textContent = `Value : $${maxPrice}`

  form.addEventListener('input', e => {
    const price = parseInt(priceFilter.value)
    priceValue.textContent = `Value : $${price}`

    const filteredProducts = store.filter(
      product => product.price / 100 <= price
    )

    if (filteredProducts.length < 1) {
      productsDOM.innerHTML = `<h3 class="filter-error">sorry, no results matched with your search. try again.</h3>`
      return
    }

    display(filteredProducts, productsDOM, true)
  })
}

export default setupPrice
