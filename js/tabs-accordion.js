document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.section-catalog__link-artist').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.artist_path
      var flag = false
      // console.log(path)

      document.querySelectorAll('.section-catalog__info').forEach(function(tabContent) {
        tabContent.classList.remove('section-catalog__info-active')
        if (tabContent.matches(`[data-artist-target="${path}"]`)) {
          flag = true
        }
      })

      if (flag) {
        document.querySelector(`[data-artist-target="${path}"]`).classList.add('section-catalog__info-active')
      } else {
        document.querySelector(`[data-artist-target="none"]`).classList.add('section-catalog__info-active')
      }



      document.querySelectorAll('.section-catalog__link-artist').forEach(function(tabBtn) {
        tabBtn.classList.remove('section-catalog__link-artist-active')
      })
      document.querySelector(`[data-artist_path="${path}"]`).classList.add('section-catalog__link-artist-active')
    })
  })
})
