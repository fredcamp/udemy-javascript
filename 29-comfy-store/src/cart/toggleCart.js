import { getElement } from '../utils.js'

const cartOverlay = getElement('.cart-overlay')
const closeBtn = getElement('.cart-close')
const toggleBtn = getElement('.toggle-cart')

const toggleCart = () => {
  cartOverlay.classList.toggle('show')
}

toggleBtn.addEventListener('click', toggleCart)
closeBtn.addEventListener('click', toggleCart)

export const openCart = () => {
  cartOverlay.classList.add('show')
}
