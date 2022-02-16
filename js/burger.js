document.addEventListener('DOMContentLoaded', function() {
  const btnMenu = document.querySelector('#burger');
  const menu = document.querySelector('#nav');
  const btnMenuRect = document.querySelectorAll('.header__burger-rect');
  const toggleMenu = function() {
      menu.classList.toggle('is-menu-open');
      btnMenuRect.forEach(function(rect) {rect.classList.toggle('is-burger')})
  }

  btnMenu.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleMenu();
  });

  document.addEventListener('click', function(e) {
      const target = e.target;
      const its_menu = target == menu;
      const its_btnMenu = target == btnMenu;
      const menu_is_active = menu.classList.contains('is-menu-open');

      if (!its_menu && !its_btnMenu && menu_is_active) {
          toggleMenu();
      }
  });
})
