const images = document.querySelectorAll('.carousel-images img');
let current = 0;

function showImage(index) {
  images.forEach(img => img.classList.remove('active'));
  images[index].classList.add('active');
}

document.querySelector('.next').addEventListener('click', () => {
  current = (current + 1) % images.length;
  showImage(current);
});

document.querySelector('.prev').addEventListener('click', () => {
  current = (current - 1 + images.length) % images.length;
  showImage(current);
});
