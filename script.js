// Slider
let slides = document.querySelectorAll('.slide');
let current = 0;
function nextSlide() {
  slides[current].classList.remove('active');
  current = (current+1) % slides.length;
  slides[current].classList.add('active');
}
function prevSlide() {
  slides[current].classList.remove('active');
  current = (current-1+slides.length) % slides.length;
  slides[current].classList.add('active');
}
setInterval(nextSlide, 5000);

// Progress Bar
let percentage = 10; // نسبة افتراضية
let progressBar = document.getElementById('progressBar');
let progressLabel = document.getElementById('progressLabel');
progressBar.style.width = percentage + '%';
progressLabel.textContent = percentage + '%';
