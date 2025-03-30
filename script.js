// Mobile Navigation Toggle
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    navLinks.classList.remove('active'); // close mobile menu on click
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Responsive Image Gallery
const images = document.querySelectorAll('.gallery img');
images.forEach(image => {
  image.addEventListener('click', () => {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    modal.style.display = 'block';
    modalImg.src = image.src;
  });
});

document.getElementById('closeModal').addEventListener('click', () => {
  document.getElementById('imageModal').style.display = 'none';
});
