function toggleMobileMenu() {
  var menu = document.getElementById('mobileMenu');
  var hamburgerMenu = document.querySelector('.hamburger-menu');
  var closeIcon = document.querySelector('.close-icon');
  var header = document.getElementById('header');

  if (menu.classList.contains('open')) {
    menu.classList.remove('open');
    hamburgerMenu.style.display = 'block';
    closeIcon.style.display = 'none';
    header.style.paddingTop = '40px';
  } else {
    menu.classList.add('open');
    hamburgerMenu.style.display = 'none';
    closeIcon.style.display = 'block';
    header.style.paddingTop = '80px';
  }
}

function scrollToSection(sectionId) {
  var section = document.querySelector(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}
