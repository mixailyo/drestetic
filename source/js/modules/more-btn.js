function moreBtn() {
  let moreBtns = document.querySelectorAll('.more-btn');

  if (moreBtns.length) {
    moreBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        btn.closest('section').classList.add('is-more')
      })
    })
  }
}

export {moreBtn}