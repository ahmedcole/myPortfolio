window.addEventListener("beforeUnload", () => {
  localStorage.setItem("scrollPosition", window.scrollY);
});

window.addEventListener("load", () => {
  let scrollPosition = localStorage.getItem("scrollPosition");
  if (scrollPosition) {
    window.scrollTo(0, scrollPosition);
  }
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("mouseenter", () => {
    document.querySelector("#active").classList.remove("active");
  });
  link.addEventListener("mouseleave", () => {
    document.querySelector("#active").classList.add("active");
  });
});
