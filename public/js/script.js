"use strict";
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".navbar-head");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// smooth scroll
const alllinkEl = document.querySelectorAll(".scroll:link, .btnn, .about-btn");
alllinkEl.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    //scrol back to top of page
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // scroll bac to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // close mobile navigation buttons
    if (link.classList.contains("nav-btn")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

////////////////////////////////////////////////////////////////
// sticky navigation
////////////////////////////////////////////////////////////////
const sectionhomeEl = document.querySelector(".section-home");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-75px",
  }
);
obs.observe(sectionhomeEl);
