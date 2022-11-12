import fetchFollowers from './fetchFollowers.js'
import displayFollowers from './displayFollowers.js'
import paginate from './paginate.js'
import displayButtons from './displayButtons.js'

const container = document.querySelector('.container')
const title = document.querySelector('.section-title h1')
const btnContainer = document.querySelector('.btn-container')

let index = 0
let pages = []

const setupUI = () => {
  displayFollowers(pages[index])
  displayButtons(btnContainer, pages, index)
  document.documentElement.scrollTop = 0
}

const containerHeight = () => {
  container.style.minHeight = `${container.scrollHeight}px`
}

const init = async () => {
  const followers = await fetchFollowers()
  title.textContent = 'pagination'
  pages = paginate(followers)
  setupUI()
  containerHeight()
}

window.addEventListener('load', () => {
  init()
})

btnContainer.addEventListener('click', e => {
  if (!e.target.className.includes('btn')) return

  const target = e.target.classList
  let newIndex = index

  if (target.contains('prev-btn')) {
    newIndex = Math.max(0, --newIndex)
  } else if (target.contains('next-btn')) {
    newIndex = Math.min(++newIndex, pages.length - 1)
  } else {
    newIndex = parseInt(e.target.dataset.index)
  }

  if (index === newIndex) return
  index = newIndex
  setupUI()
})
