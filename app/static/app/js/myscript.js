$('#slider1, #slider2, #slider3, #slider4').owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
            autoplay: true,
        },
        600: {
            items: 3,
            nav: true,
            autoplay: true,
        },
        1000: {
            items: 5,
            nav: true,
            loop: true,
            autoplay: true,
        }
    }
})

let fn = request.user.first_name
let ln = request.user.last_name

let type = new Typed("#typed", {
    strings: ["fn", "ln"],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true,


})