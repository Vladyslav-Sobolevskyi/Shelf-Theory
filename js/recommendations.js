document.addEventListener('DOMContentLoaded', function () {
  const track = document.querySelector('.carousel-track');
  const viewport = document.querySelector('.carousel-viewport');
  const logos = Array.from(document.querySelectorAll('.carousel-logo'));
  const btnLeft = document.querySelector('.carousel-btn.left');
  const btnRight = document.querySelector('.carousel-btn.right');
  const indicatorsContainer = document.querySelector('.carousel-indicators');

  const visibleCount = 3; // сколько логотипов видно одновременно
  const total = logos.length;
  const pageCount = Math.max(1, Math.ceil(total / visibleCount));
  let currentPage = 0;

  // Генерируем индикаторы по количеству страниц
  indicatorsContainer.innerHTML = '';
  for (let i = 0; i < pageCount; i++) {
    const span = document.createElement('span');
    span.className = 'indicator' + (i === 0 ? ' active' : '');
    indicatorsContainer.appendChild(span);
  }
  const indicators = Array.from(document.querySelectorAll('.carousel-indicators .indicator'));

  function updateCarousel() {
    // Сдвигаем трек на ширину viewport
    const viewportWidth = viewport.offsetWidth;
    track.style.transform = `translateX(-${currentPage * viewportWidth}px)`;
    // Обновляем индикаторы
    indicators.forEach((el, idx) => {
      el.classList.toggle('active', idx === currentPage);
    });
    // Деактивируем кнопки на концах
    btnLeft.disabled = currentPage === 0;
    btnRight.disabled = currentPage === pageCount - 1;
  }

  btnLeft.addEventListener('click', function () {
    if (currentPage > 0) {
      currentPage--;
      updateCarousel();
    }
  });

  btnRight.addEventListener('click', function () {
    if (currentPage < pageCount - 1) {
      currentPage++;
      updateCarousel();
    }
  });

  indicators.forEach((el, idx) => {
    el.addEventListener('click', function () {
      currentPage = idx;
      updateCarousel();
    });
  });

  // При ресайзе пересчитать ширину
  window.addEventListener('resize', updateCarousel);

  // Инициализация
  updateCarousel();
}); 