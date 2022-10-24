const slides = document.querySelectorAll('.slide')
const prevBtn = document.querySelector('.prevBtn')
const nextBtn = document.querySelector('.nextBtn')

let current = 0

window.addEventListener('DOMContentLoaded', e => {
  slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`
  })
  prevBtn.style.display = 'none'
})

nextBtn.addEventListener('click', e => {
  current++
  moveSlide()
})

prevBtn.addEventListener('click', e => {
  current--
  moveSlide()
})

function moveSlide() {
  //   if (current < 0) {
  //     current = slides.length - 1
  //   }
  //   if (current > slides.length - 1) {
  //     current = 0
  //   }

  if (current > 0) {
    prevBtn.style.display = 'block'
  } else {
    prevBtn.style.display = 'none'
  }

  if (current < slides.length - 1) {
    nextBtn.style.display = 'block'
  } else {
    nextBtn.style.display = 'none'
  }

  slides.forEach(slide => {
    slide.style.transform = `translateX(${current * -100}%)`
  })
}
