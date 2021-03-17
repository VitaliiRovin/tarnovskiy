import "./styles/main.pcss";

if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";

window.onload = function () {


  let api = () => {//api карта
    ymaps.ready(init);

    function init() {
      let map = new ymaps.Map("map", {
        center: [55.79945718, 37.53164888],
        zoom: 15,
        controls: []
      });

      map.controls.add('zoomControl', {
        size: 'small',
        position:
          {
            bottom: '30px',
            right: '10px'
          }
      });

      map.behaviors.disable('scrollZoom');//отключаю масштабирование по колесу
      map.behaviors.disable('drag');//отключаю прокручивание по зажатию

      let placemark = new ymaps.Placemark([55.79938477, 37.53186419], {
          balloonContent: [
            '<div class="map__balloon">',
            'Ленинградский пр-т., 47 стр. 1',
            '</div>'
          ].join('')
        },
        {
          // iconLayout: "default#image",
          // iconImageHref: 'images/icons/location.png',
          // iconImageSize: [21, 34]
        });

      map.geoObjects.add(placemark)
      placemark.balloon.open();//зафиксировать балун открытым
    }
  };
  api();


  let scrollEffect = () => {//прокрутка якарей
    const anchors = document.querySelectorAll('a[href*="#"]')

    for (let anchor of anchors) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)
        let heightMenu = document.getElementsByTagName('header')[0].getBoundingClientRect().height;
        let position = document.getElementById(blockID).getBoundingClientRect();

        window.scrollTo({
          top: position.top + window.scrollY - heightMenu,
          left: position.left,
          behavior: "smooth"
        })
      })
    }
  };
  scrollEffect();


  let parallaxEffect = () => {//эфект паралакса

    let parallaxMain = (function () {
      const bg = document.querySelector(".hero__bg");

      return {
        move: function (block, windowScroll, strafeAmount) {
          let strafe = windowScroll / -strafeAmount + "%";
          let style = block.style;
          let transformString = "translate3d(0, " + strafe + ", 0)";

          style.transform = transformString;
          style.webkitTransform = transformString;
        },
        init: function (wScroll) {
          this.move(bg, wScroll, -20);
        }
      }
    }());

    window.onscroll = function () {
      let wScroll = window.pageYOffset;
      parallaxMain.init(wScroll);
    };
  }
  parallaxEffect();

  let validation = () => {//валидация формы
    const myForm = document.querySelector('.form');
    const send = document.querySelector('.form__btn');

    send.addEventListener('click', e => {
      e.preventDefault();

      if (validateForm(myForm)) {
        const send = document.querySelector('.form__btn');
        const thanks = document.querySelector('.form__thanks')

        send.classList.add('form__btn--send')
        thanks.style.opacity = "1";

        function timerOpacity() {
          send.classList.remove('form__btn--send')
          thanks.style.opacity = "0";
        }

        setTimeout(timerOpacity, 2000)
        console.log('отправка данных на сервер');
        myForm.reset();
      }
    });

    function validateForm(form) {
      let valid = true;

      if (!validateField(form.elements.name)) {
        valid = false;
      }

      if (!validateField(form.elements.email)) {
        valid = false;
      }

      return valid;
    }

    function validateField(field) {
      let fieldError = field.nextElementSibling;


      if(!field.checkValidity()) {
        fieldError.textContent = field.validationMessage;
        field.classList.add('form__input--error')
        fieldError.style.display = "block";

        return false;
      } else {
        fieldError.textContent = '';
        field.classList.remove('form__input--error')
        fieldError.style.display = "none";

        return true;
      }
    }
  };
  validation();
}

