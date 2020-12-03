import menuItemTpl from './templates/menu-item.hbs';
import menuList from './menu.json';
import './styles.css';

const checkboxRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('.body');
const menuBoxRef = document.querySelector('ul.js-menu');

const menuMarcup = createMenu(menuList);

menuBoxRef.insertAdjacentHTML('beforeend', menuMarcup);

// console.log(checkboxRef);
// console.log(bodyRef);

function createMenu(menuList) {
  return menuList.map(menuItemTpl).join('');
}

checkboxRef.addEventListener('change', changeTheme);

function changeTheme(event) {
  //   console.log(event.target);
  bodyRef.classList.add('light-theme');
  const checkedCheckbox =
    checkboxRef.getAttribute('checked') === 'true' || false;
  checkboxRef.setAttribute('checked', !checkedCheckbox);
  bodyRef.classList.toggle('dark-theme');
}
