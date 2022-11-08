const productDOM = document.querySelector('.product')
const url = `https://course-api.com/javascript-store-single-product`

const fetchProduct = async () => {
  productDOM.innerHTML = `<h4 class="product-loading">Loading...</h4>`

  try {
    const searchParams = new URLSearchParams(window.location.search)
    const id = searchParams.get('id')

    const response = await fetch(`${url}?id=${id}`)
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
    productDOM.innerHTML = `<p class="error">there was a problem loading the product. Please try again later.</p>`
  }
}

const displayProduct = product => {
  if (!product) return

  const { id } = product
  const { colors, company, description, name, price, image } = product.fields
  const { url: img } = image[0]
  const formatPrice = price / 100

  document.title = name.charAt(0).toUpperCase() + name.slice(1)

  const productItem = `
    <div class="product-wrapper" data-id="${id}">
        <img src="${img}" alt="${name}" class="img" />
        <div class="product-info">
          <h3>${name}</h3>
          <h5>${company}</h5>
          <span>$${formatPrice}</span>

          <div class="colors">
            ${colors
              .map(
                color =>
                  `<span class="product-color" style="background: ${color}"></span>`
              )
              .join('')}
          </div>
          <p>${description}</p>
          <button class="btn">add to cart</button>
        </div>
    </div>
    `
  productDOM.innerHTML = productItem
}

const start = async () => {
  const data = await fetchProduct()
  displayProduct(data)
}

start()
