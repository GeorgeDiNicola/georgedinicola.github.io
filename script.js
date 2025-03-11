document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(".fade-in, .slide-in");
  
    const options = {
      threshold: 0.2 /* once x% of the item is in view */
    };
  
    const observer = new IntersectionObserver((entries, observerRef) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add "in-view" class to trigger CSS animation
          entry.target.classList.add("in-view");
          // Once animated, unobserve to avoid re-triggering
          observerRef.unobserve(entry.target);
        }
      });
    }, options);
  
    animatedElements.forEach(el => {
      observer.observe(el);
    });
  });