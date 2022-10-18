// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.querySelector('#date')
date.textContent = new Date().getFullYear()

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links-container')

navToggle.addEventListener('click', e => {
  const linksHeight = links.scrollHeight

  if (!links.style.height) {
    links.style.height = linksHeight + 'px'
  } else {
    links.style.height = null
  }
})

// ********** fixed navbar ************
const nav = document.querySelector('#nav')
const topLink = document.querySelector('.top-link')

window.addEventListener('scroll', e => {
  const navHeight = nav.scrollHeight

  if (window.scrollY > navHeight) {
    nav.classList.add('fixed-nav')
  } else {
    nav.classList.remove('fixed-nav')
  }

  if (window.scrollY > 500) {
    topLink.classList.add('show-link')
  } else {
    topLink.classList.remove('show-link')
  }
})

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link')

scrollLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault()

    const id = e.currentTarget.getAttribute('href').slice(1)
    const element = document.getElementById(id).offsetTop

    const navHeight = nav.getBoundingClientRect().height
    const containerHeight = links.getBoundingClientRect().height
    const fixedNav = nav.classList.contains('fixed-nav')

    let position = element - navHeight
    if (!fixedNav) {
      position = position - navHeight
    }
    if (navHeight > 82) {
      position = position + containerHeight
    }

    window.scrollTo({ left: 0, top: position })
    links.style.height = null
  })
})
