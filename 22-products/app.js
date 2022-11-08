const url = 'https://course-api.com/javascript-store-products'

const productsDOM = document.querySelector('.products-center')

const fetchProducts = async () => {
  productsDOM.innerHTML = `<div class="loading"></div>`

  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error.message)
    productsDOM.innerHTML = `<p class="error">there was an error.</p>`
  }
}

const displayProducts = list => {
  if (!list) return

  const products = list
    .map(product => {
      const { id } = product
      const { name: title, price } = product.fields
      const { url: image } = product.fields.image[0]
      const formatPrice = price / 100

      return `
        <a href="./product.html?id=${id}" class="single-product">
            <img
                src="${image}"
                alt="${title}"
                class="single-product-img img"
            />
            <footer>
                <h5 class="name">${title}</h5>
                <span class="price">$${formatPrice}</span>
            </footer>
        </a>`
    })
    .join('')

  productsDOM.innerHTML = `<div class="products-container">${products}</div>`
}

const start = async () => {
  const data = await fetchProducts()
  displayProducts(data)
}

start()
