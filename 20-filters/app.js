import products from './products.js'

const productsContainer = document.querySelector('.products-container')
let filteredProducts = [...products]

// display products
const displayProducts = () => {
  if (filteredProducts.length < 1) {
    productsContainer.innerHTML = `<strong>Sorry, no results found.</strong>`
    return
  }

  productsContainer.innerHTML = filteredProducts
    .map(({ id, title, image, price }) => {
      return `
        <article class="product" data-id="${id}">
            <img
            src="${image}"
            alt="product img"
            class="product-img img"
            />
            <footer>
            <h5 class="product-name">${title}</h5>
            <span class="product-price">$${price}</span>
            </footer>
        </article>
    `
    })
    .join('')
}
displayProducts()

// filter products - search
const form = document.querySelector('.input-form')
const search = document.querySelector('.search-input')

form.addEventListener('input', e => {
  const query = search.value.toLowerCase()

  filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(query)
  )
  displayProducts()
})

// filter product - buttons
const companyContainer = document.querySelector('.companies')

// my solution
// const companies = products.reduce(
//   (acc, curr) => {
//     if (!acc.includes(curr.company)) {
//       acc.push(curr.company)
//     }
//     return acc
//   },
//   ['all']
// )

const companies = ['all', ...new Set(products.map(product => product.company))]

companyContainer.innerHTML = companies
  .map(
    company =>
      `<button class="company-btn" data-id="${company}">${company}</button>`
  )
  .join('')

companyContainer.addEventListener('click', e => {
  if (!e.target.classList.contains('company-btn')) return

  const company = e.target.dataset.id

  if (company !== 'all') {
    filteredProducts = products.filter(product => product.company === company)
  } else {
    filteredProducts = [...products]
  }

  form.reset()
  displayProducts()
})
