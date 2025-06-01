
function openModal() {
  document.getElementById("modal").classList.remove("hidden");
  document.getElementById("modal").classList.add("flex");
}
function closeModal() {
  document.getElementById("modal").classList.add("hidden");
  document.getElementById("modal").classList.remove("flex");
}

 const toggleBtn = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');

  toggleBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');

    // Toggle between hamburger and close icon
    if (menuIcon.classList.contains('fa-bars')) {
      menuIcon.classList.remove('fa-bars');
      menuIcon.classList.add('fa-xmark');
    } else {
      menuIcon.classList.remove('fa-xmark');
      menuIcon.classList.add('fa-bars');
    }
  });
