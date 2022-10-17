// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const openModalBtn = document.querySelector('.modal-btn')
const modal = document.querySelector('.modal-overlay')
const closeModalBtn = document.querySelector('.close-btn')

openModalBtn.addEventListener('click', e => {
  modal.classList.toggle('open-modal')
})

closeModalBtn.addEventListener('click', e => {
  modal.classList.toggle('open-modal')
})

modal.addEventListener('click', e => {
  if (!e.target.classList.contains('modal-overlay')) return
  modal.classList.toggle('open-modal')
})
