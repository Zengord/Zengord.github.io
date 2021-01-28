$(document).ready(function(){
    $('.slider').slick({
      // Включить стрелки или нет
      arrows:true, 
      // Включить точки или нет
      dots:false,
      // Адаптивная высота по умолчанию - false
      adaptiveHeight:true,
      slidesToShow:4,
      centerMode: true,
      responsive:[
        {
          breakpoint:788,
          settings:{
            slidesToShow:3,
            centerMode: false
          }
        },
        {
          breakpoint:656,
          settings:{
            slidesToShow:2,
            centerMode: false
          }
        },
        {
          breakpoint:510,
          settings:{
            slidesToShow:1,
            centerMode: false
          }
        }
      ],

    });
  });