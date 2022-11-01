import articles from './data.js'

const btn = document.querySelector('.btn')
const section = document.querySelector('.articles')

const createPosts = post => {
  const { title, date, length, snippet } = post
  const formatDate = moment()
    .month(date.getMonth())
    .date(date.getDate())
    .year(date.getFullYear())
    .format('MMMM Do, YYYY')

  return `
    <article class="post">
      <h2>${title}</h2>
      <div class="post-info">
        <span>${formatDate}</span>
        <span>${length} min read</span>
      </div>
      <p>${snippet}</p>
    </article>
    `
}

window.addEventListener('DOMContentLoaded', e => {
  section.innerHTML = articles.map(article => createPosts(article)).join('')
})

btn.addEventListener('click', e => {
  document.documentElement.classList.toggle('dark-theme')
})
