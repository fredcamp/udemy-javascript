import { formatPrice } from './utils.js'
import { addToCart } from './cart/setupCart.js'

const display = (products, element, filters) => {
  element.innerHTML = products
    .map(product => {
      const { id, image, name, price } = product

      return `
      <article class="product">
        <div class="product-container">
            <img
                src="${image}"
                alt="${name}"
                class="product-img img"
            />
            <div class="product-icons">
                <a href="./product.html?id=${id}" class="product-icon">
                <i class="fas fa-search"></i>
                </a>
                <button class="product-cart-btn product-icon" data-id="${id}">
                <i class="fas fa-shopping-cart" style="pointer-events: none;"></i>
                </button>
            </div>
        </div>
        <footer>
        <p class="product-name">${name}</p>
        <h4 class="product-price">${formatPrice(price)}</h4>
        </footer>
    </article>`
    })
    .join('')

  if (filters) return

  element.addEventListener('click', e => {
    if (!e.target.classList.contains('product-cart-btn')) return

    const id = e.target.dataset.id
    addToCart(id)
  })
}

export default display
