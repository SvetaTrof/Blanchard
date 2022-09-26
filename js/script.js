document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".header-bottom-list__item-link").forEach(item => {
    item.addEventListener("click", function() {
      let btn = this;
      let dropdown = this.parentElement.querySelector(".header__simplebar");

      document.querySelectorAll(".header-bottom-list__item-link").forEach(el => {
        if (el != btn) {
          el.classList.remove("header-list-item-link--active");
        }
      });

      document.querySelectorAll(".header__simplebar").forEach(el => {
        if (el != dropdown) {
          el.classList.remove("simplebar-container--active");
        }
      })
      dropdown.classList.toggle("simplebar-container--active");
      btn.classList.toggle("header-list-item-link--active");
    })
  })

  document.addEventListener("click", function(e) {
    let target = e.target;
    if (!target.closest(".header-bottom-list")) {
      document.querySelectorAll(".header__simplebar").forEach(el => {
          el.classList.remove("simplebar-container--active");
      })
      document.querySelectorAll(".header-bottom-list__item-link").forEach(el => {
          el.classList.remove("header-list-item-link--active");
      });
    };
  })
})


const swiper = new Swiper('.hero__swiper', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 3000,
  autoplay: {
    delay: 3000
  },
  effect: "fade",
  allowTouchMove: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: '.swiper-bullet-pagination',
    type: 'bullets',
    clickable: true
  }
})

const element = document.querySelector('#SelectFilter');
const choices = new Choices(element, {
  searchEnabled: false,
  silent: false,
  itemSelectText: '',
  allowHTML: true
});

document.addEventListener("DOMContentLoaded", () => {
  let gallerySlider = new Swiper(".gallery-container", {
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 20,
    pagination: {
      el: ".swiper-gallery__pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".swiper-gallery__next",
      prevEl: ".swiper-gallery__prev"
    },

    breakpoints: {
      200: {
        slidesPerView: 1,
        spaceBetween: 0
      },

      400: {
        slidesPerView: 2,
        spaceBetween: 37
      },

      1025: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    }, // можно управлять с клавиатуры стрелками влево/вправо

    // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },

      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
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
});


$(".catalog__list").accordion({
  heightStyle: "content",
  active: false,
  collapsible: true
});

document.querySelectorAll('.painters__link').forEach(function(tabsBtn){
  tabsBtn.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.painters__link').forEach(function(btn){
      btn.classList.remove('painters__link--active')});
    e.currentTarget.classList.add('painters__link--active');
    document.querySelectorAll('.painter').forEach(function(tabsBtn){
      tabsBtn.classList.remove('painter--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('painter--active');
  });
});

const swipernews = new Swiper('.news__swiper', {
  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup: 3,

  navigation: {
    nextEl: ".news__next",
    prevEl: ".news__prev",
  },

  breakpoints: {
    200: {
      slidesPerView: 1,
      spaceBetween: 27,
      slidesPerGroup: 1,
      pagination: {
        el: ".news__pagination",
      }
    },

    600: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
      pagination: {
        el: ".news__pagination",
      }
    },

    950: {
      slidesPerView: 3,
      spaceBetween: 27,
      slidesPerGroup: 3,
      pagination: {
        el: ".news__pagination",
      }
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  },
});

const swiperpartners = new Swiper('.partners__swiper', {
  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup: 3,

  navigation: {
    nextEl: ".partners__next",
    prevEl: ".partners__prev",
  },
  breakpoints: {
    200: {
      slidesPerView: 1,
      spaceBetween: 34,
      slidesPerGroup: 1
    },

    470: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2
    },

    800: {
      slidesPerView: 2,
      spaceBetween: 50,
      slidesPerGroup: 2
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  },
});

ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [55.75846806898367,37.60108849999989],
        zoom: 14,
        controls: ['geolocationControl', 'zoomControl']
    },
    {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition:  { top: "200px", right: "20px" },
      geolocationControlFloat: 'none',
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "120px", right: "20px" }
    });

    myPlacemark = new ymaps.Placemark([55.75846806898367,37.60108849999989], {
      balloonContent: '<strong>Шоурум №4</strong><br/>Леонтьевский переулок, дом 5/1'
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/Ellipse.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [-10, -10]
    });

    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
};

document.querySelectorAll('.js-scroll-link').forEach(link => {
  link.addEventListener('click', function(e) {
      e.preventDefault();

      const href = this.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);
      const elementPosition = scrollTarget.getBoundingClientRect().top;

      window.scrollBy({
          top: elementPosition,
          behavior: 'smooth'
      });
  });
});

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7(999) 999-99-99");
im.mask(selector);

const validation = new JustValidate('#form');

validation
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Обязательное поле',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Недопустимый формат',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Недопустимый формат',
    },
  ])
  .addField('#tel', [
    {
      validator: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Boolean(Number(phone) && phone.length === 10)
      },
      errorMessage: 'Недопустимый формат',
    },
  ]);

  // здесь мы определяем функцию, которая отвеает за работу меню, в ней не нужно ничего менять
function setBurger(params) {
  const btn = document.querySelector(`.${params.btnClass}`);
  const menu = document.querySelector(`.${params.menuClass}`);

  btn.setAttribute('aria-expanded', false);

  menu.addEventListener("animationend", function () {
    if (this.classList.contains(params.hiddenClass)) {
      this.classList.remove(params.activeClass);
      this.classList.remove(params.hiddenClass);
    }
  });

  btn.addEventListener("click", function () {
    this.classList.toggle(params.activeClass);

    if (
      !menu.classList.contains(params.activeClass) &&
      !menu.classList.contains(params.hiddenClass)
    ) {
      menu.classList.add(params.activeClass);
      document.body.style.overflow = 'hidden';
      btn.setAttribute('aria-expanded', true);
    } else {
      menu.classList.add(params.hiddenClass);
      document.body.removeAttribute('style');
      btn.setAttribute('aria-expanded', false);
    }
  });
}

// здесь мы вызываем функцию и передаем в нее классы наших элементов
setBurger({
  btnClass: "btn-burger", // класс бургера
  menuClass: "header-top__menu-wrap", // класс меню
  activeClass: "is-opened", // класс открытого состояния
  hiddenClass: "is-closed" // класс закрывающегося состояния (удаляется сразу после закрытия)
});


function setSearch(params) {
  const openBtn = document.querySelector(`.${params.openBtnClass}`);
  const search = document.querySelector(`.${params.searchClass}`);
  const closeBtn = search.querySelector(`.${params.closeBtnClass}`);

  search.addEventListener("animationend", function (evt) {
    if (this._isOpened) {
      this.classList.remove(params.activeClass);
      this.classList.remove(params.hiddenClass);
      this._isOpened = false;
    } else {
      this._isOpened = true;
    }
  });

  search.addEventListener('click', function(evt) {
    evt._isSearch = true;
  });

  openBtn.addEventListener("click", function (evt) {
    this.disabled = true;
    if (
      !search.classList.contains(params.activeClass) &&
      !search.classList.contains(params.hiddenClass)
    ) {
      search.classList.add(params.activeClass);
    }
  });

  closeBtn.addEventListener('click', function () {
    openBtn.disabled = false;
    search.classList.add(params.hiddenClass);
  });

  document.body.addEventListener('click', function (evt) {
    if (!evt._isSearch && search._isOpened) {
      openBtn.disabled = false;
      search.classList.add(params.hiddenClass);
    }
  });
}

setSearch({
  openBtnClass: "js-open-search", // класс кнопки открытия
  closeBtnClass: "js-close", // класс кнопки закрытия
  searchClass: "js-form", // класс формы поиска
  activeClass: "is-opened", // класс открытого состояния
  hiddenClass: "is-closed" // класс закрывающегося состояния (удаляется сразу после закрытия)
});


tippy('.help', {
  theme: 'main',
  maxWidth: 264,
});


document.querySelectorAll('.header-top-list__item-link').forEach(item => {
  item.addEventListener('click', function() {
    $(".header-top__menu-wrap").removeClass("is-opened");
    document.body.removeAttribute('style');
    $(".burger").removeClass("is-opened");
  });
});
