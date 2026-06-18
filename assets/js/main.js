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

  //   Testimonial Slider Home Js S
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
  //   Testimonial Slider home Js E

  // Testimonial Inner page S
  $(".ct_testimonial_slider").owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    autoHeight: true,
    responsive: {
      0: {
        items: 1,
      },
      575: {
        items: 1,
      },
      767: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  // Testimonial Inner page E

  // Retail app Slider S
  $("#ct_retaial_app_slider").owlCarousel({
    loop: true,
    margin: 50,
    nav: true,
    autoPlay: true,
    slideSpeed: 1000,
    smartSpeed: 1000,
    autoplayTimeout: 2000,
    autoplaySpeed: 3000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  });
  // Retail app Slider E

  $(".ct_pricing_works")
    .on("initialized.owl.carousel changed.owl.carousel", function (e) {
      if (!e.namespace) {
        return;
      }
      $("#counter").text(
        e.relatedTarget.relative(e.item.index) + 1 + " of " + e.item.count,
      );
    })
    .owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });

  // Related Article Slider Js S
  $(".ct_related_article").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  // Related Article Slider Js E
})