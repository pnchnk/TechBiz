//mob-tablet screens cards service
$('#owl-one').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
    }
});


//desktop screens team
$('#owl-two').owlCarousel({
    loop:true,
    margin:25,
    nav:false,
    responsive:{
        0:{
            items: 1
        },
        768:{
            items: 2
        },
        992:{
            items: 3
        },
        1200: {
            items: 4
        }
    }
});
