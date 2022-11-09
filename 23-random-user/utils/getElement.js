const getElement = el => {
  const element = document.querySelector(el)

  if (!element) {
    throw new Error(`element: ${el} doesnt exist.`)
  }

  return element
}

export default getElement
