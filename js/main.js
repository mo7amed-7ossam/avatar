for (i = 2; i <= 300; i++) {
    $(".avatar .child").append("<img src='img/avatar/mohamedHossam (" + i + ").webp' >")
}

scrollFollow = 0

let fullScroll = $("html").height() - $(window).height();
$(window).scroll(function () {
    scrollNow = $(this).scrollTop();
    if (scrollNow > scrollFollow) {
        go_down = setInterval(function () {
            if (scrollFollow < scrollNow) {
                scrollFollow++;
                let slide = Math.round(scrollFollow / fullScroll * 300);
                $(".avatar img").removeClass("active")
                $(".avatar .child img:nth-child(" + slide + ")").addClass("active")
            } else {
                clearInterval(go_down)
            }
        }, 50)

    } else if ((scrollNow < scrollFollow )) {
        go_up = setInterval(function () {
            if (scrollFollow > scrollNow) {
                scrollFollow--;
                console.log(scrollFollow)
                let slide = Math.round(scrollFollow / fullScroll * 300) + 1;
                $(".avatar img").removeClass("active")
                $(".avatar .child img:nth-child(" + slide + ")").addClass("active")
            } else {
                clearInterval(go_up)
            }
        }, 50)
    }

})



// $(window).scroll(function () {
    
// })




