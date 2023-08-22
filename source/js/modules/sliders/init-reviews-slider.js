const reviewsSlider = document.querySelector('.reviews__slider');
const buttonPrev = document.querySelector('.reviews__button--prev');
const buttonNext = document.querySelector('.reviews__button--next');

const initReviewsSlider = () => {
  if (reviewsSlider) {
    return new window.Swiper(reviewsSlider, {

      navigation: {
        prevEl: buttonPrev,
        nextEl: buttonNext,
      },

      loop: false,
      allowTouchMove: false,
      direction: 'horizontal',

      breakpoints: {
        1200: {
          slidesPerView: 'auto',
          spaceBetween: 30,
        },

        768: {
          slidesPerView: 'auto',
          spaceBetween: 30,
          initialSlide: 0,
        },

        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      },
    });
  }
  return null;
};

export {initReviewsSlider};
