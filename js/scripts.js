$(document).ready(function() {
    //tooltip
    // var tooltipTriggerList = [].slice.call(
    //     document.querySelectorAll('[data-bs-toggle="tooltip"]')
    // );
    // var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    //     return new bootstrap.Tooltip(tooltipTriggerEl);
    // });

    $('[data-bs-toggle="tooltip"]').tooltip();

    //anchor-link
    $(".js-anchor-link").click(function(e) {
        e.preventDefault();
        var target = $($(this).attr("href"));
        if (target.length) {
            var scrollTo = target.offset().top;
            $("body, html").animate({ scrollTop: scrollTo + "px" }, 800);
        }
    });

    //modal
    $(window).on("load", function() {
        $("#landingModal").modal("show");
    });
    $(".introSlider").slick({
        dots: true,
        speed: 300,
        infinite: false,
        speed: 500,
        fade: true,
        cssEase: "linear",
        arrows: true,
    });

    //hamburger menu

    document.addEventListener("click", function(e) {
        // Hamburger menu
        if (e.target.classList.contains("hamburger-toggle")) {
            e.target.children[0].classList.toggle("active");
        }
    });
    //mobile menu click
    $(".navbar-toggler").click(function() {
        $(this).toggleClass("current");
        $("body").toggleClass("open-menu");
    });

    //show password on click
    $(".toggle-password").click(function() {
        $(this).toggleClass("bi-eye bi-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });

    //matchHeight js
    $(".dotted-box,.mobile-steps .item .bordered-box-block").matchHeight();
});
$(".modal").on("shown.bs.modal", function(e) {
    $(".introSlider").slick("setPosition");
    $(".introModalSlider").addClass("open");
});
$(".introModalSlider").addClass("open");

$(document).ready(function() {
    //copy to clipboard
    let copyText = document.querySelector(".copy-text");
    copyText.querySelector("button").addEventListener("click", function() {
        let input = copyText.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function() {
            copyText.classList.remove("active");
        }, 2500);
    });

    //tooltip
    var tooltipTriggerList = [].slice.call(
        document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    //mobile steps
    $(".mobile-steps").slick({
        centerMode: false,
        centerPadding: "3.5rem",
        slidesToShow: 2,
        infinite: false,
        cssEase: "linear",
        speed: 500,

        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "2rem",
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 565,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "2rem",
                    slidesToShow: 1,
                },
            },
        ],
    });
});