document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.section-news__btn-more').addEventListener('click', function () {
    document.querySelectorAll('.section-news__item').forEach(function(newsContent) {
      newsContent.classList.remove('is-active')
      newsContent.classList.add('is-active')
    })
    document.querySelector('.section-news__btn-wrapper').classList.remove('is-active')
  })
})
