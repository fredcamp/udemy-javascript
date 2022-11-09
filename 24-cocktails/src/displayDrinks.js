import get from './getElement.js'
import { removeLoading } from './toggleLoading.js'

const title = get('.title')
const drinksDOM = get('.section-center')

const displayDrinks = ({ drinks }) => {
  if (!drinks) {
    title.textContent = 'Sorry, No drinks matched with your search.'
    drinksDOM.innerHTML = null
    removeLoading()
    return
  }

  title.textContent = ''
  drinksDOM.innerHTML = drinks
    .map(drink => {
      const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink

      return `
          <a href="./drink.html">
            <article class="cocktail" data-id="${id}">
              <img src="${image}" alt="${name}" />
              <h3>${name}</h3>
            </article>
          </a>`
    })
    .join('')
  removeLoading()

  return drinksDOM
}

export default displayDrinks
