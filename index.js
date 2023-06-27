function toggleMobileMenu() {
    var menu = document.getElementById('mobileMenu');
    var hamburgerMenu = document.querySelector('.hamburger-menu');
    var closeIcon = document.querySelector('.close-icon');
    var header = document.getElementById('header');
    

    if (menu.style.display === 'block') {
      menu.style.display = 'none';
      hamburgerMenu.style.display = 'block';
      closeIcon.style.display = 'none';
      header.style.paddingTop = '40px';
    } else {
      menu.style.display = 'block';
      hamburgerMenu.style.display = 'none';
      closeIcon.style.display = 'block';
      header.style.paddingTop = '80px'; // Adjust the value as needed
    }
  }