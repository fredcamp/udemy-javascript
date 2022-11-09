import displayDrink from './src/displaySingleDrink.js'
import fetchDrinks from './src/fetchDrinks.js'

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
const id = localStorage.getItem('id')

window.addEventListener('DOMContentLoaded', async () => {
  const data = await fetchDrinks(URL + id)

  if (!data) {
    window.location.replace('index.html')
  } else {
    displayDrink(data)
  }
})
