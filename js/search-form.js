
document.addEventListener('DOMContentLoaded', function() {
  const btnSeaech = document.querySelector('.search-form__btn');
  const btnClose = document.querySelector('.search-form__close-btn');
  const rectClose = document.querySelectorAll('.search-form__rect');
  const inputSearch = document.querySelector('.search-form__input');


  btnSeaech.addEventListener('click', () => {
    rectClose.forEach(function(rect) {rect.classList.add('is-active-close')});
    inputSearch.classList.add('search-form__input--is-active');
  });

  btnClose.addEventListener('click', () => {
    rectClose.forEach(function(rect) {rect.classList.remove('is-active-close')})
    inputSearch.classList.remove('search-form__input--is-active');
  });

})
