import { themeAtom } from '../../store/store'

export function addButtonsListeners() {
  function toggleTheme(e) {
    document.documentElement.setAttribute('data-theme', e.target.name)
    localStorage.setItem('theme', e.target.name)
    themeAtom.set(e.target.name)
  }
  const buttons = document.querySelectorAll('button.theme')
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => toggleTheme(e))
  })
}

export function addListItemListeners() {
  const dropdownContent = document.querySelectorAll('.dropdown-content>li')
  dropdownContent.forEach((element) => {
    element.addEventListener('click', () => {
      document.activeElement.blur()
    })
  })
}