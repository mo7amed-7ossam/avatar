for (i = 2; i <= 300; i++) {
    $(".avatar").append("<img src='img/avatar/mohamedHossam (" + i + ").webp' >")
}

$(window).scroll(function () {
    let fullScroll = $("html").height() - $(window).height();
    let top = Math.round($(this).scrollTop() / fullScroll * 300);
    console.log(top)
    if (top > 0) {
        $(".avatar img").removeClass("active")
        $(".avatar img:nth-child(" + top + ")").addClass("active")
    }
})
