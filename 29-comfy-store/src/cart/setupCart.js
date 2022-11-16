// import
import {
  getStorageItem,
  setStorageItem,
  formatPrice,
  getElement,
} from '../utils.js'
import { openCart } from './toggleCart.js'
import { findProduct } from '../store.js'
import addToCartDOM from './addToCartDOM.js'

// set items
const cartTotalDOM = getElement('.cart-total')
const cartItemsDOM = getElement('.cart-items')
const cartItemCountDOM = getElement('.cart-item-count')

let cart = getStorageItem('cart')

export const addToCart = id => {
  const item = cart.find(cartItem => cartItem.id === id)

  if (!item) {
    const product = findProduct(id)
    product.quantity = 1
    cart.push(product)

    addToCartDOM(product)
  } else {
    const newAmount = updateQuantity(id)
    const product = cartItemsDOM.querySelector(
      `.cart-item[data-id="${id}"] .cart-item-amount`
    )
    product.textContent = newAmount
  }

  displayTotalPrice()
  displayTotalQuantity()

  setStorageItem('cart', cart)
  openCart()
}

const updateQuantity = (id, type = 'increase') => {
  let newAmount
  cart = cart.map(product => {
    if (product.id === id) {
      newAmount =
        type === 'increase' ? product.quantity + 1 : product.quantity - 1
      // newAmount = Math.max(1, newAmount)
      product.quantity = newAmount
    }
    return product
  })
  return newAmount
}

const displayTotalPrice = () => {
  const total = cart.reduce(
    (acc, curr) => (acc += curr.price * curr.quantity),
    0
  )
  cartTotalDOM.textContent = `Total : ${formatPrice(total)}`
}

const displayTotalQuantity = () => {
  const total = cart.reduce((acc, curr) => (acc += curr.quantity), 0)
  cartItemCountDOM.textContent = total
}

const displayTotalItems = () => {
  cart.forEach(product => addToCartDOM(product))
}

const setupFunctionality = () => {
  cartItemsDOM.addEventListener('click', e => {
    const list = [
      'cart-item-remove-btn',
      'cart-item-increase-btn',
      'cart-item-decrease-btn',
    ]

    if (!list.includes(e.target.className)) return

    const parent = e.target.parentElement.parentElement
    const id = parent.dataset.id

    // remove
    if (e.target.classList.contains(list[0])) {
      cart = cart.filter(product => product.id !== id)
      cartItemsDOM.removeChild(parent)
    }

    // increase
    if (e.target.classList.contains(list[1])) {
      const newAmount = updateQuantity(id)
      e.target.nextElementSibling.textContent = newAmount
    }

    // decrease
    if (e.target.classList.contains(list[2])) {
      const newAmount = updateQuantity(id, 'decrease')

      if (newAmount < 1) {
        cart = cart.filter(product => product.id !== id)
        cartItemsDOM.removeChild(parent)
      } else {
        e.target.previousElementSibling.textContent = newAmount
      }
    }

    setStorageItem('cart', cart)
    displayTotalPrice()
    displayTotalQuantity()
  })
}

const init = () => {
  displayTotalPrice()
  displayTotalQuantity()
  displayTotalItems()
  setupFunctionality()
}

init()
