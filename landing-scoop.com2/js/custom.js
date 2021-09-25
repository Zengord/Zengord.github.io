!function(o) {
    "use strict";
    o(window).on("load", function() {
        o(".preloader").fadeOut(),
        o("#preloader").delay(550).fadeOut("slow"),
        o("body").delay(450).css({
            overflow: "visible"
        })
    }),
    o(window).on("scroll", function() {
        o(window).scrollTop() > 50 ? o(".main-header").addClass("fixed-menu") : o(".main-header").removeClass("fixed-menu")
    }),
    o("#slides-shop").superslides({
        inherit_width_from: ".cover-slides",
        inherit_height_from: ".cover-slides",
        play: 5e3,
        animation: "fade"
    }),
    o(".cover-slides ul li").append("<div class='overlay-background'></div>"),
    o(document).ready(function() {
        o(window).on("scroll", function() {
            o(this).scrollTop() > 100 ? o("#back-to-top").fadeIn() : o("#back-to-top").fadeOut()
        }),
        o("#back-to-top").click(function() {
            return o("html, body").animate({
                scrollTop: 0
            }, 600),
            !1
        })
    }),
    o(document).ready(function() {
        o('[data-toggle="tooltip"]').tooltip()
    }),
    o(document).ready(function() {
        o(window).on("scroll", function() {
            o(this).scrollTop() > 100 ? o("#back-to-top").fadeIn() : o("#back-to-top").fadeOut()
        }),
        o("#back-to-top").click(function() {
            return o("html, body").animate({
                scrollTop: 0
            }, 600),
            !1
        })
    })
}(jQuery);
