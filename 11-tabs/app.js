const btns = document.querySelectorAll('.tab-btn')
const contents = document.querySelectorAll('.content')

// my solution
// const showContent = id => {
//   contents.forEach(content => {
//     const contentId = content.getAttribute('id')

//     if (contentId !== id) {
//       content.classList.remove('active')
//     } else {
//       content.classList.add('active')
//     }
//   })
// }

// btns.forEach(btn => {
//   btn.addEventListener('click', e => {
//     const id = e.currentTarget.dataset.id

//     for (let item of btns) {
//       if (item !== btn) {
//         item.classList.remove('active')
//       }
//     }
//     e.currentTarget.classList.add('active')
//     showContent(id)
//   })
// })

// instructor solution
const about = document.querySelector('.about')

about.addEventListener('click', e => {
  const id = e.target.dataset.id
  if (!id) return

  btns.forEach(btn => {
    btn.classList.remove('active')
  })

  contents.forEach(content => {
    content.classList.remove('active')
  })

  const element = document.getElementById(id)
  e.target.classList.add('active')
  element.classList.add('active')
})

btns[0].click()
