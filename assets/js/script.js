'use strict';

// Read URL
function parseHash() {
  const hash = window.location.hash.slice(1); // remove "#"
  const [page, project] = hash.split(":");

  return {
    page: page || "about",
    project: project || null
  };
}

// Use URL to directly access pages
function applyState(state) {

  // navbar
  pages.forEach(page => {
    page.classList.toggle(
      "active",
      page.dataset.page === state.page
    );
  });

  navigationLinks.forEach(l => {
    l.classList.toggle("active", l.dataset.page === state.page);
  });

  // projects
  if (state.page === "projects" && state.project) {
    // open project
    const card = document.querySelector(
      `[data-project="${state.project}"]`
    );

    if (!card) return;

    const md = card.dataset.md; // Get markdown file
    changeMdSrc(md);
    viewport.classList.add("detail-active");

    cards.forEach(c => c.classList.remove("selected"));
    card.classList.add("selected");

    document.getElementById("detail-title").textContent =
    card.querySelector(".project-title").textContent;
  } else {
    // close project
    viewport.classList.remove("detail-active");
  }
}

window.addEventListener("load", () => {
  applyState(parseHash());
});

window.addEventListener("hashchange", () => {
  applyState(parseHash());
});

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach(link => {
  link.addEventListener("click", () => {
    window.location.hash = link.dataset.page;
    window.scrollTo(0, 0);
  });
});

// add click event for project cards
const viewport = document.querySelector(".viewport");
const cards = document.querySelectorAll(".project-card");
cards.forEach(card => {
  card.addEventListener("click", () => {
    window.location.hash = `projects:${card.dataset.project}`;
  });
});

function changeMdSrc(md){
  const oldViewer = document.getElementById("project-viewer");
  const newViewer = document.createElement("zero-md");
  newViewer.setAttribute("src", md);
  newViewer.id = "project-viewer";

  // manage zero-md styling
  newViewer.innerHTML = `
  <template data-append>
    <style>
    body {
      color: inherit;
    }
    </style>
  </template>
  `

  // update view
  oldViewer.replaceWith(newViewer);

}

// Back button
document.getElementById("backBtn").addEventListener("click", () => {
  window.location.hash = "projects";
});


