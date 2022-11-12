const result = document.querySelector('.results')
const form = document.querySelector('.form')
const input = document.querySelector('.form-input')

const fetchPages = async query => {
  const url = 'https://en.wikipedia.org/w/api.php'
  const params = {
    action: 'query',
    list: 'search',
    srlimit: '20',
    format: 'json',
    srsearch: query,
  }

  result.innerHTML = `<div class="loading"></div>`

  let newURL = url + '?origin=*'
  Object.keys(params).forEach(key => {
    newURL += '&' + key + '=' + params[key]
  })

  try {
    const response = await fetch(newURL)
    if (!response.ok) {
      throw new Error(response.statusText)
    }

    const data = await response.json()
    return data.query.search
  } catch (error) {
    console.log(error)
    result.innerHTML = `<h4 class="error">there was an error...</h4>`
  }
}

const renderResults = list => {
  if (list.length < 1) {
    result.innerHTML = `<h4 class="error">sorry, no results matched. please try again.</h4>`
    return
  }

  const url = 'https://en.wikipedia.org/?curid='

  const cards = list
    .map(page => {
      const { pageid: id, snippet, title } = page

      return `
          <a href="${url + id}" target="_blank">
            <h4>${title}</h4>
            <p>${snippet}</p>
          </a>`
    })
    .join('')

  result.innerHTML = `<div class="articles">${cards}</div>`
  form.reset()
}

form.addEventListener('submit', async e => {
  e.preventDefault()

  const value = input.value.trim()
  if (!value) return

  const query = value.toLowerCase()
  const data = await fetchPages(query)
  renderResults(data)
})

input.focus()
