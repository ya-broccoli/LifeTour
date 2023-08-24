const navMain = document.querySelector('.header__nav');
const navToggle = document.querySelector('.header__nav-toggle');
const navLinks = document.querySelectorAll('.header__nav-link');
const overlay = document.querySelector('.overlay');

const initNavToggles = () => {

  const closeMenu = () => {
    navMain.classList.remove('header__nav--opened');
    navMain.classList.add('header__nav--closed');
    window.scrollLock.enableScrolling();
    overlay.classList.remove('is-active');
    document.removeEventListener('click', clickOutsideMenu);
    document.removeEventListener('keydown', escapePress);
  };

  const clickOutsideMenu = (event) => {
    if (!navMain.contains(event.target) && !navToggle.contains(event.target)) {
      closeMenu();
    }
  };

  const escapePress = (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  };

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('header__nav--opened')) {
      closeMenu();
    } else {
      navMain.classList.remove('header__nav--closed');
      navMain.classList.add('header__nav--opened');
      window.scrollLock.disableScrolling();
      overlay.classList.add('is-active');
      document.addEventListener('click', clickOutsideMenu);
      document.addEventListener('keydown', escapePress);
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });
};

export {initNavToggles};
