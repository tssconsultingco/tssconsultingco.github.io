$(function() {

    var setMenu = function() {
        if ($(window).scrollTop() > window.innerHeight) {
            $(".menu").addClass("alt");
        } else {
            $(".menu").removeClass("alt");
        }
    }
        
    $("[data-section]").on("click", function(e) {
        e.preventDefault();
        if ($(".menu").hasClass("active")) {
            $(".menu").trigger("click");
        }

        if ($(this).parents(".case-study").length) {
            $(".case-study").animate({ opacity: "0" }, 250, function() {
                $(".case-study").scrollTop(0).css("opacity","1").css("display","none");
            });
            $("body").removeClass("freeze");
        } 

        $("html,body").animate({ scrollTop: $("#"+$(this).data("section")).offset().top });
    });

    $(".faq-link").on("click", function(e) {
        e.preventDefault();

        $($(this).attr("href")).fadeIn();
        $("body").addClass("freeze");
    });
    $(".faq a.close-window").on("click", function(e) {
        e.preventDefault();

        $(".faq").animate({ opacity: "0" }, 250, function() {
            $(".faq").scrollTop(0).css("opacity","1").css("display","none");
        });
        $("body").removeClass("freeze");
    });

    $(".event-link").on("click", function(e) {
        e.preventDefault();

        $($(this).attr("href")).fadeIn();
        $("body").addClass("freeze");
    });
    $(".event a.close-window").on("click", function(e) {
        e.preventDefault();

        $(".event").animate({ opacity: "0" }, 250, function() {
            $(".event").scrollTop(0).css("opacity","1").css("display","none");
        });
        $("body").removeClass("freeze");
    });

    $("#portfolio h4 a").on("click", function(e) {
        e.preventDefault();

        $($(this).data("modal")).fadeIn();
        $("body").addClass("freeze");
    });
    $(".case-study a.close-window").on("click", function(e) {
        e.preventDefault();

        $(".case-study").animate({ opacity: "0" }, 250, function() {
            $(".case-study").scrollTop(0).css("opacity","1").css("display","none");
        });
        $("body").removeClass("freeze");
    });

    $(".menu").on("click", function(e) {
        e.preventDefault();
        $(".takeover").toggleClass("active");
        $(".menu").toggleClass("active");
        $("body").toggleClass("freeze");
    });
    $(".menu.active").on("click", function(e) {
        e.preventDefault();
        $(".takeover").removeClass("active");
        $(".menu").removeClass("active");
        $("body").removeClass("freeze");
    });

    var stallTime = 0;
    var scrollTimer = window.setInterval(function() {
        stallTime = stallTime+1;

        if ($(window).scrollTop() < $("footer").offset().top - window.innerHeight) {
            if (stallTime == 5) {
                $(".scroll").removeClass("hide");
            }

            if ($(window).scrollTop() > 100) {
                $(".scroll").addClass("alt");
            } else {
                $(".scroll").removeClass("alt");
            }

            if (stallTime % 5 == 3) {
                $(".scroll").addClass("bounce");
                window.setTimeout(function() {
                    $(".scroll").removeClass("bounce");
                }, 300);
            }
        }
    }, 1000);

    $(window).on("scroll", function() {
        stallTime = 0;
        $(".scroll").addClass("hide");

        setMenu();
    });

    $('[data-toggle="tooltip"]').tooltip();

    setMenu();
});