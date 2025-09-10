// const listItems = document.querySelectorAll(".dropdown-column li");
// const previewBox = document.querySelector(".dropdown-preview");
// const previewImg = document.getElementById("preview-img");
// const dropdownContent = document.querySelector(".dropdown-content");

// listItems.forEach(item => {
//     item.addEventListener("mouseenter", () => {
//         const imgSrc = item.getAttribute("data-img");
//         previewImg.src = imgSrc;
//         previewBox.style.display = "flex";
//     });
// });

// // Hide preview only when mouse leaves the entire content area:
// dropdownContent.addEventListener("mouseleave", () => {
//     previewBox.style.display = "none";
// });

// Select all dropdown menus
const dropdowns = document.querySelectorAll(".navbar-item.has-dropdown");

dropdowns.forEach(dropdown => {
    const listItems = dropdown.querySelectorAll(".dropdown-column li");
    const previewBox = dropdown.querySelector(".dropdown-preview");
    const previewImg = dropdown.querySelector("#preview-img");
    const dropdownContent = dropdown.querySelector(".dropdown-content");

    if (!listItems.length || !previewBox || !previewImg) return; // Skip if structure doesn't exist

    listItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            const imgSrc = item.getAttribute("data-img");
            previewImg.src = imgSrc;
            previewBox.style.display = "flex";
        });
    });

    // Hide preview only when leaving this dropdown content
    dropdownContent.addEventListener("mouseleave", () => {
        previewBox.style.display = "none";
        previewImg.src = ""; // reset image
    });
});
