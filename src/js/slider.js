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

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
   ]
});