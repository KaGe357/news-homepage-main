const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const mobileNav = document.getElementById('mobile-nav');

menuIcon.addEventListener('click', () => {
  mobileNav.style.display = 'block'; 
  menuIcon.style.display = 'none'; 
  closeIcon.style.display = 'block'; 
});

closeIcon.addEventListener('click', () => {
  mobileNav.style.display = 'none'; 
  closeIcon.style.display = 'none'; 
  menuIcon.style.display = 'block'; 
});
