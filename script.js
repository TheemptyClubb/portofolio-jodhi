// ===============================
// TAHUN OTOMATIS DI FOOTER
// ===============================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


// ===============================
// MOBILE NAVIGATION
// ===============================

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// ===============================
// TUTUP MENU SETELAH DIKLIK
// ===============================

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// ===============================
// ANIMASI SCROLL
// ===============================

const sections = document.querySelectorAll(".section, .hero");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.1
    }
);


sections.forEach(section => {

    observer.observe(section);

});