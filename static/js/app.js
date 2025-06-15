document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-links a');

  // Restore active link from localStorage
  const activeHref = localStorage.getItem('activeLink');
  links.forEach(link => {
    if (link.getAttribute('href') === activeHref) {
      link.classList.add('active');
    }
  });

  // Add click event
  links.forEach(link => {
    link.addEventListener('click', () => {
      localStorage.setItem('activeLink', link.getAttribute('href'));
    });
  });
});
