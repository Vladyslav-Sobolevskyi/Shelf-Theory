document.addEventListener('DOMContentLoaded', function() {
  // Бургер-меню
  const burger = document.querySelector('.burger');
  const navList = document.querySelector('.nav-list');
  if (burger && navList) {
    burger.addEventListener('click', function() {
      navList.classList.toggle('nav-list--open');
      burger.classList.toggle('burger--active');
    });
  }
  // Отключаем выпадающие подменю на мобильных
  if (window.innerWidth <= 767) {
    document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
      menu.style.display = 'none';
    });
  }

  // Dropdown для мобильных
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  dropdownToggles.forEach(function(toggle) {
    toggle.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const parent = toggle.parentElement;
        const menu = parent.querySelector('.dropdown-menu');
        if (menu) {
          menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        }
      }
    });
  });
}); 