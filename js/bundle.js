!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(2)},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(1);let o=document.querySelectorAll(".body__button-call"),r=document.querySelector(".modal--type--call"),l=document.querySelector(".modal--type--feedback"),c=document.querySelector(".modal--type--menu"),u=document.querySelectorAll(".body__button-chat"),i=document.querySelectorAll(".body__button-menu");function d(e,t){for(let n=0;n<t.length;n++)t[n].addEventListener("click",(function(t){c.classList.contains("open-modal")&&c.classList.remove("open-modal"),t.preventDefault(),e.classList.add("open-modal")}))}d(r,o),d(l,u),d(c,i);let s=document.querySelectorAll(".link-onwards--type--show"),a=document.querySelectorAll(".content");for(let e=0;e<s.length;e++){let t=s[e];t.addEventListener("click",(function(n){n.preventDefault(),a[e].classList.contains("open")?(a[e].classList.remove("open"),t.textContent="Показать все",t.classList.remove("hide")):(a[e].classList.add("open"),t.classList.add("hide"),t.textContent="Скрыть")}))}let p=document.querySelectorAll(".button-closed"),m=document.querySelector(".modal--type--call"),f=document.querySelector(".modal--type--feedback"),y=document.querySelector(".modal--type--menu");function b(e){for(let t=0;t<p.length;t++)p[t].addEventListener("click",(function(t){t.preventDefault(),e.classList.remove("open-modal")}))}b(m),b(f),b(y);let S=document.querySelector(".modal"),v=document.querySelector(".modal--type--menu");S.addEventListener("click",(function(e){e.preventDefault(),v.classList.remove("open-modal"),document.querySelector(".body__content-menu").addEventListener("click",(function(e){e.stopPropagation()}))}));const q=document.querySelector(".swiper-brands"),g=document.querySelector(".swiper-types"),L=document.querySelector(".swiper-services");if(window.innerWidth<768){function w(e,t){new Swiper(e,{breakpoints:{320:{slidesPerView:1.3},375:{slidesPerView:1.5},425:{slidesPerView:1.8},600:{slidesPerView:2}},pagination:{el:t,clickable:!0}})}w(q,".pag-1"),w(g,".pag-2"),w(L,".pag-3")}console.log("Works!"),console.log("Works!")}]);
//# sourceMappingURL=bundle.js.map