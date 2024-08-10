$(window).scroll(function () {
    let fullScroll = $("html").height() - $(window).height();

    let img = fullScroll / 300;

    let top = Math.round($(this).scrollTop() / fullScroll * 300);
    console.log(top)
    if (top > 0) {
        
        $(".avatar img").attr("https://raw.githubusercontent.com/mo7amed-7ossam/avatar/main/imgs/avatar/mohamedHossam%20("+top+").png")
    }
})
