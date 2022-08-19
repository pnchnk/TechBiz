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

//feedback-section mainpage
$('#owl-feedback').owlCarousel({
    loop:true,
    margin:25,
    nav:true,
    navText : ['<span class="feedback-prev btn d-none d-lg-block"><i class="far fa-arrow-left"></i>prev</span>','<span class="feedback-next btn d-none d-lg-block">next<i class="far fa-arrow-right"></i></span>'],
    responsive:{
        0:{
            items: 1
        },
        767:{
            items: 2
        },
        1200: {
            items: 3
        }
    }
});

//Clients-section mainpage
$('#owl-clients').owlCarousel({
    loop:true,
    margin:25,
    nav:false,
    responsive:{
        0:{
            items: 2,
            margin: 15
        },
        762:{
            items: 3
        },
        1200: {
            items: 5
        }
    }
});

//blog-section mainpage
$('#owl-blog').owlCarousel({
    loop:true,
    margin:25,
    nav:false,
    responsive:{
        0:{
            items: 1
        },
        763:{
            items: 2
        },
        1200: {
            items: 3
        }
    }
});

new ModalVideo('#services-modal-btn', {url: 'https://youtu.be/liJVSwOiiwg'}); 

new ModalVideo('#faq-modal-video', {url: 'https://youtu.be/liJVSwOiiwg'}); 


$('#services-owl').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items: 1,
            margin:0
        },
        763:{
            items: 2
        },
        992: {
            items: 3
        }
    }
});

// let lastScroll = 0;
// const defaultOffset = 800;
// const header = document.querySelector('#js-header-dropdown');
 
// const scrollPosition = () => window.pageYOffset ;
// const containHide = () => header.classList.contains('header-fixed');
 
// window.addEventListener('scroll', () => {
//     if(scrollPosition() > lastScroll  && scrollPosition() > defaultOffset) {
//         //scroll down
//         header.classList.add('header-fixed');
//         // header.classList.remove('header-fixed');
//     }
//     else if(scrollPosition() < lastScroll && containHide()){
//         //scroll up
//         header.classList.remove('header-fixed');   
//         // header.classList.add('header-fixed');  
//     }
 
//     lastScroll = scrollPosition();
// })