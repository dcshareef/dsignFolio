// Navbar
let hamburger = document.querySelector('.hamburger')
let menu = document.querySelector('.navMenu')
let logo = document.querySelector('.logo')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle('active')
    logo.classList.toggle('active')
})


// For Sticky Navbar
function handleScroll() {
    let header = document.querySelector('header');
    header.classList.toggle('active', window.scrollY > 0);
}
window.addEventListener('resize', function () {
    if (window.innerWidth > 1200) {
        window.removeEventListener('scroll', handleScroll);
        window.addEventListener('scroll', handleScroll);
    } else {
        window.removeEventListener('scroll', handleScroll);
    }
});


// Navbar Animation
if (window.innerWidth > 1200) {
    window.addEventListener('scroll', handleScroll);

    let tl = gsap.timeline();

    tl.fromTo(".logo, .navMenu li, .button", {
        opacity: 0,
        y: "-100%"
    }, {
        opacity: 1,
        duration: 0.5,
        y: "0%",
        stagger: 0.25,
        ease: "power2.out"
    });

    ScrollTrigger.create({
        trigger: "header",
        start: "top center",
        animation: tl
    });
}

// Add JavaScript to Reset Navbar on Page Load
document.addEventListener("DOMContentLoaded", function () {
    // Select the mobile navbar element
    const mobileNavbar = document.getElementById("mobileNavbar");

    // Check if the navbar has the class for being open
    if (mobileNavbar.classList.contains("open")) {
        // Remove the 'open' class to reset it
        mobileNavbar.classList.remove("open");
    }
});