function getElement(selection) {
  const element = document.querySelector(selection)
  if (element) {
    return element
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  )
}

function Gallery(element) {
  this.container = element
  this.list = Array.from(element.querySelectorAll('.img'))

  this.modal = getElement('.modal')
  this.modalImg = getElement('.main-img')
  this.modalImgText = getElement('.image-name')
  this.modalImages = getElement('.modal-images')
  this.closeBtn = getElement('.close-btn')
  this.prevBtn = getElement('.prev-btn')
  this.nextBtn = getElement('.next-btn')
  // let self = this

  // bind functions
  this.closeModal = this.closeModal.bind(this)
  this.nextImage = this.nextImage.bind(this)
  this.prevImage = this.prevImage.bind(this)
  this.selectImage = this.selectImage.bind(this)

  // container event
  this.container.addEventListener(
    'click',
    function (e) {
      if (e.target.classList.contains('img')) {
        this.openModal(e.target, this.list)
      }
    }.bind(this)
  )
}

Gallery.prototype.openModal = function (selectedImage, list) {
  this.setMainImage(selectedImage)
  this.modalImages.innerHTML = list
    .map(image => {
      return `<img src="${image.src}" title="${image.title}" alt="${
        image.alt
      }" data-id="${image.dataset.id}" class="${
        image.dataset.id === selectedImage.dataset.id
          ? 'modal-img selected'
          : 'modal-img'
      }">`
    })
    .join('')

  this.closeBtn.addEventListener('click', this.closeModal)
  this.nextBtn.addEventListener('click', this.nextImage)
  this.prevBtn.addEventListener('click', this.prevImage)
  this.modalImages.addEventListener('click', this.selectImage)

  this.modal.classList.add('open')
  document.body.style.overflow = 'hidden'
}

Gallery.prototype.closeModal = function () {
  this.closeBtn.removeEventListener('click', this.closeModal)
  this.nextBtn.removeEventListener('click', this.nextImage)
  this.prevBtn.removeEventListener('click', this.prevImage)
  this.modalImages.removeEventListener('click', this.selectImage)

  this.modal.classList.remove('open')
  document.body.style.overflow = 'auto'
}

Gallery.prototype.nextImage = function () {
  const selected = this.modalImages.querySelector('.selected')
  const next = selected.nextElementSibling || this.modalImages.firstElementChild

  selected.classList.remove('selected')
  next.classList.add('selected')
  this.setMainImage(next)
}

Gallery.prototype.prevImage = function () {
  const selected = this.modalImages.querySelector('.selected')
  const prev =
    selected.previousElementSibling || this.modalImages.lastElementChild

  selected.classList.remove('selected')
  prev.classList.add('selected')
  this.setMainImage(prev)
}

Gallery.prototype.selectImage = function (e) {
  if (!e.target.classList.contains('modal-img')) return

  const selected = this.modalImages.querySelector('.selected')
  const target = e.target

  selected.classList.remove('selected')
  target.classList.add('selected')
  this.setMainImage(target)
}

Gallery.prototype.setMainImage = function (selectedImage) {
  this.modalImg.src = selectedImage.src
  this.modalImgText.textContent = selectedImage.title
}

const nature = new Gallery(getElement('.nature'))
const city = new Gallery(getElement('.city'))
