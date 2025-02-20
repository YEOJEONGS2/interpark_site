window.onload = function () {
  // 상단의 마이페이지리스트 기능
  const mypageBt = document.querySelector(".mypage-bt");
  const mypageList = document.querySelector(".mypage-list");
  mypageBt.addEventListener("click", function () {
    mypageList.classList.toggle("showMypage");
  });
  // swiper ================
  // 프로모션 스와퍼기능
  const swPromotion = new Swiper(".sw-promotion", {
    slidesPerView: 1,
    spaceBetween: 24,
    breakpoints: {
      480: {
        slidesPerView: 2,
      },
      760: {
        slidesPerView: 2,
      },
    },
    navigation: {
      nextEl: ".promotion .sw-next",
      prevEl: ".promotion .sw-prev",
    },
    pagination: {
      el: ".sw-promotion-pg ",
      clickable: true,
    },
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  // 쇼핑의 스와이퍼 기능적용
  const swShopping = new Swiper(".sw-shopping", {
    navigation: {
      nextEl: ".shopping .sw-next",
      prevEl: ".shopping .sw-prev",
    },
    loop: true,
    slidesPerView: 1.1,
    grid: {
      rows: 1,
      fill: "row",
    },
    spaceBetween: 10,
    breakpoints: {
      480: {
        spaceBetween: 32,
        slidesPerView: 2,
        grid: {
          rows: 1,
        },
        slidesPerGroup: 3,
      },
      680: {
        spaceBetween: 32,
        slidesPerView: 3,
        grid: {
          rows: 1,
        },
        slidesPerGroup: 3,
      },
      1024: {
        spaceBetween: 32,
        slidesPerView: 3,
        slidesPerGroup: 3,
        grid: {
          rows: 1,
        },
      },
      1280: {
        spaceBetween: 26,
        slidesPerView: 4,
        slidesPerGroup: 4,
        grid: {
          rows: 1,
        },
      },
    },
  });
  // 투어의 스와이퍼 기능적용
  const swTour = new Swiper(".sw-tour", {
    // 모바일버전
    slidesPerView: 1.2,
    spaceBetween: 10,
    slidesPerGroup: 2,
    grid: {
      rows: 1,
      fill: "row",
    },
    navigation: {
      nextEl: ".tour .sw-next",
      prevEl: ".tour .sw-prev",
    },
    loop: true,
    breakpoints: {
      480: {
        spaceBetween: 32,
        slidesPerView: 2,
        slidesPerGroup: 2,
        grid: {
          rows: 2,
        },
      },
      1024: {
        spaceBetween: 32,
        slidesPerView: 3,
        slidesPerGroup: 2,
        grid: {
          rows: 1,
        },
      },
      1280: {
        spaceBetween: 26,
        slidesPerView: 3,
        slidesPerGroup: 3,
        grid: {
          rows: 1,
        },
      },
    },
  });
  // ticket스와퍼
  const swTicket = new Swiper(".sw-ticket", {
    slidesPerView: 1.2,
    spaceBetween: 10,
    navigation: {
      nextEl: ".ticket .sw-next",
      prevEl: ".ticket .sw-prev",
    },

    loop: true,
    breakpoints: {
      480: {
        spaceBetween: 32,
        slidesPerView: 2,
      },
      1024: {
        spaceBetween: 32,
        slidesPerView: 3,
      },
      1280: {
        spaceBetween: 26,
        slidesPerView: 4,
      },
    },
  });
  // live스와퍼
  const swLive = new Swiper(".sw-live", {
    navigation: {
      nextEl: ".live .sw-next",
      prevEl: ".live .sw-prev",
    },

    loop: true,
    slidesPerView: 1.2,
    spaceBetween: 10,
    breakpoints: {
      330: {
        slidesPerView: 1.2,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      675: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 27,
      },
    },
  });
  // books스와퍼
  const bookx = new Swiper(".sw-books" , {
    navigation: {
      nextEl: ".books .sw-next",
      prevEl: ".books .sw-prev",
    },

    loop: true,
    slidesPerView:2,
    spaceBetween: 19,
    grid: {
      rows: 5,
      fill: "row",
    },
    breakpoints:{
      480: {
        slidesPerView: 2,
        spaceBetween: 20, grid: {
          rows: 1,
        },
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 3,
        spaceBetween: 30,
        grid: {
          rows: 1,
        },
      },
      1280: {
        slidesPerView: 5,
        slidesPerGroup: 5,
        spaceBetween: 27,
        grid: {
          rows: 1,
        },
      },
    }
  })
  // event 스와퍼
  const event = new Swiper(".sw-event" , {
    navigation: {
      nextEl: ".event .sw-next",
      prevEl: ".event .sw-prev",
    },
    loop: true,
    slidesPerView:2,
    spaceBetween: 19,
    grid: {
      rows: 4,
      fill: "row",
    },
    breakpoints:{
      480: {
        slidesPerView: 2,
        spaceBetween: 20, grid: {
          rows: 1,
        },
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 3,
        spaceBetween: 30,
        grid: {
          rows: 1,
        },
      },
    }
  })

};
