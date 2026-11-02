
/* ==============================
   PAGE LOAD
============================== */

document.addEventListener("DOMContentLoaded", () => {

  // Trigger entrance animation after initial render
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.body.classList.add("page-loaded");
    });
  });


  /* ==============================
     TYPING EFFECT
  ============================== */

  const typingElement = document.getElementById("typing-name");

  const text = "Hi, I'm Lee Reyes";

  let characterIndex = 0;

  function typeText() {

    if (!typingElement) return;

    if (characterIndex < text.length) {

      typingElement.textContent += text.charAt(characterIndex);

      characterIndex++;

      setTimeout(typeText, 105);

    }

  }

  // Start typing after profile entrance
  setTimeout(typeText, 1200);


  /* ==============================
     PAGE TRANSITIONS
  ============================== */

  const transition = document.getElementById("page-transition");

  const links = document.querySelectorAll("a[href]");

  if (!transition) return;

  links.forEach(link => {

    link.addEventListener("click", event => {

      const href = link.getAttribute("href");
      const target = link.getAttribute("target");

      if (
        !href ||
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        target === "_blank" ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        event.altKey ||
        event.button !== 0
      ) {
        return;
      }

      const destination = new URL(href, window.location.href);

      // Ignore external links
      if (destination.origin !== window.location.origin) {
        return;
      }

      // Ignore same-page navigation
      if (
        destination.pathname === window.location.pathname &&
        destination.search === window.location.search
      ) {
        return;
      }

      event.preventDefault();

      transition.classList.add("active");

      setTimeout(() => {
        window.location.href = destination.href;
      }, 450);

    });

  });

});


/* ==============================
   PARTICLES BACKGROUND
============================== */

if (typeof particlesJS !== "undefined") {

  particlesJS("particles-js", {

    particles: {

      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800
        }
      },

      color: {
        value: "#e86ffb"
      },

      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#e86ffb"
        }
      },

      opacity: {
        value: 0.4,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },

      size: {
        value: 5,
        random: true,
        anim: {
          enable: true,
          speed: 8,
          size_min: 0.1,
          sync: false
        }
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

    retina_detect: true

  });

}
