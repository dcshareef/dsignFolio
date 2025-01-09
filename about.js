$(document).ready(function() {
    // Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let element = $(entry.target);
                let n = element.find(".count-text").attr("data-stop");
                let r = parseInt(element.find(".count-text").attr("data-speed"), 10);

                $({ countNum: 0 }).animate({
                    countNum: n
                }, {
                    duration: r,
                    easing: "linear",
                    step: function() {
                        element.find(".count-text").text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        element.find(".count-text").text(this.countNum);
                    }
                });

                observer.unobserve(entry.target); // Stop observing after animation is complete
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of element is in view

    // Observe all counter elements
    $('.counter-text-wrap').each(function() {
        observer.observe(this);
    });
});
