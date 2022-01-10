document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.section-news__btn-more').addEventListener('click', function () {
    document.querySelectorAll('.section-news__item').forEach(function(newsContent) {
      newsContent.classList.remove('is-active')
      newsContent.classList.remove('is-active-1024')
      newsContent.classList.remove('is-active-768')
      newsContent.classList.add('is-active')
    })
    document.querySelector('.section-news__btn-more').classList.remove('is-active')
  })
})
