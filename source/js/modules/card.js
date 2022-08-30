function card() {
  let cardPreviewSlider = document.querySelector('.card__preview-slider');
  let cardMainSlider = document.querySelector('.card__main-slider');

  if (cardPreviewSlider) {
    const swiper1 = new Swiper(cardPreviewSlider, {
      direction: document.documentElement.clientWidth > 767 ? 'vertical' : 'horizontal',
      slidesPerView: 3,
      spaceBetween: 20,
    
      navigation: {
        nextEl: cardPreviewSlider.querySelector('.card__preview-slider-navigation-button--next'),
        prevEl: cardPreviewSlider.querySelector('.card__preview-slider-navigation-button--prev'),
      },
    });

    const swiper2 = new Swiper(cardMainSlider, {
      spaceBetween: 20,

      thumbs: {
        swiper: swiper1,
      },
    });
  }
}

export {card}