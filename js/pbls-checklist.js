document.addEventListener('DOMContentLoaded', function() {

  document.querySelector('.section-pbls__legend-top').addEventListener('click', function() {
    this.classList.toggle('is-close-cat')
    document.querySelectorAll('.section-pbls__check-item').forEach(function(rect) {
      let chekList = rect.getElementsByClassName('section-pbls__check')
      //console.log( chekList[0].checked)
      if (!chekList[0].checked){
        rect.classList.toggle('is-close')
      }
    })
  })
})
