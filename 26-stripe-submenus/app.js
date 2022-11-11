import data from './data.js'

const toggleBtn = document.querySelector('.toggle-btn')
const closeBtn = document.querySelector('.close-btn')
const sidebarWrapper = document.querySelector('.sidebar-wrapper')
const sidebar = document.querySelector('.sidebar-links')
const linkBtns = document.querySelectorAll('.link-btn')
const submenu = document.querySelector('.submenu')
const hero = document.querySelector('.hero')
const nav = document.querySelector('.nav')

const toggleButton = () => {
  sidebarWrapper.classList.toggle('show')
}

closeBtn.addEventListener('click', toggleButton)

toggleBtn.addEventListener('click', () => {
  sidebar.innerHTML = data
    .map(item => {
      const { page, links } = item
      return `
        <article>
          <h4>${page}</h4>
          <div class="sidebar-sublinks">
            ${links
              .map(item => {
                const { url, icon, label } = item
                return `
                <a href="${url}">
                  <i class="${icon}"></i>${label}
                </a>
              `
              })
              .join('')}
          </div>
        </article>
        `
    })
    .join('')

  toggleButton()
})

Array.from(linkBtns).forEach(btn => {
  btn.addEventListener('mouseover', e => {
    const { left, width, top, height } = e.currentTarget.getBoundingClientRect()
    const text = e.currentTarget.textContent

    const content = data.find(({ page }) => page === text)

    if (!content) return
    const { page, links } = content

    submenu.style.left = `${left + width / 2}px`
    submenu.style.top = `${top + height}px`

    submenu.innerHTML = `
      <section>
        <h4>${page}</h4>
        <div class="submenu-center col-${links.length}">
          ${links
            .map(item => {
              const { icon, label, url } = item

              return `
              <a href="${url}">
                <i class="${icon}"></i>${label}
              </a>
            `
            })
            .join('')}
        </div>
      </section>
    `
    submenu.classList.add('show')
  })
})

hero.addEventListener('mouseover', e => {
  submenu.classList.remove('show')
})

nav.addEventListener('mouseover', e => {
  if (e.target.classList.contains('link-btn')) return

  submenu.classList.remove('show')
})
