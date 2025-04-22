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
const heroSection = document.getElementById("hero");
const aboutSection = document.getElementById("about-section");
const portfolioSection1 = document.getElementById("portfolio-section-1");
const portfolioSection2 = document.getElementById("portfolio-section-2");
const testimonialSection = document.getElementById("testimonial-section");
const footer = document.getElementById("footer");

const option = {
  threshold: [0, 0.25, 0.5, 0.75, 1],
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.id === "hero" && entry.intersectionRatio > 0.5) {
        heroSection.classList.add("pop-up");
        observer.unobserve(heroSection);
      }
      if (
        entry.target.id === "about-section" &&
        entry.intersectionRatio > 0.5
      ) {
        aboutSection.classList.add("fade-in");
        observer.unobserve(aboutSection);
      }
      if (
        entry.target.id === "portfolio-section-1" &&
        entry.intersectionRatio > 0.5
      ) {
        portfolioSection1.classList.add("fade-in");
        observer.unobserve(portfolioSection1);
      }
      if (
        entry.target.id === "portfolio-section-2" &&
        entry.intersectionRatio > 0.5
      ) {
        portfolioSection2.classList.add("fade-in");
        observer.unobserve(portfolioSection2);
      }
      if (
        entry.target.id === "testimonial-section" &&
        entry.intersectionRatio > 0.5
      ) {
        testimonialSection.classList.add("show");
        observer.unobserve(testimonialSection);
      }
      if (
        entry.target.id === "footer" &&
        entry.intersectionRatio > 0.5
      ) {
        footer.classList.add("show");
        observer.unobserve(footer);
      }
    }
  });
}, option);
observer.observe(heroSection);
observer.observe(aboutSection);
observer.observe(portfolioSection1);
observer.observe(portfolioSection2);
observer.observe(testimonialSection)
observer.observe(footer)
