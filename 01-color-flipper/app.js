const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025']

const btn = document.querySelector('#btn')
const span = document.querySelector('.color')

btn.addEventListener('click', e => {
  const randomNumber = Math.floor(Math.random() * colors.length)

  document.body.style.background = colors[randomNumber]
  span.textContent = colors[randomNumber]
})
