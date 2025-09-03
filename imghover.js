const listItems = document.querySelectorAll(".dropdown-column li");
const previewBox = document.querySelector(".dropdown-preview");
const previewImg = document.getElementById("preview-img");
const dropdownContent = document.querySelector(".dropdown-content");

listItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
        const imgSrc = item.getAttribute("data-img");
        previewImg.src = imgSrc;
        previewBox.style.display = "flex";
    });
});

// Hide preview only when mouse leaves the entire content area:
dropdownContent.addEventListener("mouseleave", () => {
    previewBox.style.display = "none";
});
