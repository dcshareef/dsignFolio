(function($) {

    "use strict";

    $(document).ready(function() {

// PRELOADER JS & DOCUMENT LOAD JS

        $(window).on('load', function() {

            $('.loader').fadeOut();
            $('#preloader-area').delay(350).fadeOut('slow');
            
        });

    });

    
// When document is loaded, do

    $(window).on('load', function() {

        const svg = document.getElementById("preloaderSvg");
        const tl = gsap.timeline();
        const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
        const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

        tl.to(".preloader-heading .load-text , .preloader-heading .cont", {
            delay: 2,
            y: -100,
            opacity: 0,
        });
        tl.to(svg, {
            duration: 0.5,
            attr: { d: curve },
            ease: "power2.easeIn",
        }).to(svg, {
            duration: 0.5,
            attr: { d: flat },
            ease: "power2.easeOut",
        });
        tl.to(".preloader", {
            y: -1500,
        });
        tl.to(".preloader", {
            zIndex: -1,
            display: "none",
        });
    });

})(window.jQuery);



// * CUSTOM CURSOR JS

const cursorBall = document.getElementById('ball');

// Function to enable or disable cursor effects based on screen width
function updateCursorEffect() {
    if (window.innerWidth >= 1024) {
        document.addEventListener('mousemove', mouseMoveHandler);
        hoverElements.forEach(function(element) {
            element.addEventListener('mouseenter', hoverEnterHandler);
            element.addEventListener('mouseleave', hoverLeaveHandler);
        });
    } else {
        document.removeEventListener('mousemove', mouseMoveHandler);
        hoverElements.forEach(function(element) {
            element.removeEventListener('mouseenter', hoverEnterHandler);
            element.removeEventListener('mouseleave', hoverLeaveHandler);
        });
        // Ensure cursorBall is hidden on smaller screens
        gsap.to(cursorBall, { opacity: 0 });
    }
}

// Handlers for mousemove and hover effects
function mouseMoveHandler(e) {
    gsap.to(cursorBall, {
        duration: 0.5,
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
        ease: 'power2.out',
    });
}

function hoverEnterHandler() {
    cursorBall.classList.add('hovered');
    gsap.to(cursorBall, {
        duration: 0.5,
        scale: 2,
        opacity: 0,
        ease: 0.1,
    });
}

function hoverLeaveHandler() {
    cursorBall.classList.remove('hovered');
    gsap.to(cursorBall, {
        duration: 0.3,
        scale: 1,
        opacity: 1,
        ease: 'power2.out',
    });
}

// Initial setup and window resize listener
const hoverElements = document.querySelectorAll('a');
updateCursorEffect();
window.addEventListener('resize', updateCursorEffect);
