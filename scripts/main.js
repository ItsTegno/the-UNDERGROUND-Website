window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const maxScroll = window.innerHeight * 1; // Ajusta según lo que necesites

    // Progreso de 0 a 1
    const progress = Math.min(scrollY / maxScroll, 1);

    // Desenfoque dinámico del fondo
    const bg = document.getElementById('background_blur');

    if (bg) {
        const blurAmount = progress * 10; // 0px a 10px de blur
        bg.style.filter = `blur(${blurAmount}px)`;

        const parallax = scrollY * -0.5; // Ajusta el factor para más/menos efecto
        bg.style.transform = `translateY(${parallax}px)`;
    }
});

window.addEventListener("load", () => {
      document.body.classList.add("loaded");
    });

    // Al salir, hacemos fade-out
    document.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const url = link.href;
        document.body.classList.remove("loaded");
        setTimeout(() => {
          window.location.href = url;
        }, 800); // mismo tiempo que el transition
      });
    });