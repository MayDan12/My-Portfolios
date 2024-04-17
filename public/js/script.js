"use strict";

document.getElementById("year").innerHTML = new Date().getFullYear();

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".navbar-head");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// smooth scroll
const allScrollLinks = document.querySelectorAll(
  ".scroll:link, .btnn, .about-btn"
);

allScrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // scroll back to top of page
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // scroll back to other links
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
    } else if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    // rootMargin: "-100px",
  }
);
obs.observe(sectionhomeEl);


// const sectionhomeEl = document.querySelector(".section-home");

// // Function to check if an element is in the viewport
// function isInViewport(element) {
//     const rect = element.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }

// // Function to handle scroll event
// function handleScroll() {
//     if (!isInViewport(sectionhomeEl)) {
//         document.body.classList.add("sticky");
//     } else {
//         document.body.classList.remove("sticky");
//     }
// }

// // Add scroll event listener
// window.addEventListener("scroll", handleScroll);

// // Initial check on page load
// handleScroll();



function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();

// "use strict";
// const btnNavEl = document.querySelector(".btn-mobile-nav");
// const headerEl = document.querySelector(".navbar-head");

// btnNavEl.addEventListener("click", function () {
//   headerEl.classList.toggle("nav-open");
// });

// // smooth scroll
// const alllinkEl = document.querySelectorAll(".scroll:link, .btnn, .about-btn");
// alllinkEl.forEach(function (link) {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     const href = link.getAttribute("href");
//     // ... rest of your logic
//   });

//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     const href = link.getAttribute("href");
//     //scrol back to top of page
//     if (href === "#") {
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });
//     }

//     // scroll bac to other links
//     if (href !== "#" && href.startsWith("#")) {
//       const sectionEl = document.querySelector(href);
//       sectionEl.scrollIntoView({ behavior: "smooth" });
//     }

//     // close mobile navigation buttons
//     if (link.classList.contains("nav-btn")) {
//       headerEl.classList.toggle("nav-open");
//     }
//   });
// });

// ////////////////////////////////////////////////////////////////
// // sticky navigation
// ////////////////////////////////////////////////////////////////
// const sectionhomeEl = document.querySelector(".section-home");

// const obs = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];
//     if (ent.isIntersecting === false) {
//       document.body.classList.add("sticky");
//     }
//     if (ent.isIntersecting === true) {
//       document.body.classList.remove("sticky");
//     }
//   },
//   {
//     root: null,
//     threshold: 0,
//     rootMargin: "-75px",
//   }
// );
// obs.observe(sectionhomeEl);

// function reveal() {
//   var reveals = document.querySelectorAll(".reveal");
//   for (var i = 0; i < reveals.length; i++) {
//     var windowHeight = window.innerHeight;
//     var elementTop = reveals[i].getBoundingClientRect().top;
//     var elementVisible = 150;
//     if (elementTop < windowHeight - elementVisible) {
//       reveals[i].classList.add("active");
//     } else {
//       reveals[i].classList.remove("active");
//     }
//   }
// }

// window.addEventListener("scroll", reveal);

// // To check the scroll position on page load
// reveal();
