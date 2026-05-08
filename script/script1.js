
const openBtn = document.querySelector(".menuopen-btn");
const closeBtn = document.querySelector(".menuclose-btn");
const menu = document.querySelector(".mobnav-btns");
const menuLinks = document.querySelectorAll(".mobnav-btn");

// Open menu
openBtn.addEventListener("click", () => {
    menu.classList.remove("hidesec");
    openBtn.classList.add("hidesec");
    closeBtn.classList.remove("hidesec");
});

// Close menu (close button)
closeBtn.addEventListener("click", closeMenu);

// Close menu when clicking any link
menuLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
});

// Reusable function
function closeMenu() {
    menu.classList.add("hidesec");
    openBtn.classList.remove("hidesec");
    closeBtn.classList.add("hidesec");
}