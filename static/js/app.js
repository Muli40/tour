document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-links a');

  const setActiveLink = (href) => {
    // Remove "active" class from all links
    links.forEach(link => link.classList.remove('active'));

    // Add "active" to the matching link
    links.forEach(link => {
      if (link.getAttribute('href') === href) {
        link.classList.add('active');
      }
    });
  };

  // Restore active link from localStorage
  const activeHref = localStorage.getItem('activeLink');
  if (activeHref) {
    setActiveLink(activeHref);
  }

  // Add click event to each link
  links.forEach(link => {
    link.addEventListener('click', () => {
      const href = link.getAttribute('href');
      localStorage.setItem('activeLink', href);
      setActiveLink(href);
    });
  });


  //toggle bar
  const toggleBtn = document.querySelector('.toggle-bar');
  const navLinks = document.querySelector('.nav-links');

  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show-links');
    
  });
});