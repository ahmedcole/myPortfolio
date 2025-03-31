document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("mouseenter", () => {
    document.querySelector("#active").classList.remove("active");
  });
  link.addEventListener("mouseleave", () => {
    document.querySelector("#active").classList.add("active");
  });
});
