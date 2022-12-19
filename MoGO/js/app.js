$(function() {
    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    // Fixed Header
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if (scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    // smoosh scroll
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data("scroll"),
            blockoffset = $(blockId).offset().top;

        $("nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate(
            {
                scrollTop: blockoffset,
            },
            500
        );
    });

    // nav toggle
    $("#nav__toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

    // collapse
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data("collapse");

        $this.toggleClass("active");
    });

    // slider
    $("[data-slider]").slick({
        Infinity: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
});
