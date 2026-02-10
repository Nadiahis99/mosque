// Ayat rotation
const ayat = [
  "﴿ إِنَّمَا يَعْمُرُ مَسَاجِدَ اللَّهِ مَنْ آمَنَ بِاللَّهِ ﴾",
  "﴿ وَمَا تُقَدِّمُوا لِأَنْفُسِكُمْ مِنْ خَيْرٍ تَجِدُوهُ عِندَ اللَّهِ ﴾",
  "﴿ مَثَلُ الَّذِينَ يُنفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ ﴾"
];

let i = 0;
const ayahEl = document.getElementById("ayah");
ayahEl.innerText = ayat[0];

setInterval(() => {
  i = (i + 1) % ayat.length;
  ayahEl.innerText = ayat[i];
}, 6000);

// Slider placeholder
function prevSlide(){/* تكملة لاحقًا */}
function nextSlide(){/* تكملة لاحقًا */}

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
