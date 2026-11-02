/* =====================================
   PARTICLES BACKGROUND
===================================== */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 30,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },

    "color": {
      "value": "#ffffff"
    },

    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#ffffff"
      }
    },

    "opacity": {
      "value": 0.3,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },

    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 10,
        "size_min": 0.1,
        "sync": false
      }
    },

    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false
    }
  },

  "retina_detect": true
});


/* =====================================
   MOBILE NAVIGATION
===================================== */

function toggleNav() {

  const mobileNav = document.getElementById('mobile-nav');
  const hamburger = document.getElementById('hamburger');

  mobileNav.classList.toggle('active');
  hamburger.classList.toggle('is-open');

}


/* =====================================
   PAGE CLOSING ANIMATION
===================================== */

document.addEventListener("DOMContentLoaded", function () {

  const links = document.querySelectorAll("a");

  links.forEach(link => {

    link.addEventListener("click", function (event) {

      const destination = link.getAttribute("href");

      // Ignore empty links, external links, and email links
      if (
        !destination ||
        destination.startsWith("#") ||
        destination.startsWith("mailto:") ||
        destination.startsWith("tel:") ||
        link.target === "_blank" ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      // Only animate navigation to another page
      const currentPage = window.location.pathname.split("/").pop();

      if (destination === currentPage) {
        return;
      }

      event.preventDefault();

      document.body.classList.add("page-exit");

      setTimeout(() => {
        window.location.href = destination;
      }, 400);

    });

  });

});