import { getElement } from './utils.js'

const sidebar = getElement('.sidebar-overlay')
const toggleNav = getElement('.toggle-nav')
const closeBtn = getElement('.sidebar-close')

const toggleSidebar = () => {
  sidebar.classList.toggle('show')
}

toggleNav.addEventListener('click', toggleSidebar)
closeBtn.addEventListener('click', toggleSidebar)
