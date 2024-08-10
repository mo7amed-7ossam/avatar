$(window).scroll(function () {
    let fullScroll = $("html").height() - $(window).height();

    let img = fullScroll / 300;

    let top = Math.round($(this).scrollTop() / fullScroll * 300);
    console.log(top)
    if (top > 0) {
        $(".avatar img").attr("src", "imgs/avatar/mohamedHossam (" + top + ").png")
    }
})