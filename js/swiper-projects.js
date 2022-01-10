let projectsSlider = new Swiper(".section-projects__slides-container", {
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 20,
  // pagination: {
    // el: ".section-pbls .swiperr-pagination",
    // type: "fraction"
  // },
  navigation: {
    nextEl: ".section-projects__swiper-next",
    prevEl: ".section-projects__swiper-prev"
  },

  breakpoints: {
    441: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 34
    },

    851: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 50
    },

    1400: {
      slidesPerView: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 50
    }
  },

  a11y: false,
  keyboard: true, // можно управлять с клавиатуры стрелками влево/вправо

  // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
  watchSlidesProgress: true,
  slideVisibleClass: 'slide-visible',

  on: {
    init: function () {
      this.slides.forEach(slide => {
        if (!slide.classList.contains('slide-visible')) {
          slide.tabIndex = '-1';
        } else {
          slide.tabIndex = '';
        }
      });
    },
    slideChange: function () {
      this.slides.forEach(slide => {
        if (!slide.classList.contains('slide-visible')) {
          slide.tabIndex = '-1';
        } else {
          slide.tabIndex = '';
        }
      });
    }
  }

  // on: {
    //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
    //   beforeResize: function () {
      //     this.slides.forEach((el) => {
        //       el.style.marginTop = "";
        //     });
        //   }

  // }
});


