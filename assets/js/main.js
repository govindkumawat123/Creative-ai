 const cti_lenis = new Lenis({
  lerp: 0.08,         
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 1.5
});

function cti_raf(time) {
  cti_lenis.raf(time);
  requestAnimationFrame(cti_raf);
}

requestAnimationFrame(cti_raf);


$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  //>=, not <=
  if (scroll >= 300) {
    $(".ct_header_main").addClass("ct_sticky_menu");
  } else {
    $(".ct_header_main").removeClass("ct_sticky_menu");
  }
}); //missing );

document.querySelectorAll('.ct_sticky_scroll_main').forEach((section) => {
  const stickyBoxes = section.querySelectorAll('.cti_saas_card');
  const offset = 70;
  const firstCardSpace = 160; // First card ke liye extra space

  stickyBoxes.forEach((box, index) => {
    const topValue =
      index === 0
        ? firstCardSpace
        : firstCardSpace + offset * index;

    box.style.setProperty('--stick-top', `${topValue}px`);
  });
});
$(document).ready(function(){
      $(".ct_hamburger").click(function () {
    $(".ct_middle_navbar ul:not(.ct_dropdown_items ol) ").addClass("show");
  });
  $(".ct_close_bar").click(function () {
    $(".ct_middle_navbar ul:not(.ct_dropdown_items ol) ").removeClass("show");
  });

  

//   Testimonial Slider Js S
  $(".cti_testimonial_slider").owlCarousel({
    loop: true,
    margin: 40,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 800,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1400: {
        items: 3,
      },
      1600: {
        items: 5,
      },
    },
  });
//   Testimonial Slider Js E
})