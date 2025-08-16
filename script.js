// JavaScript for search functionality
document.getElementById('search-bar').addEventListener('input', function(event) {
    const searchTerm = event.target.value.toLowerCase();
    const items = document.querySelectorAll('.portfolio-item');
  
    items.forEach(function(item) {
      const title = item.querySelector('h3').textContent.toLowerCase();
      const description = item.querySelector('p').textContent.toLowerCase();
  
      if (title.includes(searchTerm) || description.includes(searchTerm)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
  

  // JavaScript to toggle the mobile menu visibility
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('nav ul');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
