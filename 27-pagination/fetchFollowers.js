const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'

const section = document.querySelector('.section-title')

const fetchFollowers = async () => {
  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return await response.json()
  } catch (error) {
    console.log(error)
    section.innerHTML = `<h1>Something went wrong, please try again later.</h1>`
  }
}

export default fetchFollowers
