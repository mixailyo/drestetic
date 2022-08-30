function banner() {
  const swiper = new Swiper('.banner', {
    loop: true,

    spaceBetween: 30,
  
    pagination: {
      el: '.swiper-pagination',
    }
  });
}

export {banner}