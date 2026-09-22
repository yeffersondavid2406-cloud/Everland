document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const menuBtns = document.querySelectorAll('.menu-btn');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentSlide = 0;

    // Función para cambiar slide
    function showSlide(index) {
        // Validar que el índice sea válido
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        
        // Ocultar todos los slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Desactivar todos los botones del menú
        menuBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Mostrar el slide seleccionado
        slides[index].classList.add('active');
        menuBtns[index].classList.add('active');
        currentSlide = index;
    }

    // Event listeners para los botones del menú
    menuBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            showSlide(index);
        });
    });

    // Event listeners para los botones siguiente/anterior
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            showSlide(currentSlide - 1);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            showSlide(currentSlide + 1);
        });
    }

    // Auto-rotación cada 5 segundos
    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);
});