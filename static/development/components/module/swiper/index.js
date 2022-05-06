import './index.scss'

let swiper_partners = new Swiper(".section03_partners", {
    slidesPerView: '4',
    // spaceBetween: 30,
    
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
    },
    // breakpoints: {
    //     1200: {
    //         slidesPerView: 4,
    //     },
    //     992: {
    //         slidesPerView: 3,
    //     },
    //     600: {
    //         slidesPerView: 2,
    //     },
    //     300: {
    //         slidesPerView: 1,
    //     },
    // },
});

let swiper_section04 = new Swiper(".section04_swiper", {

    // pagination: {
    //     el: ".swiper-pagination",
    //     type: "bullets",
    //     clickable: true,
    // },

});

let swiper_section05 = new Swiper(".section05_swiper", {
    slidesPerView: '2.5',
    // pagination: {
    //     el: ".swiper-pagination",
    //     type: "bullets",
    //     clickable: true,
    // },

});