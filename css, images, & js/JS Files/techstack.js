
/* =====================================
   MOBILE NAVIGATION
===================================== */

const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobile-nav");

if (hamburger && mobileNav) {

    hamburger.addEventListener("click", () => {

        const isOpen = mobileNav.classList.toggle("active");

        hamburger.classList.toggle("is-open", isOpen);

        hamburger.setAttribute("aria-expanded", String(isOpen));

        hamburger.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );

    });

    mobileNav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            mobileNav.classList.remove("active");
            hamburger.classList.remove("is-open");
            hamburger.setAttribute("aria-expanded", "false");

        });

    });

}


/* =====================================
   PARTICLES BACKGROUND
===================================== */

if (
    typeof particlesJS !== "undefined" &&
    document.getElementById("particles-js")
) {

    particlesJS("particles-js", {

        particles: {

            number: {
                value: 42,
                density: {
                    enable: true,
                    value_area: 850
                }
            },

            color: {
                value: "#e8b4f2"
            },

            shape: {
                type: "circle"
            },

            opacity: {
                value: 0.35,
                random: true
            },

            size: {
                value: 2.5,
                random: true
            },

            line_linked: {
                enable: true,
                distance: 150,
                color: "#a85db5",
                opacity: 0.2,
                width: 1
            },

            move: {
                enable: true,
                speed: 2,
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
                    mode: "repulse"
                },

                onclick: {
                    enable: true,
                    mode: "push"
                },

                resize: true

            },

            modes: {

                repulse: {
                    distance: 90,
                    duration: 0.4
                },

                push: {
                    particles_nb: 3
                }

            }

        },

        retina_detect: true

    });

}


/* =====================================
   TECHNOLOGY DATA
===================================== */

const techStacks = [

    {
        category: "Programming Languages",
        direction: "left",

        skills: [

            {
                name: "C",
                icon: "fas fa-c",
                color: "c-icon",
                description: "A foundational programming language that I explored to understand programming logic, variables, functions, and problem-solving."
            },

            {
                name: "C++",
                icon: "fas fa-code",
                color: "cpp-icon",
                description: "An extension of C that introduced me to object-oriented programming, classes, objects, and more advanced programming concepts."
            },

            {
                name: "Java",
                icon: "fab fa-java",
                color: "java-icon",
                description: "An object-oriented programming language that I used to understand application development, program structures, and object-oriented principles."
            },

            {
                name: "JavaScript",
                icon: "fab fa-js-square",
                color: "javascript-icon",
                description: "A programming language I use to add interactivity and dynamic functionality to websites and web applications."
            },

            {
                name: "TypeScript",
                icon: "fas fa-code",
                color: "typescript-icon",
                description: "A typed extension of JavaScript that helps organize code, identify errors, and develop more maintainable applications."
            }

        ]

    },

    {
        category: "Web Technologies",
        direction: "right",

        skills: [

            {
                name: "HTML",
                icon: "fab fa-html5",
                color: "html-icon",
                description: "The standard markup language I use to structure web pages, organize content, and build the foundation of websites."
            },

            {
                name: "CSS",
                icon: "fab fa-css3-alt",
                color: "css-icon",
                description: "A styling language I use to design website layouts, manage colors and typography, create animations, and make interfaces responsive."
            }

        ]

    },

    {
        category: "Databases",
        direction: "left",

        skills: [

            {
                name: "Oracle",
                icon: "fas fa-database",
                color: "oracle-icon",
                description: "A relational database management system used to store, organize, retrieve, and manage structured information using SQL."
            },

            {
                name: "MongoDB",
                icon: "fas fa-leaf",
                color: "mongodb-icon",
                description: "A NoSQL document-oriented database that stores information in flexible JSON-like documents."
            },

            {
                name: "Supabase",
                icon: "fas fa-database",
                color: "supabase-icon",
                description: "An open-source backend platform that I use for database management, authentication, APIs, and application development using PostgreSQL."
            }

        ]

    },

    {
        category: "Frameworks and Runtimes",
        direction: "right",

        skills: [

            {
                name: "React",
                icon: "fab fa-react",
                color: "react-icon",
                description: "A JavaScript library for building interactive user interfaces through reusable components."
            },

            {
                name: "Next.js",
                icon: "fas fa-code",
                color: "next-icon",
                description: "A React framework used to develop full-stack web applications with features such as routing, rendering, and server-side functionality."
            },

            {
                name: "Flutter",
                icon: "fas fa-mobile-alt",
                color: "flutter-icon",
                description: "A UI framework from Google used to build cross-platform mobile and web applications from a single codebase."
            },

            {
                name: "Firebase",
                icon: "fas fa-fire",
                color: "firebase-icon",
                description: "A Google development platform that provides services such as authentication, cloud databases, and application hosting."
            },

            {
                name: "Node.js",
                icon: "fab fa-node-js",
                color: "node-icon",
                description: "A JavaScript runtime environment that allows JavaScript to run outside the browser, particularly for backend development."
            },

            {
                name: "Express.js",
                icon: "fas fa-server",
                color: "express-icon",
                description: "A lightweight Node.js web framework used to create server applications, APIs, and backend routes."
            }

        ]

    },

    {
        category: "Development Tools",
        direction: "left",

        skills: [

            {
                name: "GitHub",
                icon: "fab fa-github",
                color: "github-icon",
                description: "A platform I use to host repositories, manage source code, track changes, and collaborate on development projects."
            },

            {
                name: "Visual Studio Code",
                icon: "fas fa-code",
                color: "vscode-icon",
                description: "A code editor I use for writing, editing, debugging, and managing software development projects."
            },

            {
                name: "Android Studio",
                icon: "fab fa-android",
                color: "android-icon",
                description: "An integrated development environment for Android development that I explored for building and testing mobile applications."
            },

            {
                name: "Postman",
                icon: "fas fa-paper-plane",
                color: "postman-icon",
                description: "An API development and testing platform I use to send HTTP requests, inspect responses, and test backend endpoints."
            }

        ]

    }

];


/* =====================================
   ELEMENT REFERENCES
===================================== */

const techContainer = document.getElementById("techstack-container");

const detailView = document.getElementById("skillDetail");

const backButton = document.getElementById("backButton");

const detailIcon = document.getElementById("detailIcon");

const detailTitle = document.getElementById("detailTitle");

const detailCategory = document.getElementById("detailCategory");

const detailDescription = document.getElementById("detailDescription");


/* =====================================
   OPEN SKILL DETAIL
===================================== */

function openSkillDetail(skill, category) {

    if (!detailView) return;

    detailIcon.replaceChildren();

    const icon = document.createElement("i");

    icon.className = `${skill.icon} ${skill.color}`;

    icon.setAttribute("aria-hidden", "true");

    detailIcon.appendChild(icon);

    detailTitle.textContent = skill.name;

    detailCategory.textContent = category;

    detailDescription.textContent = skill.description;

    document.body.classList.add("skill-open");

    detailView.classList.add("active");

    detailView.setAttribute("aria-hidden", "false");

    backButton.focus();

}


/* =====================================
   CLOSE SKILL DETAIL
===================================== */

function closeSkillDetail() {

    if (!detailView) return;

    document.body.classList.remove("skill-open");

    detailView.classList.remove("active");

    detailView.setAttribute("aria-hidden", "true");

}

if (backButton) {

    backButton.addEventListener("click", closeSkillDetail);

}

document.addEventListener("keydown", event => {

    if (
        event.key === "Escape" &&
        detailView?.classList.contains("active")
    ) {

        closeSkillDetail();

    }

});


/* =====================================
   CREATE TECHNOLOGY BUTTON
===================================== */

function createSkillButton(skill, category) {

    const button = document.createElement("button");

    button.type = "button";

    button.className = "skill-pill";

    button.setAttribute(
        "aria-label",
        `Explore ${skill.name}`
    );

    const icon = document.createElement("i");

    icon.className = `${skill.icon} ${skill.color}`;

    icon.setAttribute("aria-hidden", "true");

    const name = document.createElement("span");

    name.className = "skill-name";

    name.textContent = skill.name;

    button.append(icon, name);

    button.addEventListener("click", () => {

        openSkillDetail(skill, category);

    });

    return button;

}


/* =====================================
   BUILD TECHNOLOGY ROWS
===================================== */

function buildTechnologyRows() {

    if (!techContainer) return;

    techContainer.replaceChildren();

    techStacks.forEach((group, index) => {

        /* CATEGORY SECTION */

        const categorySection = document.createElement("section");

        categorySection.className = "stack-category";


        /* CATEGORY HEADING */

        const heading = document.createElement("div");

        heading.className = "category-heading";

        const number = document.createElement("span");

        number.className = "category-number";

        number.textContent = String(index + 1).padStart(2, "0");

        const title = document.createElement("h2");

        title.textContent = group.category;

        const line = document.createElement("span");

        line.className = "category-line";

        heading.append(number, title, line);


        /* SLIDING TRACK */

        const track = document.createElement("div");

        track.className = "skill-track";

        if (group.direction === "right") {
            track.classList.add("reverse");
        }

        track.setAttribute(
            "aria-label",
            `${group.category} sliding list`
        );

        const trackInner = document.createElement("div");

        trackInner.className = "skill-track-inner";


        /*
          FIRST SET:
          Contains the actual clickable skill cards.
        */

        const firstSet = document.createElement("div");

        firstSet.className = "skill-set";

        group.skills.forEach(skill => {

            firstSet.appendChild(
                createSkillButton(skill, group.category)
            );

        });


        /*
          SECOND SET:
          Visual copy for the continuous animation.
          It is hidden from keyboard and screen readers.
        */

        const secondSet = firstSet.cloneNode(true);

        secondSet.setAttribute("aria-hidden", "true");

        secondSet.setAttribute("inert", "");

        secondSet.querySelectorAll("button").forEach(button => {

            button.setAttribute("tabindex", "-1");

        });


        /*
          Append both equal sets.
          CSS moves the complete track by 50%.
        */

        trackInner.append(firstSet, secondSet);

        track.appendChild(trackInner);

        categorySection.append(heading, track);

        techContainer.appendChild(categorySection);

    });

}


/* =====================================
   INITIALIZE
===================================== */

buildTechnologyRows();
