
// MOBILE NAVIGATION

const menuToggle = document.getElementById("menu-toggle");

const navMenu = document.getElementById("nav-menu");

// Open and close mobile menu

menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

    const isOpen = navMenu.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

});


// Close menu after clicking a navigation link

const navLinks = document.querySelectorAll("#nav-menu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// SMOOTH SCROLLING

document.documentElement.style.scrollBehavior = "smooth";


// CURRENT YEAR

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}
