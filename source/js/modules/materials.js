function materials() {
  let materialsSlider = document.querySelector('.materials .section__slider');

  if (materialsSlider && document.documentElement.clientWidth > 767) {
    const swiper = new Swiper(materialsSlider, {
      loop: true,
      slidesPerView: 4,
      spaceBetween: 37,

      navigation: {
        nextEl: materialsSlider.querySelector('.swiper-navigation__btn--next'),
        prevEl: materialsSlider.querySelector('.swiper-navigation__btn--prev'),
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
          slidesPerView: 4,
          spaceBetween: 37
        }
      }
    });
  }
}

export {materials};
