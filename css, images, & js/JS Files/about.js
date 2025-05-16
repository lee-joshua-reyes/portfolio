function toggleMenu() {
  document.getElementById("mobileNav").classList.toggle("active");
  const mobileLinks = document.querySelectorAll('.mobile-nav a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function () {
      mobileLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });
}

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 50,
      "density": { "enable": true, "value_area": 800 }
    },
    "color": { "value": "#ffffff" },
    "shape": {
      "type": "circle",
      "stroke": { "width": 0, "color": "#000000" },
      "polygon": { "nb_sides": 5 }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": { "enable": false }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": { "enable": false }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 4,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "repulse" },
      "onclick": { "enable": true, "mode": "push" },
      "resize": true
    },
    "modes": {
      "repulse": { "distance": 100, "duration": 0.4 },
      "push": { "particles_nb": 4 }
    }
  },
  "retina_detect": true
});
