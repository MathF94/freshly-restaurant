$(document).ready(function(){
    $('.single-item').slick({    
        responsive: [{

            breakpoint: 1400,
            settings: {
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            }

            }, {

            breakpoint: 980,
            settings: {
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            }

            }, {

            breakpoint: 780,
            settings: {
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                
            }

            }, {

            breakpoint: 320,
            settings: {
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,                
            }
        }]
    })
})
