const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

const btn = document.querySelector('#btn')
const span = document.querySelector('.color')

const generateRandomHexColor = () => {
  let result = '#'
  for (let i = 0; i < 6; i++) {
    const random = Math.floor(Math.random() * hex.length)
    result += hex[random]
  }
  return result
}

btn.addEventListener('click', e => {
  const hexColor = generateRandomHexColor()

  document.body.style.background = hexColor
  span.textContent = hexColor
})
