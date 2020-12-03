import menuItemTpl from './templates/menu-item.hbs';
import menuListTpl from './templates/menu-list.hbs';
import menuList from './menu.json';
import './styles.css';

const checkboxRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('.body');
const menuBoxRef = document.querySelector('ul.js-menu');

const menuMarcup = menuListTpl(menuList);

menuBoxRef.insertAdjacentHTML('beforeend', menuMarcup);

// console.log(checkboxRef);
// console.log(bodyRef);

// Второй вариант
// const menuMarcup = createMenu(menuList);
// function createMenu(menuList) {
//   return menuList.map(menuItemTpl).join('');
// }

checkboxRef.addEventListener('change', changeTheme);

function changeTheme(event) {
  //   console.log(event.target);
  bodyRef.classList.add('light-theme');
  const checkedCheckbox =
    checkboxRef.getAttribute('checked') === 'true' || false;
  checkboxRef.setAttribute('checked', !checkedCheckbox);
  bodyRef.classList.toggle('dark-theme');
}
