import {iosChecker} from '../../utils/ios-checker';

const gallerySlider = document.querySelector('.gallery__slider');
const buttonPrev = document.querySelector('.gallery__button--prev');
const buttonNext = document.querySelector('.gallery__button--next');

const initGallerysSlider = () => {
  if (gallerySlider) {
    return new window.Swiper(gallerySlider, {

      slidesPerView: 'auto',
      navigation: {
        prevEl: buttonPrev,
        nextEl: buttonNext,
      },

      loop: false,
      allowTouchMove: iosChecker(),
      direction: 'horizontal',
    });
  }
  return null;
};

export {initGallerysSlider};
