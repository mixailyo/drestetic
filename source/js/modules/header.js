function header() {
  let headerMenu = document.querySelector('.header__menu');
  let headerBurger = document.querySelector('.header__burger');
  let headerMenuClose = document.querySelector('.header__menu-close');

  if (headerMenu) {
    headerBurger.addEventListener('click', () => {
      headerMenu.classList.add('header__menu--is-opened')
    })

    headerMenuClose.addEventListener('click', () => {
      headerMenu.classList.remove('header__menu--is-opened')
    })
  }
}

export {header}