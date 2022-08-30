function use() {
  let useSlider = document.querySelector('.use .section__slider');

  if (useSlider && document.documentElement.clientWidth > 767) {
    const swiper = new Swiper(useSlider, {
      loop: true,
      slidesPerView: 5,
      spaceBetween: 46,

      navigation: {
        nextEl: useSlider.querySelector('.swiper-navigation__btn--next'),
        prevEl: useSlider.querySelector('.swiper-navigation__btn--prev'),
      },

      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 18
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 3,
          spaceBetween: 22
        },
        // when window width is >= 640px
        1024: {
          slidesPerView: 4,
          spaceBetween: 26
        },
        // when window width is >= 640px
        1278: {
          slidesPerView: 5,
          spaceBetween: 46
        }
      }
    });
  }
}

export {use};
