const toursSlider = document.querySelector('.tours__slider');
const buttonPrev = document.querySelector('.tours__button--prev');
const buttonNext = document.querySelector('.tours__button--next');

const initToursSlider = () => {
  if (toursSlider) {
    return new window.Swiper(toursSlider, {

      navigation: {
        prevEl: buttonPrev,
        nextEl: buttonNext,
      },

      loop: false,
      allowTouchMove: false,
      direction: 'horizontal',

      breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },

        768: {
          slidesPerView: 2,
          spaceBetween: 18,
        },

        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
    });
  }
  return null;
};

export {initToursSlider};
