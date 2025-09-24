// Animate #Inverted opacity from 0 to 1 on scroll
window.addEventListener('scroll', function() {
	const inverted = document.getElementById('Inverted');
	const video_bg = document.getElementById('video-background');
	if (!inverted) return;
	const scrollTop = window.scrollY || document.documentElement.scrollTop;
	const docHeight = window.innerHeight * 0.5;
	const progress = docHeight > 0 ? scrollTop / docHeight : 0;
	inverted.style.opacity = progress;
});

window.addEventListener('scroll', function() {
    const h1 = document.querySelector('h1');
    const scrollY = window.scrollY;
    const maxScroll = window.innerHeight * 0.9; // Ajusta según lo que necesites

    // Progreso de 0 a 1
    const progress = Math.min(scrollY / maxScroll, 1);

    // Controla el avance de la animación
    h1.style.animationPlayState = 'paused';
    h1.style.animationDelay = `-${progress}s`;
});