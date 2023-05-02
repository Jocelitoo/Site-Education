(function () {
  "use strict";
  
  document.querySelector("html").classList = "js";
  var $body = document.querySelector("body");

  new Glider(document.querySelector(".home-glider"), {
    slidesToShow: 1,
    dots: ".home-dots",
    draggable: true,
    rewind: true,
    scrollLock: true,
  });

  new Glider(document.querySelector(".courses-glider"), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: true,
    draggable: true,
    rewind: true,
    dots: ".courses-dots",
    arrows: {
      prev: ".courses-glider-prev",
      next: ".courses-glider-next",
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 650,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 2,
          slidesToScroll: 1,
          itemWidth: 150,
          duration: 0.25,
        },
      },
      {
        // screens greater than >= 1024px
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          itemWidth: 150,
          duration: 0.25,
        },
      },
    ],
  });
})();
