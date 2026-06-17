
(() => {
  const navbar = document.querySelector(".rl-navbar");

  if (!navbar) {
    return;
  }

  const updateNavbar = () => {
    navbar.classList.toggle("is-scrolled", window.scrollY > 8);
  };

  updateNavbar();
  window.addEventListener("scroll", updateNavbar, { passive: true });
})();
