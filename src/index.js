import menuItemTpl from './templates/menu-item.hbs';
import menuListTpl from './templates/menu-list.hbs';
import menuList from './menu.json';
import './styles.css';

const checkboxRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('.body');
const menuBoxRef = document.querySelector('ul.js-menu');

const menuMarcup = menuListTpl(menuList);
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const localTheme = localStorage.getItem('theme');
const localcheckboxValue = localStorage.getItem('checkboxValue');
addLocalTheme();

checkboxRef.addEventListener('change', changeTheme);

menuBoxRef.insertAdjacentHTML('beforeend', menuMarcup);

// Второй вариант  создания и добавления меню
// const menuMarcup = createMenu(menuList);
// function createMenu(menuList) {
//   return menuList.map(menuItemTpl).join('');
// }
function changeTheme(event) {
  event.preventDefault();
  const checkBoxValue = event.target.checked;

  if (checkBoxValue === true) {
    localStorage.setItem('theme', Theme.DARK);
    localStorage.setItem('checkboxValue', event.target.checked);

    bodyRef.classList.add(Theme.DARK);
    bodyRef.classList.remove(Theme.LIGHT);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
    localStorage.setItem('checkboxValue', event.target.checked);

    bodyRef.classList.add(Theme.LIGHT);
    bodyRef.classList.remove(Theme.DARK);
  }
}
// function changeTheme(event) {
//   event.preventDefault();

//   const checkBoxValue = event.target.checked;
//   // console.log(checkBoxValue);
//   if (checkBoxValue === true) {
//     localStorage.setItem('theme', Theme.DARK);
//     localStorage.setItem('checkboxValue', event.target.checked);
//     checkboxRef.setAttribute('checked', 'true');
//   } else {
//     localStorage.setItem('theme', Theme.LIGHT);
//     localStorage.setItem('checkboxValue', event.target.checked);
//     checkboxRef.setAttribute('checked', 'false');
//   }

//   const newlocalTheme = localStorage.getItem('theme');

//   if (newlocalTheme === Theme.DARK) {
//     bodyRef.classList.add(Theme.DARK);
//     bodyRef.classList.remove(Theme.LIGHT);
//   } else {
//     bodyRef.classList.add(Theme.LIGHT);
//     bodyRef.classList.remove(Theme.DARK);
//   }
// }
console.log(localcheckboxValue);
function addLocalTheme() {
  if (localTheme) {
    bodyRef.classList.add(localTheme);

    // checkboxRef.checked;
    // console.log(checkboxRef.checked);
  }
}

// function changeTheme(event) {
//   event.preventDefault();
//   // console.log(event.target);

//   // bodyRef.classList.add('light-theme');
//   const checkedCheckbox =
//     checkboxRef.getAttribute('checked') === 'true' || false;
//   bodyRef.classList.toggle('light-theme');
//   checkboxRef.setAttribute('checked', !checkedCheckbox);
//   bodyRef.classList.toggle('dark-theme');
// }
