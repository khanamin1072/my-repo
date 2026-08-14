/* ================= MOBILE MENU ================= */

const menuButton = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");

        document.body.classList.toggle("menu-open");

    });

}


/* ================= SCROLL REVEALS ================= */

const revealElements = document.querySelectorAll(
    ".reveal, .reveal-card, .reveal-text"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* ================= IMAGE PARALLAX ================= */

const heroImage = document.querySelector(".hero-media img");

window.addEventListener("scroll", () => {

    if (!heroImage) return;

    const scroll = window.scrollY;

    if (scroll < window.innerHeight) {

        heroImage.style.transform =
            `scale(1) translateY(${scroll * 0.12}px)`;

    }

});


/* ================= PROJECT IMAGE CURSOR EFFECT ================= */

const projectImages =
    document.querySelectorAll(".project-image");

projectImages.forEach((image) => {

    image.addEventListener("mousemove", (event) => {

        const rect = image.getBoundingClientRect();

        const x =
            ((event.clientX - rect.left) / rect.width - 0.5) * 10;

        const y =
            ((event.clientY - rect.top) / rect.height - 0.5) * 10;

        const img = image.querySelector("img");

        if (img) {

            img.style.transform =
                `scale(1.06) translate(${x}px, ${y}px)`;

        }

    });


    image.addEventListener("mouseleave", () => {

        const img = image.querySelector("img");

        if (img) {

            img.style.transform =
                "scale(1) translate(0, 0)";

        }

    });

});


/* ================= CURRENT YEAR ================= */

const yearElements =
    document.querySelectorAll(".current-year");

yearElements.forEach((element) => {

    element.textContent =
        new Date().getFullYear();

});