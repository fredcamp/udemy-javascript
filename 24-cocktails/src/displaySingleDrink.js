import get from './getElement.js'
import { removeLoading } from './toggleLoading.js'

const drinkDOM = get('.single-drink')

const displaySingleDrink = ({ drinks }) => {
  const [drink] = drinks

  const {
    strDrinkThumb: image,
    strDrink: name,
    strInstructions: description,
  } = drink

  const ingredients = Object.entries(drink).filter(
    ([key, value]) => key.toLowerCase().includes('ingredient') && value
  )

  drinkDOM.innerHTML = `
    <img src="${image}" alt="${name}" class="drink-img" />
      <article class="drink-info">
        <h2 class="drink-name">${name}</h2>
        <p class="drink-description">${description}</p>
        <ul class="drink-ingredients">
            ${ingredients
              .map(
                ([, item]) =>
                  `<li><i class="far fa-check-square"></i> ${item}</li>`
              )
              .join('')}
        </ul>
        <a href="./index.html" class="btn">all cocktails</a>
      </article>
      `

  removeLoading()
}

export default displaySingleDrink
