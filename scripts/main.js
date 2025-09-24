// Animate #Inverted opacity from 0 to 1 on scroll
window.addEventListener('scroll', function() {
	const inverted = document.getElementById('Inverted');
	if (!inverted) return;
	const scrollTop = window.scrollY || document.documentElement.scrollTop;
	const docHeight = window.innerHeight * 0.25;
	const progress = docHeight > 0 ? scrollTop / docHeight : 0;
	inverted.style.opacity = progress;
});