// Select all accordion toggle buttons and content sections
const accordionToggles = document.querySelectorAll(".accordion-toggle");
const accordionContents = document.querySelectorAll(".accordion-content");

// Add click event listeners to each accordion toggle button
accordionToggles.forEach((toggle) => {
  toggle.addEventListener("click", (e) => {
    // Loop through all accordion contents to close them if they are open
    accordionContents.forEach((content) => {
      if (
        e.target.nextElementSibling !== content &&
        content.classList.contains("active")
      ) {
        content.classList.remove("active");
        accordionToggles.forEach((btn) => btn.classList.remove("active"));
      }
    });

    // Toggle the clicked accordion content and toggle button
    const content = toggle.nextElementSibling;
    content.classList.toggle("active");
    toggle.classList.toggle("active");
  });
});

// Close all accordion sections if a click happens outside of an accordion toggle button
window.onclick = (e) => {
  if (!e.target.matches(".accordion-toggle")) {
    accordionToggles.forEach((toggle) => toggle.classList.remove("active"));
    accordionContents.forEach((content) => content.classList.remove("active"));
  }
};