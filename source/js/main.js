import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {initNavToggles} from './modules/nav-toggles/init-nav-toggles';
import {initVideo} from './modules/hero/init-video';
import {initToursSlider} from './modules/sliders/init-tours-slider.js';
import {initTrainigSlider} from './modules/sliders/init-training-slider';
import {initReviewsSlider} from './modules/sliders/init-reviews-slider';
import {initAdvantagesSlider} from './modules/sliders/init-advantages-slider';
import {initGallerysSlider} from './modules/sliders/init-gallery-slider';
import {initHeroSlider} from './modules/sliders/init-hero-slider';
import {initLeaflet} from './modules/leaflet/init-leaflet';
import {getHeight} from './modules/hero/indent.js';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
    initNavToggles();
    initVideo();
    initHeroSlider();
    initToursSlider();
    initTrainigSlider();
    initReviewsSlider();
    initAdvantagesSlider();
    initGallerysSlider();
    initLeaflet();
    getHeight();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
