function equipment() {
  let equipmentSlider = document.querySelector('.equipment .section__slider');

  if (equipmentSlider) {
    const swiper = new Swiper(equipmentSlider, {
      loop: true,
      slidesPerView: 5,
      spaceBetween: 26,

      navigation: {
        nextEl: equipmentSlider.querySelector('.swiper-navigation__btn--next'),
        prevEl: equipmentSlider.querySelector('.swiper-navigation__btn--prev'),
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
          spaceBetween: 26
        }
      }
    });
  }
}

export {equipment};
