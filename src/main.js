import "./styles/main.pcss";

if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";

window.onload = function () {//прокрутка якарей
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
}

