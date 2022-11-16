// global imports
import '../toggleSidebar.js'
import '../cart/toggleCart.js'
import '../cart/setupCart.js'
// specific
import { addToCart } from '../cart/setupCart.js'
import { singleProductUrl, getElement, formatPrice } from '../utils.js'

// selections
const loading = getElement('.page-loading')
const centerDOM = getElement('.single-product-center')
const pageTitleDOM = getElement('.page-hero-title')
const imgDOM = getElement('.single-product-img')
const titleDOM = getElement('.single-product-title')
const companyDOM = getElement('.single-product-company')
const priceDOM = getElement('.single-product-price')
const colorsDOM = getElement('.single-product-colors')
const descDOM = getElement('.single-product-desc')
const cartBtn = getElement('.addToCartBtn')

// cart product
// let productID;
const searchParams = new URLSearchParams(window.location.search)
const productID = searchParams.get('id')

const fetchProduct = async () => {
  try {
    const response = await fetch(`${singleProductUrl}?id=${productID}`)

    if (!response.ok) {
      window.location.replace('index.html')
    }

    return response.json()
  } catch (err) {
    console.log(err.message)
  }
}

const displayProduct = product => {
  const {
    id,
    fields: { colors, company, name, price, image: img },
  } = product
  const image = img[0].thumbnails.large.url

  pageTitleDOM.textContent = `home / ${name}`
  document.title = `${name.charAt(0).toUpperCase() + name.slice(1)} | Comfy`

  imgDOM.src = image
  imgDOM.alt = name
  titleDOM.textContent = name
  companyDOM.textContent = `by ${company}`
  priceDOM.textContent = formatPrice(price)

  colorsDOM.innerHTML = colors
    .map(
      color => `<span class="product-color" style="background:${color}"></span>`
    )
    .join('')

  cartBtn.dataset.id = id
  cartBtn.addEventListener('click', e => {
    addToCart(id)
  })
}

// show product when page loads
window.addEventListener('DOMContentLoaded', async () => {
  const product = await fetchProduct()
  displayProduct(product)
  loading.style.display = 'none'
})
