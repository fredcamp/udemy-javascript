import { getElement } from '../utils.js'
import display from '../displayProducts.js'

const companyDOM = getElement('.companies')
const productsDOM = getElement('.products-container')
const searchInput = getElement('.search-input')

const setupCompanies = store => {
  //   const companies = store.reduce(
  //     (acc, curr) => {
  //       const { company } = curr
  //       if (!acc.includes(company)) acc.push(company)
  //       return acc
  //     },
  //     ['all']
  //   )

  const companies = ['all', ...new Set(store.map(product => product.company))]

  companyDOM.innerHTML = companies
    .map(company => {
      return `
          <button class="company-btn" data-id="${company}">${company}</button>`
    })
    .join('')

  companyDOM.addEventListener('click', e => {
    if (!e.target.classList.contains('company-btn')) return

    const target = e.target.dataset.id
    searchInput.value = ''

    if (target === 'all') {
      display(store, productsDOM, true)
      return
    }

    const filteredProducts = store.filter(product => product.company === target)

    display(filteredProducts, productsDOM, true)
  })
}

export default setupCompanies
