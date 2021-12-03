document.addEventListener('DOMContentLoaded', function() {
  const anchors = document.querySelectorAll('.scroll-to')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (ev) {
      ev.preventDefault()

      const blockID = anchor.getAttribute('href')

      document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
})
