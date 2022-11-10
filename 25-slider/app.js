import people from './data.js'

const container = document.querySelector('.slide-container')
const prev = document.querySelector('.prev-btn')
const next = document.querySelector('.next-btn')

container.innerHTML = people
  .map((person, index) => {
    const { img, job, name, text } = person

    let position = 'next'
    if (index === 0) {
      position = 'active'
    }
    if (index === people.length - 1) {
      position = 'last'
    }

    return `
        <article class="slide ${position}">
            <img
            src="${img}"
            alt="${name}"
            class="img"
            />
            <h4>${name}</h4>
            <p class="title">${job}</p>
            <p class="text">${text}</p>
            <div class="quote-icon">
            <i class="fas fa-quote-right"></i>
            </div>  
        </article>`
  })
  .join('')

const startSlider = type => {
  const active = document.querySelector('.active')
  const last = document.querySelector('.last')
  let next = ''

  active.classList.remove('active')
  last.classList.remove('last')

  if (type === 'prev') {
    next = last.previousElementSibling || container.lastElementChild
    next.classList.replace('next', 'last')

    active.classList.add('next')
    last.classList.add('active')
    return
  }

  next = active.nextElementSibling || container.firstElementChild
  next.classList.replace('next', 'active')

  active.classList.add('last')
  last.classList.add('next')
}

next.addEventListener('click', () => {
  startSlider()
})

prev.addEventListener('click', () => {
  startSlider('prev')
})
