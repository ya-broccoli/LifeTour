const heroSlider = document.querySelector('.hero__slider');
const heroSliderPagination = document.querySelector('.swiper-pagination');

const initHeroSlider = () => {
  if (heroSlider) {
    return new window.Swiper(heroSlider, {

      pagination: {
        el: heroSliderPagination,
        clickable: true,
      },

      slidesPerView: 1,
      spaceBetween: 0,
      speed: 500,
      allowTouchMove: true,
      breakpoints: {
        1200: {
          allowTouchMove: false,
        },
      },
    });
  }

  return null;
};

export {initHeroSlider};
