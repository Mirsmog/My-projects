const burger = document.querySelector('#sidebarToggle')
const sidebar = document.querySelector('#sidebar')
const page = document.querySelector('#page')
const body = document.body;

burger.addEventListener('click', () => {
  body.classList.contains('show-sidebar') ? closeSidebar() : showSidebar()
})

function showSidebar() {
  let mask = document.createElement('div')
  mask.classList.add('page__mask')
  mask.addEventListener('click', closeSidebar)
  page.appendChild(mask)
  body.classList.add('show-sidebar')
}

function closeSidebar() {
  body.classList.remove('show-sidebar') 
  document.querySelector('.page__mask').remove()
}
