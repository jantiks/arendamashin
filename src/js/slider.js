$('.places__slider').slick({
   infinite: true,
   slidesToShow: 2,
   slidesToScroll: 1,
   responsive: [
      {
         breakpoint: 970,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
         }
      },
      {
         breakpoint: 386,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
         }
      }
   ]
});

$(".about-slider").slick({
   infinite: true,
   slidesToShow: 1,
   slidesToScroll: 1,
   asNavFor: '.about-header__slider',
   responsive: [
      {
         breakpoint: 386,
         settings: {
            arrows: false
         }
      }
   ]
});
$(".about-header__slider").slick({
   infinite: true,
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   asNavFor: '.about-slider'
});


