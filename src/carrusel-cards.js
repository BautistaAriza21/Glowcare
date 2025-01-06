const container = document.getElementById('carouselContainer');
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');

// Maneja el desplazamiento a la derecha
nextButton.addEventListener('click', () => {
  container.scrollBy({ left: 250, behavior: 'smooth' });
});

// Maneja el desplazamiento a la izquierda
prevButton.addEventListener('click', () => {
  container.scrollBy({ left: -250, behavior: 'smooth' });
});