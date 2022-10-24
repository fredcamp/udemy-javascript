// ****** SELECT ITEMS **********
const form = document.querySelector('.grocery-form')
const container = document.querySelector('.grocery-container')
const list = document.querySelector('.grocery-list')

const grocery = document.querySelector('#grocery')
const alert = document.querySelector('.alert')
const submitBtn = document.querySelector('.submit-btn')
const clearBtn = document.querySelector('.clear-btn')

// edit option
let editElement
let editFlag = false
let editId

let groceryItems = []

// ****** EVENT LISTENERS **********
form.addEventListener('submit', addItem)
clearBtn.addEventListener('click', clearItems)
window.addEventListener('DOMContentLoaded', setupItems)

// ****** FUNCTIONS **********
function addItem(e) {
  e.preventDefault()

  const value = grocery.value
  const id = new Date().getTime().toString()

  if (value && !editFlag) {
    createListItem(id, value)
    displayAlert('item added to the list', 'success')
    container.classList.add('show-container')

    addToLocalStorage(id, value)
    setBackToDefault()
  } else if (value && editFlag) {
    editElement.textContent = value

    displayAlert('item edited', 'success')
    editFromLocalStorage(editId, value)
    setBackToDefault()
  } else {
    displayAlert('please enter value', 'danger')
  }
}

function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement

  editElement = e.currentTarget.parentElement.previousElementSibling
  editFlag = true
  editId = element.dataset.id

  grocery.value = editElement.textContent
  submitBtn.textContent = 'edit'
}

function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement
  const id = element.dataset.id

  list.removeChild(element)
  if (list.children.length === 0) {
    container.classList.remove('show-container')
  }

  displayAlert('item removed', 'danger')
  setBackToDefault()
  removeFromLocalStorage(id)
}

function clearItems() {
  const items = document.querySelectorAll('.grocery-item')

  if (items.length > 0) {
    items.forEach(item => {
      list.removeChild(item)
    })
  }

  localStorage.removeItem('list')
  displayAlert('list items cleared', 'danger')
  container.classList.remove('show-container')
  setBackToDefault()
}

function displayAlert(text, action) {
  alert.textContent = text
  alert.classList.add(`alert-${action}`)

  setTimeout(() => {
    alert.textContent = ''
    alert.classList.remove(`alert-${action}`)
  }, 1000)
}

function setBackToDefault() {
  form.reset()
  editFlag = false
  editId = ''
  submitBtn.textContent = 'submit'
}

// ****** LOCAL STORAGE **********
function getLocalStorage() {
  return JSON.parse(localStorage.getItem('list')) || []
}

function addToLocalStorage(id, value) {
  const grocery = { id, value }
  const items = getLocalStorage()

  items.push(grocery)
  localStorage.setItem('list', JSON.stringify(items))
}

function removeFromLocalStorage(id) {
  let items = getLocalStorage()

  items = items.filter(item => item.id !== id)
  localStorage.setItem('list', JSON.stringify(items))
}

function editFromLocalStorage(id, value) {
  let items = getLocalStorage()

  items = items.map(item => {
    if (item.id === id) {
      item.value = value
    }
    return item
  })
  localStorage.setItem('list', JSON.stringify(items))
}

// ****** SETUP ITEMS **********
function setupItems() {
  let items = getLocalStorage()

  if (items.length > 0) {
    items.forEach(item => createListItem(item.id, item.value))

    container.classList.add('show-container')
  }
}

function createListItem(id, value) {
  const element = document.createElement('article')
  element.classList.add('grocery-item')
  element.dataset.id = id

  element.innerHTML = `
  <p class="title">${value}</p>
  <div class="btn-container">
    <button class="edit-btn">
      <i class="fas fa-edit"></i>
    </button>
    <button class="delete-btn">
      <i class="fas fa-trash"></i>
    </button>
  </div>
  `

  const editBtn = element.querySelector('.edit-btn')
  const deleteBtn = element.querySelector('.delete-btn')
  editBtn.addEventListener('click', editItem)
  deleteBtn.addEventListener('click', deleteItem)

  list.append(element)
}
