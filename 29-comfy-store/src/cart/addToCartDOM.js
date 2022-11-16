import { formatPrice, getElement } from '../utils.js'

const cartItemsDOM = getElement('.cart-items')

const addToCartDOM = product => {
  const { id, image, name, price, quantity } = product

  const article = document.createElement('article')
  article.classList.add('cart-item')
  article.dataset.id = id
  article.innerHTML = `
    <img src="${image}" alt="${name}" class="cart-item-img" />
    <div>
        <h4 class="cart-item-name">${name}</h4>
        <p class="cart-item-price">${formatPrice(price)}</p>
        <button class="cart-item-remove-btn" >remove</button>
    </div>
    <div>
        <button class="cart-item-increase-btn" >
            <i class="fas fa-chevron-up" style="pointer-events: none"></i>
        </button>
        <p class="cart-item-amount">${quantity}</p>
        <button class="cart-item-decrease-btn" >
            <i class="fas fa-chevron-down" style="pointer-events: none"></i>
        </button>
    </div>`

  cartItemsDOM.append(article)
}

export default addToCartDOM
