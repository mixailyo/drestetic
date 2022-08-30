function methods() {
  let methodsSlider = document.querySelector('.methods__slider');

  if (methodsSlider) {
    const swiper = new Swiper(methodsSlider, {
      loop: true,
      slidesPerView: 4,
      spaceBetween: 110,
    
      navigation: {
        nextEl: methodsSlider.querySelector('.swiper-navigation__btn--next'),
        prevEl: methodsSlider.querySelector('.swiper-navigation__btn--prev'),
      },

      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        // when window width is >= 640px
        1024: {
          slidesPerView: 4,
          spaceBetween: 110
        },
      }
    });
  }
  
}

export {methods}