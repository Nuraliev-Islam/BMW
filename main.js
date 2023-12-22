$(".burger-btn").on("click",function(){
    $(".header-menu").toggleClass("header-menu-show");
});


$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        item: 1,
        autoplay: true,
        autoplayTimout: 3000,
        loop: true,
    });
});
