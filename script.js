const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const scrollTopButton = document.querySelector(".scroll-top");

if (window.lucide) {
  window.lucide.createIcons();
}

navToggle?.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

window.addEventListener("scroll", () => {
  scrollTopButton?.classList.toggle("is-visible", window.scrollY > 500);
});

scrollTopButton?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
