// Select all elements with the "nav-link" class
const navLinks = Array.from(document.querySelectorAll(".nav-link"));
console.log (typeof(navLinks))
// Loop through all nav-link elements

navLinks.forEach((link) => {
  // Add a click event listener to each link
  link.addEventListener("click", (event) => {
    // Remove "highlight" class from all nav-links
    navLinks.forEach((link) => link.classList.remove("highlight"));

    // Add "highlight" class to the clicked element
    event.classList.add("highlight");
  });
});



