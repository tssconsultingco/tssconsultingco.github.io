$(function() {
    $("#hero a").on("click", function(e) {
        e.preventDefault();
        $("html,body").animate({ scrollTop: $("#"+$(this).data("section")).offset().top })
    });

    $('[data-toggle="tooltip"]').tooltip();
});