//creates a constant to pick this element (bugged to only work on picOne)
const linkOne = document.querySelector(".images")

//links to new page
linkOne.addEventListener("click", () => {
    window.location.href = "https://maryspaintings.netlify.app/index.html";
});