!function(e){var o={};function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var r in e)t.d(n,r,function(o){return e[o]}.bind(null,r));return n},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=2)}([function(e,o,t){},function(e,o,t){"use strict";t.r(o);t(0),t.p,t.p,t.p;function n(){var e=document.querySelector(".header__nav");"header__nav"===e.className?(document.querySelector(".overlay").style.display="block",e.className+=" header__menu",document.body.style.overflow="hidden"):(document.querySelector(".overlay").style.display="none",e.className="header__nav",document.body.style.overflow="auto")}console.log("###: index.js loaded"),document.querySelector(".header__icon").addEventListener("mousedown",(function(){n();var e=document.querySelector(".header"),o=document.querySelector(".header__menu");e.classList.contains("header_dark")&&o&&(o.style.backgroundColor="#F5F6F7")})),document.querySelector(".authorization").addEventListener("mousedown",(function(){document.querySelector(".popup").classList.add("popup_active"),document.body.style.overflow="hidden"})),document.querySelector(".popup__close").addEventListener("mousedown",(function(){document.querySelector(".popup").classList.remove("popup_active"),document.body.style.overflow="auto"}))},function(e,o,t){"use strict";t.r(o);t(0),t(1);console.log("###: articles/index.js Loaded")}]);