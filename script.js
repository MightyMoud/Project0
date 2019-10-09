$(document).ready(function() {
    $('.slider').slick({
        dots: true,
        sliderToShow: 2,
        autoplay: true,
        adaptiveHeight: true
    });
})

menuClick();

function menuClick() {
    let x = document.querySelector(".menu");
    x.addEventListener("click", showMenu => {
        const y = document.querySelectorAll(".menu--hidden");
        $(y).slideToggle();
    });
}

$(window).scroll(function() {
    var distanceFromTop = $(this).scrollTop();
    if (distanceFromTop <= $('.topLinks').height()) {
        $('.topLinks').css({
            overflow: "hidden",
            position: "relative",
        });
    } else {
        $('.topLinks').css({
            overflow: "initial",
            position: "fixed",
        });
    }
});