let navMain = document.querySelector('.header__nav');
let navToggle = document.querySelector('.header__nav-toggle');

const initNavToggles = () => {
  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('header__nav--closed')) {
      navMain.classList.remove('header__nav--closed');
      navMain.classList.add('header__nav--opened');
    } else {
      navMain.classList.add('header__nav--closed');
      navMain.classList.remove('header__nav--opened');
    }
  });
};

export {initNavToggles};
