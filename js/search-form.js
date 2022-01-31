
document.addEventListener('DOMContentLoaded', function() {
  const btnSearch = document.querySelector('.search-btn-open');
  const btnSubmit = document.querySelector('.search-btn-submit');
  const btnClose = document.querySelector('.search-form__close-btn');
  const inputSearch = document.querySelector('.search-form__input');
  const formSearch = document.querySelector('.search-form');


  btnSearch.addEventListener('click', () => {
    //rectClose.forEach(function(rect) {rect.classList.add('is-active-close')});
    btnClose.classList.add('search-form__input--is-active');
    inputSearch.classList.add('search-form__input--is-active');
    formSearch.classList.add('search-form__input--is-active');
    btnSearch.classList.add('search-form__input--is-active');
    btnSubmit.classList.add('search-form__input--is-active');
  });

  btnClose.addEventListener('click', () => {
    //rectClose.forEach(function(rect) {rect.classList.remove('is-active-close')})
    btnClose.classList.remove('search-form__input--is-active');
    inputSearch.classList.remove('search-form__input--is-active');
    formSearch.classList.remove('search-form__input--is-active');
    btnSearch.classList.remove('search-form__input--is-active');
    btnSubmit.classList.remove('search-form__input--is-active');
  });

})
