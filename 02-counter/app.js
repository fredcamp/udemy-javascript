const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

let counter = 0

btns.forEach(btn => {
  btn.addEventListener('click', e => {
    const target = e.target.textContent
    let counterColor = ''

    switch (target) {
      case 'decrease':
        counter--
        break

      case 'increase':
        counter++
        break

      default:
        counter = 0
        break
    }

    if (counter > 0) {
      counterColor = 'green'
    } else if (counter < 0) {
      counterColor = 'red'
    } else {
      counterColor = document.body.style.color
    }

    value.textContent = counter
    value.style.color = counterColor
  })
})
