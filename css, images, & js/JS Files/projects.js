// ==========================================
// PROJECT DATA
// ==========================================

const projects = [
  {
    id: "student-portfolio",
    title: "Student Portfolio",
    category: "personal",
    categoryLabel: "Personal Project",
    status: "Personal Project",
    statusClass: "personal",
    role: "Designer & Developer",
    summary:
      "A personal website showcasing my background, technical skills, projects, and journey as an IT student.",
    details:
      "This portfolio presents my work, technical interests, and development as an aspiring IT professional. It uses HTML, CSS, and JavaScript to create a responsive and interactive experience.",
    contribution:
      "Designed and developed my personal portfolio. Update this description to reflect your exact contributions.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "particles.js"
    ],
    art: "personal",
    icon: "</>",
    artLabel: "PERSONAL WEBSITE"
  },

  {
    id: "faculty-clearance",
    title: "Faculty Clearance System",
    category: "web",
    categoryLabel: "Web Development",
    status: "Completed",
    statusClass: "completed",
    role: "Scrum Master",
    summary:
      "A web-based system designed to organize and manage the faculty clearance process and its required approvals.",
    details:
      "This academic project focused on supporting a more organized faculty clearance workflow. The project has been completed.",
    contribution:
      "Served as Scrum Master, helping coordinate the team's work, monitor progress, and organize project activities.",
    technologies: [
      "Web Development",
      "Database",
      "Team Coordination"
    ],
    art: "clearance",
    icon: "✓",
    artLabel: "CLEARANCE SYSTEM"
  },

  {
    id: "rfid-smart-door",
    title: "RFID Smart Door Scheduled Access",
    category: "iot",
    categoryLabel: "IoT & Hardware",
    status: "Future Concept",
    statusClass: "concept",
    role: "Scrum Master & Developer",
    summary:
      "A proposed RFID-based access system that checks card scans against room and schedule rules before granting door access.",
    details:
      "The concept explored using an ESP32, RFID reader, and electronic door-lock hardware with schedule validation. The project was not defended in the proposal because of its cost. It is presented here as a future concept, not a deployed system.",
    contribution:
      "Served as Scrum Master and Developer during the project's planning and development work.",
    technologies: [
      "ESP32",
      "RFID",
      "RTC",
      "Relay",
      "Access Control"
    ],
    art: "iot",
    icon: "RF",
    artLabel: "RFID ACCESS CONCEPT"
  },

  {
    id: "ai-faculty-system",
    title:
      "AI-Assisted Faculty Scheduling and Requirements Management System",
    category: "web",
    categoryLabel: "Web Development",
    status: "In Progress",
    statusClass: "ongoing",
    role: "Project Leader",
    summary:
      "An ongoing web-based system for faculty scheduling and requirements management, with AI-assisted validation and recommendations.",
    details:
      "The system aims to support faculty scheduling and requirements workflows. Planned AI-assisted features include schedule conflict detection, recommendations, and document validation support. Authorized personnel retain final decision-making responsibility.",
    contribution:
      "Serving as Project Leader, coordinating project direction, team activities, and development progress.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Supabase",
      "AI-Assisted Features"
    ],
    art: "ai",
    icon: "AI",
    artLabel: "FACULTY MANAGEMENT"
  }
];


// ==========================================
// ELEMENTS
// ==========================================

const featuredTrack = document.getElementById("featured-track");
const carousel = document.getElementById("featured-carousel");
const dotsContainer = document.getElementById("carousel-dots");
const carouselCount = document.getElementById("carousel-count");

const projectGrid = document.getElementById("project-grid");
const projectCount = document.getElementById("project-count");

const dialog = document.getElementById("project-dialog");
const dialogContent = document.getElementById("dialog-content");
const dialogClose = document.querySelector(".dialog-close");

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.getElementById("primary-nav");

let currentIndex = 0;
let activeFilter = "all";
let autoSlideTimer = null;
let touchStartX = null;


// ==========================================
// HELPER FUNCTIONS
// ==========================================

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };

    return entities[character];
  });
}

function getStatus(project) {
  return `
    <span class="status ${project.statusClass}">
      ${escapeHTML(project.status)}
    </span>
  `;
}

function getTechnologies(technologies) {
  return `
    <ul class="tech-list">
      ${technologies.map(technology => `
        <li>${escapeHTML(technology)}</li>
      `).join("")}
    </ul>
  `;
}


// ==========================================
// PROJECT PREVIEW ILLUSTRATIONS
// ==========================================

function getProjectArt(project) {
  let preview;

  if (
    project.art === "ai" ||
    project.art === "clearance"
  ) {
    preview = `
      <div class="art-window" aria-hidden="true">

        <div class="window-dots">
          <i></i>
          <i></i>
          <i></i>
        </div>

        <div class="mock-dashboard">

          <div class="mock-sidebar">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>

          <div class="mock-main">

            <div class="mock-title"></div>

            <div class="mock-metrics">
              <i></i>
              <i></i>
              <i></i>
            </div>

            <div class="mock-lines">
              <i></i>
              <i></i>
              <i></i>
            </div>

          </div>
        </div>
      </div>
    `;
  } else {
    const icon = project.art === "personal"
      ? "&lt;/&gt;"
      : escapeHTML(project.icon);

    preview = `
      <div class="art-icon" aria-hidden="true">
        ${icon}
      </div>
    `;
  }

  return `
    <div
      class="project-art art-${escapeHTML(project.art)}"
      role="img"
      aria-label="Illustrative preview of ${escapeHTML(project.title)}">

      ${preview}

      <span class="art-label">
        ${escapeHTML(project.artLabel)}
      </span>

    </div>
  `;
}


// ==========================================
// FEATURED PROJECT CAROUSEL
// ==========================================

function renderFeaturedProject() {
  const project = projects[currentIndex];

  featuredTrack.innerHTML = `
    <article class="featured-slide">

      ${getProjectArt(project)}

      <div class="featured-copy">

        <div class="featured-topline">
          ${getStatus(project)}

          <span class="project-category">
            ${escapeHTML(project.categoryLabel)}
          </span>
        </div>

        <h3>${escapeHTML(project.title)}</h3>

        <p>${escapeHTML(project.summary)}</p>

        <p class="role-line">
          <strong>My Role:</strong>
          ${escapeHTML(project.role)}
        </p>

        ${getTechnologies(project.technologies)}

        <button
          class="text-link details-trigger"
          type="button"
          data-project-id="${escapeHTML(project.id)}">

          View Project Details
          <span aria-hidden="true">→</span>

        </button>

      </div>
    </article>
  `;

  carouselCount.textContent =
    `${String(currentIndex + 1).padStart(2, "0")} / ` +
    `${String(projects.length).padStart(2, "0")}`;

  updateDots();
}


// ==========================================
// CAROUSEL INDICATORS
// ==========================================

function renderDots() {
  dotsContainer.innerHTML = projects.map((project, index) => `
    <button
      class="carousel-dot ${index === currentIndex ? "active" : ""}"
      type="button"
      data-slide="${index}"
      aria-label="Show ${escapeHTML(project.title)}"
      aria-current="${index === currentIndex}">

    </button>
  `).join("");
}

function updateDots() {
  const dots = dotsContainer.querySelectorAll(".carousel-dot");

  dots.forEach((dot, index) => {
    const isActive = index === currentIndex;

    dot.classList.toggle("active", isActive);
    dot.setAttribute("aria-current", String(isActive));
  });
}


// ==========================================
// SLIDE NAVIGATION
// ==========================================

function changeSlide(direction) {
  currentIndex =
    (currentIndex + direction + projects.length) %
    projects.length;

  renderFeaturedProject();
}

document.querySelector(".previous").addEventListener("click", () => {
  changeSlide(-1);
  startAutoSlide();
});

document.querySelector(".next").addEventListener("click", () => {
  changeSlide(1);
  startAutoSlide();
});

dotsContainer.addEventListener("click", event => {
  const button = event.target.closest("[data-slide]");

  if (!button) return;

  currentIndex = Number(button.dataset.slide);

  renderFeaturedProject();
  startAutoSlide();
});


// ==========================================
// AUTOMATIC SLIDE
// ==========================================

function stopAutoSlide() {
  if (autoSlideTimer !== null) {
    window.clearInterval(autoSlideTimer);
    autoSlideTimer = null;
  }
}

function startAutoSlide() {
  stopAutoSlide();

  if (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return;
  }

  autoSlideTimer = window.setInterval(() => {
    if (document.hidden || dialog.open) return;

    changeSlide(1);
  }, 5500);
}

// Pause when the user interacts with the carousel.

carousel.addEventListener("mouseenter", stopAutoSlide);
carousel.addEventListener("mouseleave", startAutoSlide);

carousel.addEventListener("focusin", stopAutoSlide);

carousel.addEventListener("focusout", event => {
  if (!carousel.contains(event.relatedTarget)) {
    startAutoSlide();
  }
});

// Pause while the browser tab is hidden.

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    stopAutoSlide();
  } else {
    startAutoSlide();
  }
});


// ==========================================
// TOUCH SWIPE SUPPORT
// ==========================================

carousel.addEventListener("touchstart", event => {
  touchStartX = event.changedTouches[0].clientX;
}, { passive: true });

carousel.addEventListener("touchend", event => {
  if (touchStartX === null) return;

  const touchEndX = event.changedTouches[0].clientX;
  const difference = touchEndX - touchStartX;

  if (Math.abs(difference) > 45) {
    changeSlide(difference < 0 ? 1 : -1);
    startAutoSlide();
  }

  touchStartX = null;
}, { passive: true });


// ==========================================
// PROJECT CARDS
// ==========================================

function renderProjectCards() {
  const visibleProjects = projects.filter(project => {
    return (
      activeFilter === "all" ||
      project.category === activeFilter
    );
  });

  projectGrid.innerHTML = visibleProjects.map((project, index) => `
    <article
      class="project-card"
      style="animation-delay: ${index * 70}ms">

      ${getProjectArt(project)}

      <div class="project-card-body">

        <div class="card-topline">

          <span class="card-category">
            ${escapeHTML(project.categoryLabel)}
          </span>

          ${getStatus(project)}

        </div>

        <h3>${escapeHTML(project.title)}</h3>

        <p>${escapeHTML(project.summary)}</p>

        ${getTechnologies(project.technologies)}

        <button
          class="text-link details-trigger"
          type="button"
          data-project-id="${escapeHTML(project.id)}">

          View Details
          <span aria-hidden="true">→</span>

        </button>

      </div>
    </article>
  `).join("");

  projectCount.textContent =
    `${visibleProjects.length} ` +
    `${visibleProjects.length === 1 ? "project" : "projects"}`;
}


// ==========================================
// CATEGORY FILTERS
// ==========================================

document.querySelectorAll(".filter-button").forEach(button => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;

    document.querySelectorAll(".filter-button").forEach(item => {
      const selected = item === button;

      item.classList.toggle("active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });

    renderProjectCards();
  });
});


// ==========================================
// PROJECT DETAILS DIALOG
// ==========================================

function openProjectDetails(projectId) {
  const project = projects.find(item => item.id === projectId);

  if (!project) return;

  dialogContent.innerHTML = `
    <p class="eyebrow">
      ${escapeHTML(project.categoryLabel)}
    </p>

    ${getStatus(project)}

    <h2 id="dialog-title">
      ${escapeHTML(project.title)}
    </h2>

    <p>${escapeHTML(project.summary)}</p>

    <section class="dialog-section">
      <h3>Project Overview</h3>
      <p>${escapeHTML(project.details)}</p>
    </section>

    <section class="dialog-section">
      <h3>My Role and Contributions</h3>
      <p>${escapeHTML(project.contribution)}</p>
    </section>

    <section class="dialog-section">
      <h3>Technologies and Tools</h3>
      ${getTechnologies(project.technologies)}
    </section>

    ${
      project.id === "rfid-smart-door"
        ? `
          <p class="dialog-note">
            This is a future concept. It was not defended in the
            proposal because of its cost and should not be represented
            as a completed or deployed system.
          </p>
        `
        : ""
    }

    ${
      project.id === "ai-faculty-system"
        ? `
          <p class="dialog-note">
            This project is ongoing. Update the description as
            development progresses.
          </p>
        `
        : ""
    }
  `;

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    alert(`${project.title}\n\n${project.details}`);
  }

  stopAutoSlide();
}

// Event delegation works for both featured and grid project buttons.

document.addEventListener("click", event => {
  const button = event.target.closest(".details-trigger");

  if (!button) return;

  openProjectDetails(button.dataset.projectId);
});

dialogClose.addEventListener("click", () => {
  dialog.close();
});

dialog.addEventListener("click", event => {
  if (event.target === dialog) {
    dialog.close();
  }
});

dialog.addEventListener("close", () => {
  startAutoSlide();
});


// ==========================================
// MOBILE NAVIGATION
// ==========================================

menuToggle.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("is-open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
});


// ==========================================
// INITIALIZE PAGE
// ==========================================

renderDots();
renderFeaturedProject();
renderProjectCards();
startAutoSlide();