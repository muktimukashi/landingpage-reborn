
(() => {
  const navbar = document.querySelector(".rl-navbar");
  const menuToggle = document.querySelector(".rl-menu-toggle");
  const navMenu = document.querySelector(".rl-nav-menu");

  if (!navbar) {
    return;
  }

  const updateNavbar = () => {
    navbar.classList.toggle("is-scrolled", window.scrollY > 8);
  };

  updateNavbar();
  window.addEventListener("scroll", updateNavbar, { passive: true });

  if (!menuToggle || !navMenu) {
    return;
  }

  const closeMenu = () => {
    navbar.classList.remove("is-menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Buka menu");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = navbar.classList.toggle("is-menu-open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Tutup menu" : "Buka menu");
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 700) {
      closeMenu();
    }
  });
})();
