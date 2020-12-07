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
  event.preventDefolt();
  console.log(event.target);

  bodyRef.classList.add('light-theme');
  const checkedCheckbox =
    checkboxRef.getAttribute('checked') === 'true' || false;
  bodyRef.classList.toggle('light-theme');
  checkboxRef.setAttribute('checked', !checkedCheckbox);
  bodyRef.classList.toggle('dark-theme');
}

// import menuItemTpl from './templates/menu-item.hbs';
// import menuListTpl from './templates/menu-list.hbs';
// import menuList from './menu.json';
// import './styles.css';

// const checkboxRef = document.querySelector('#theme-switch-toggle');
// const bodyRef = document.querySelector('.body');
// const menuBoxRef = document.querySelector('ul.js-menu');

// const menuMarcup = menuListTpl(menuList);
// const Theme = {
//   LIGHT: 'light-theme',
//   DARK: 'dark-theme',
// };

// // addLocalTheme();

// checkboxRef.addEventListener('change', changeTheme);

// menuBoxRef.insertAdjacentHTML('beforeend', menuMarcup);

// // console.log(localTheme);
// // console.dir(bodyRef);
// // console.log(bodyRef.classList.value);
// // Второй вариант  создания и добавления меню
// // const menuMarcup = createMenu(menuList);
// // function createMenu(menuList) {
// //   return menuList.map(menuItemTpl).join('');
// // }

// function changeTheme(event) {
//   // console.log(event.target.checked);
//   event.preventDefault();

//   // console.log(localTheme);
//   const checkBoxValue = event.target.checked;

//   if (checkBoxValue === true) {
//     // console.log(event.target.checked);
//     localStorage.setItem('theme', Theme.DARK);
//   } else {
//     // console.log(event.target.checked);
//     localStorage.setItem('theme', Theme.LIGHT);
//   }
//   const localTheme = localStorage.getItem('theme');
//   if (localTheme === Theme.DARK) {
//     console.log(localTheme);
//     // console.log(Theme.DARK);
//     bodyRef.classList.add(Theme.DARK);
//     bodyRef.classList.remove(Theme.LIGHT);
//   } else {
//     console.log(localTheme);
//     bodyRef.classList.add(Theme.LIGHT);
//     bodyRef.classList.remove(Theme.DARK);
//   }
// }
// // function addLocalTheme() {
// //   if (localTheme) {
// //     bodyRef.classList.add(localTheme);
// //   }
// // }
