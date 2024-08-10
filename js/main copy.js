document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.overflow = "hidden";
        document.querySelector(".loading").style.visibility = "visible";
    } else {
        $(".loading").fadeOut();
        document.querySelector("body").style.overflow = "visible";
    }
};
$(document).ready(function () {
    for (let i = 2; i <= 300; i++) {
        $(".avatar .child").append("<img data-src='img/avatar/mohamedHossam (" + i + ").webp' class='lazyload'>");
    }

    let scrollFollow = 0;
    let fullScroll = $("html").height() - $(window).height();

    function updateActiveSlide(scrollNow) {
        let slide = Math.round(scrollNow / fullScroll * 299) + 1;
        $(".avatar img").removeClass("active");
        $(".avatar .child img:nth-child(" + slide + ")").addClass("active");
    }

    $(window).on("scroll", function () {
        let scrollNow = $(this).scrollTop();
        scrollFollow = scrollNow;

        requestAnimationFrame(function () {
            updateActiveSlide(scrollFollow);
        });
    });
});
