import get from './getElement.js'
import { showLoading } from './toggleLoading.js'

const title = get('.title')

const fetchDrinks = async url => {
  showLoading()

  try {
    const response = await fetch(url)
    const data = await response.json()

    return data
  } catch (error) {
    console.log(error)
    title.textContent = 'Something went wrong, please try again later.'
  }
}

export default fetchDrinks
