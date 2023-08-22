const trainigSlider = document.querySelector('.training__slider');
const buttonPrev = document.querySelector('.training__button--prev');
const buttonNext = document.querySelector('.training__button--next');

const initTrainigSlider = () => {
  if (trainigSlider) {
    return new window.Swiper(trainigSlider, {

      navigation: {
        prevEl: buttonPrev,
        nextEl: buttonNext,
      },

      loop: false,
      allowTouchMove: false,
      direction: 'horizontal',

      breakpoints: {
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        },

        768: {
          slidesPerView: 3,
          spaceBetween: 30,
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

export {initTrainigSlider};
