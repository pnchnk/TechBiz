//mob-tablet screens cards service
$('#owl-services-mob').owlCarousel({
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
$('#owl-team').owlCarousel({
    loop:true,
    margin:25,
    nav:false,
    responsive:{
        0:{
            items: 1
        },
        460:{
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

$('#owl-feedback').owlCarousel({
    loop:true,
    margin:25,
    nav:false,
    responsive:{
        0:{
            items: 1
        },
        460:{
            items: 2
        },
        1200: {
            items: 3
        }
    }
});

const $owlNext = document.querySelector('.owl-next');
const $owlPrev = document.querySelector('.owl-prev');

//  $('.owl-next').click(function() {
//         owl.trigger('next.owl.carousel');
//     })
//     // Go to the previous item
//     $('.owl-prev').click(function() {
//         // With optional speed parameter
//         // Parameters has to be in square bracket '[]'
//         owl.trigger('prev.owl.carousel', [300]);
//     })

   
    