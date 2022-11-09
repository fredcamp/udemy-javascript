import get from './getElement.js'
import presentDrinks from './presentDrinks.js'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const form = get('.search-form')
const input = get('[name="drink"]')

form.addEventListener('submit', e => e.preventDefault())
form.addEventListener('input', e => {
  const value = input.value || 'a'
  presentDrinks(url + value)
})
