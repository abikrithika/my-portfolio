function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  const body = document.body;

  navMenu.classList.toggle("show");
  body.classList.toggle("menu-open");
}
