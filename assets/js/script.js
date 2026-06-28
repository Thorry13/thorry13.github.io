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



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");viewport.classList.remove("detail-active");
  history.pushState({},"","#projects");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// navigationLinks.forEach(link => {
//   link.addEventListener("click", () => {
//     const target = link.dataset.page;
//
//     pages.forEach(page => {
//       page.classList.toggle(
//         "active",
//         page.dataset.page === target
//       );
//       history.pushState({},"","#"+target);
//     });
//
//     navigationLinks.forEach(l => {
//       l.classList.toggle("active", l === link);
//     });
//
//     window.scrollTo(0, 0);
//   });
// });

navigationLinks.forEach(link => {
  link.addEventListener("click", () => {
    window.location.hash = link.dataset.page;
    window.scrollTo(0, 0);
  });
});

// add click event for project cards
const viewport = document.querySelector(".viewport");
const cards = document.querySelectorAll(".project-card");

function changeMdSrc(md){
  const oldViewer = document.getElementById("project-viewer");
  const newViewer = document.createElement("zero-md");
  newViewer.setAttribute("src", md);
  newViewer.id = "project-viewer";

  oldViewer.replaceWith(newViewer);

}

// cards.forEach(card => {
//   card.addEventListener("click", () => {
//
//     const md = card.dataset.md; // Get markdown file
//     changeMdSrc(md);
//     viewport.classList.add("detail-active");
//
//     cards.forEach(c => c.classList.remove("selected"));
//     card.classList.add("selected");
//
//     document.getElementById("detail-title").textContent =
//       card.querySelector(".project-title").textContent;
//
//     history.pushState({},"","#projects:" + card.dataset.project);
//     // history.pushState({},"","#test");
//
//   });
// });

cards.forEach(card => {
  card.addEventListener("click", () => {
    // history.pushState({},"","#projects:" + card.dataset.project);
    // history.pushState({},"","#test");
  window.location.hash = `projects:${card.dataset.project}`;

  });
});


// Back button
document.getElementById("backBtn").addEventListener("click", () => {
  // viewport.classList.remove("detail-active");
  // history.pushState({},"","#projects");
  window.location.hash = "projects";
  // showGrid();
});
/*
document.getElementById("backBtn").addEventListener("click", () => {
  viewport.classList.remove("detail-active");
});*/
