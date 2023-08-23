const advantagesSlider = document.querySelector('.advantages__slider');
const buttonPrev = document.querySelector('.advantages__button--prev');
const buttonNext = document.querySelector('.advantages__button--next');

const createAdvantagessSlider = () => {
  if (advantagesSlider) {
    return new window.Swiper(advantagesSlider, {

      navigation: {
        prevEl: buttonPrev,
        nextEl: buttonNext,
      },

      loop: true,
      direction: 'horizontal',

      breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },

        768: {
          slidesPerView: 'auto',
          spaceBetween: 30,
          autoplay: false,
        },
      },
    });
  }
  return null;
};

const initAdvantagesSlider = () => {
  let swiper = null;
  let desktop = window.matchMedia('(min-width: 1200px)');

  if (desktop.matches) {
    swiper = createAdvantagessSlider();
  }

  window.addEventListener('resize', () => {
    if (desktop.matches) {
      if (!swiper) {
        swiper = createAdvantagessSlider();
      }
    } else {
      if (swiper) {
        swiper.destroy();
        swiper = null;
      }
    }
  });
};

export {initAdvantagesSlider};
