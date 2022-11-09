const setDrink = section => {
  section.addEventListener('click', e => {
    const id = e.target.closest('article').dataset.id
    localStorage.setItem('id', id)
  })
}

export default setDrink
