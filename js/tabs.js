document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.section-catalog__tabs-btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      console.log(path)

      document.querySelectorAll('.section-catalog__tab-content').forEach(function(tabContent) {
        tabContent.classList.remove('section-catalog__tab-content-active')
      })
        document.querySelector(`[data-target="${path}"]`).classList.add('section-catalog__tab-content-active')

      document.querySelectorAll('.section-catalog__tabs-btn').forEach(function(tabBtn) {
        tabBtn.classList.remove('section-catalog__tabs-btn-active')
      })
      document.querySelector(`[data-path="${path}"]`).classList.add('section-catalog__tabs-btn-active')
    })
  })
})
