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

document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelectorAll(".line").forEach((line) => {
    line.classList.toggle("change");
  });

  document.querySelector(".nav-list-2").classList.toggle("nav-list-2-toggle");
  // .classList.toggle(".nav-list-2-toggle");
});

let scrollTimer;

window.addEventListener("scroll", () => {
  document.querySelector(".nav-bar").classList.add("add-nav-js");

  clearTimeout(scrollTimer);
  scrollTimer = setTimeout(() => {
    document.querySelector(".nav-bar").classList.remove("add-nav-js");
  }, 500);
  
});
