// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Carousel Slider
let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;

setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlides;
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}, 3000);

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for contacting us!');
  contactForm.reset();
});

// Display Service Info
function showService(service) {
  const servicesData = JSON.parse(document.getElementById('servicesData').textContent);
  alert(servicesData[service]);
}
