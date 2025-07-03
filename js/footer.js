document.addEventListener('DOMContentLoaded', function() {
    // Получаем все заголовки навигации в footer
    const navigationTitles = document.querySelectorAll('.footer .navigation-title');
    
    // Добавляем обработчики событий для каждого заголовка
    navigationTitles.forEach(function(title) {
        title.addEventListener('click', function() {
            // Проверяем, что мы на мобильном устройстве (ширина экрана <= 768px)
            if (window.innerWidth <= 768) {
                const navigationBlock = this.parentElement;
                
                // Закрываем все остальные блоки
                document.querySelectorAll('.footer .navigation-block').forEach(function(block) {
                    if (block !== navigationBlock) {
                        block.classList.remove('active');
                    }
                });
                
                // Переключаем состояние текущего блока
                navigationBlock.classList.toggle('active');
            }
        });
    });
    
    // Обработчик изменения размера окна
    window.addEventListener('resize', function() {
        // Если экран стал больше 768px, убираем активные классы
        if (window.innerWidth > 768) {
            document.querySelectorAll('.footer .navigation-block').forEach(function(block) {
                block.classList.remove('active');
            });
        }
    });
}); 