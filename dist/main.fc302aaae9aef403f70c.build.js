!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/tarnovskiy/dist/",n(n.s=2)}([,,function(t,e,n){"use strict";n.r(e);n(3),n(4);function r(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,a=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){l=!0,u=t},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw u}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}window.onload=function(){var t,e=r(document.querySelectorAll('a[href*="#"]'));try{var n=function(){var e=t.value;e.addEventListener("click",(function(t){t.preventDefault();var n=e.getAttribute("href").substr(1);document.getElementById(n).scrollIntoView({behavior:"smooth",block:"start"})}))};for(e.s();!(t=e.n()).done;)n()}catch(t){e.e(t)}finally{e.f()}var o,i;o=document.querySelector(".hero__bg"),i={move:function(t,e,n){var r=e/-n+"%",o=t.style,i="translate3d(0, "+r+", 0)";o.transform=i,o.webkitTransform=i},init:function(t){this.move(o,t,-20)}},window.onscroll=function(){var t=window.pageYOffset;i.init(t)}}},function(t,e,n){},function(t,e){console.log("this is the skills module")}]);