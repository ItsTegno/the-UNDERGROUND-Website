window.addEventListener('scroll', function() {
    const h1 = document.querySelector('h1');
    const scrollY = window.scrollY;
    const maxScroll = window.innerHeight * 0.9; // Ajusta según lo que necesites

    // Progreso de 0 a 1
    const progress = Math.min(scrollY / maxScroll, 1);

    // Controla el avance de la animación
    h1.style.animationPlayState = 'paused';
    h1.style.animationDelay = `-${progress}s`;

    // Desenfoque dinámico del fondo
    const bg = document.getElementById('background_blur');
    if (bg) {
        const blurAmount = progress * 10; // 0px a 10px de blur
        bg.style.filter = `blur(${blurAmount}px)`;
    }
});