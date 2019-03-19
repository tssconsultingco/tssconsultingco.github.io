$(function() {

    var setMenu = function() {
        if ($(window).scrollTop() > window.innerHeight) {
            $(".menu").addClass("alt");
        } else {
            $(".menu").removeClass("alt");
        }
    }
        
    $("#hero a, .takeover a").on("click", function(e) {
        e.preventDefault();
        if ($(".menu").hasClass("active")) {
            $(".menu").trigger("click");
        }
        $("html,body").animate({ scrollTop: $("#"+$(this).data("section")).offset().top });
    });

    $(".menu").on("click", function(e) {
        e.preventDefault();
        $(".takeover").toggleClass("active");
        $(".menu").toggleClass("active");
    });
    $(".menu.active").on("click", function(e) {
        e.preventDefault();
        $(".takeover").removeClass("active");
        $(".menu").removeClass("active");
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