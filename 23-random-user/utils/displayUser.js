import get from './getElement.js'
import removeActive from './removeActive.js'

const img = get('.user-img')
const title = get('.user-title')
const value = get('.user-value')
const btns = Array.from(document.querySelectorAll('.icon'))

const displayUser = person => {
  img.src = person.image
  title.textContent = 'My name is'
  value.textContent = person.name

  removeActive(btns)
  btns[0].classList.add('active')

  btns.forEach(btn => {
    btn.addEventListener('click', e => {
      const label = e.currentTarget.dataset.label
      removeActive(btns)

      title.textContent = `My ${label} is`
      value.textContent = person[label]
      e.currentTarget.classList.add('active')
    })
  })
}

export default displayUser
