const btn = document.querySelector('.btn')
const result = document.querySelector('.result')

const url = 'https://icanhazdadjoke.com'

btn.addEventListener('click', e => {
  fetchDataJoke()
})

const fetchDataJoke = async () => {
  result.textContent = 'Loading...'

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'User-Agent': 'learning app',
      },
    })
    if (!response.ok) {
      throw new Error('error')
    }
    const data = await response.json()
    result.textContent = data.joke
  } catch (error) {
    console.log(error.message)
    result.textContent = 'There was an error...'
  }
}

fetchDataJoke()
