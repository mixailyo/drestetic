function preheader() {
  let preheader = document.querySelector('.preheader');

  if (preheader) {
    let preheaderClose = preheader.querySelector('.preheader__close');

    preheaderClose?.addEventListener('click', () => {
      preheader.classList.add('preheader--closed');
    })
  }
}

export {preheader};
