//using selectors inside the element
// traversing the dom

const questions = document.querySelectorAll('.question')

questions.forEach(question => {
  question.addEventListener('click', e => {
    for (let item of questions) {
      if (item !== e.currentTarget) {
        item.classList.remove('show-text')
      }
    }
    e.currentTarget.classList.toggle('show-text')
  })
})
