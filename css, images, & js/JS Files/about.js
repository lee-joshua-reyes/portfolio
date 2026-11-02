document.addEventListener("DOMContentLoaded", () => {

  // MOBILE NAVIGATION
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("show");
      });
    });

    document.addEventListener("click", (event) => {
      if (
        !menuToggle.contains(event.target) &&
        !navLinks.contains(event.target)
      ) {
        navLinks.classList.remove("show");
      }
    });
  }

  // PARTICLES BACKGROUND
  if (window.particlesJS) {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 45,
          density: {
            enable: true,
            value_area: 900
          }
        },

        color: {
          value: "#e86ffb"
        },

        shape: {
          type: "circle"
        },

        opacity: {
          value: 0.25,
          random: true
        },

        size: {
          value: 2,
          random: true
        },

        line_linked: {
          enable: true,
          distance: 150,
          color: "#e86ffb",
          opacity: 0.12,
          width: 1
        },

        move: {
          enable: true,
          speed: 1.2,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out"
        }
      },

      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab"
          },
          onclick: {
            enable: false
          },
          resize: true
        },

        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 0.3
            }
          }
        }
      },

      retina_detect: true
    });
  }

});