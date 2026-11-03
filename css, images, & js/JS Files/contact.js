
// ==============================
// PAGE TRANSITIONS
// ==============================

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("page-open");

  setTimeout(() => {
    document.body.classList.remove("page-open");
  }, 700);
});


// ==============================
// INTERNAL PAGE NAVIGATION
// ==============================

document.querySelectorAll('a[href]').forEach(link => {
  link.addEventListener("click", function(event) {
    const href = this.getAttribute("href");

    if (
      !href ||
      href.startsWith("#") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      this.target === "_blank" ||
      this.hostname !== window.location.hostname
    ) {
      return;
    }

    event.preventDefault();

    document.body.classList.add("page-exit");

    setTimeout(() => {
      window.location.href = href;
    }, 400);
  });
});


// ==============================
// MOBILE NAVIGATION
// ==============================

const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobile-nav");

if (hamburger && mobileNav) {
  hamburger.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("show");

    hamburger.classList.toggle("active", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));
  });

  mobileNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("show");
      hamburger.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", event => {
    if (
      !mobileNav.contains(event.target) &&
      !hamburger.contains(event.target)
    ) {
      mobileNav.classList.remove("show");
      hamburger.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
    }
  });
}


// ==============================
// COPY CONTACT NUMBER
// ==============================

document.querySelectorAll(".copy-button").forEach(button => {
  button.addEventListener("click", async () => {
    const number = button.dataset.copy;
    const originalContent = button.innerHTML;

    try {
      await navigator.clipboard.writeText(number);
      showCopied(button, originalContent);

    } catch (error) {
      const temporaryInput = document.createElement("textarea");

      temporaryInput.value = number;
      temporaryInput.style.position = "fixed";
      temporaryInput.style.opacity = "0";

      document.body.appendChild(temporaryInput);
      temporaryInput.select();

      try {
        document.execCommand("copy");
        showCopied(button, originalContent);
      } catch (copyError) {
        button.innerHTML =
          '<i class="fa-solid fa-xmark"></i> Failed';

        setTimeout(() => {
          button.innerHTML = originalContent;
        }, 1600);
      }

      temporaryInput.remove();
    }
  });
});

function showCopied(button, originalContent) {
  button.innerHTML =
    '<i class="fa-solid fa-check"></i> Copied';

  button.classList.add("copied");

  setTimeout(() => {
    button.innerHTML = originalContent;
    button.classList.remove("copied");
  }, 1600);
}


// ==============================
// PARTICLES BACKGROUND
// ==============================

if (typeof particlesJS !== "undefined") {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 800
        }
      },

      color: {
        value: "#ffffff"
      },

      shape: {
        type: "circle"
      },

      opacity: {
        value: 0.3,
        random: false
      },

      size: {
        value: 2,
        random: true
      },

      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.15,
        width: 1
      },

      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false
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
          enable: true,
          mode: "push"
        },

        resize: true
      },

      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 0.3
          }
        },

        push: {
          particles_nb: 3
        }
      }
    },

    retina_detect: true
  });
}
