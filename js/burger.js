document.addEventListener('DOMContentLoaded', function() {

  document.querySelector('#burger').addEventListener('click', function() {
    //document.querySelector('#menu').classList.toggle('is-active')
    document.querySelector('#nav').classList.toggle('is-menu-open')
    document.querySelectorAll('.burger__rect').forEach(function(rect) {
      rect.classList.toggle('is-burger')
    })
  })
})
