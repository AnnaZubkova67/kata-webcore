!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){e.exports=o(2)},function(e,t,o){},function(e,t,o){"use strict";o.r(t);o(1);var n=document.querySelectorAll(".body__button-call"),r=document.querySelector(".modal--type--call"),l=document.querySelector(".modal--type--feedback"),c=document.querySelector(".modal--type--menu"),u=document.querySelectorAll(".body__button-chat"),d=document.querySelectorAll(".body__button-menu"),a=document.querySelector(".body");function i(e,t){for(var o=0;o<t.length;o++)t[o].addEventListener("click",(function(t){e.classList.contains("open-modal")&&e.classList.remove("open-modal"),t.preventDefault(),e.classList.add("open-modal"),a.style.overflow="hidden"}))}i(r,n),i(l,u),i(c,d);for(var s=document.querySelectorAll(".link-onwards--type--show"),y=document.querySelectorAll(".content"),m=function(e){var t=s[e];t.addEventListener("click",(function(o){o.preventDefault(),y[e].classList.contains("open")?(y[e].classList.remove("open"),t.textContent="Показать все",t.classList.remove("hide")):(y[e].classList.add("open"),t.classList.add("hide"),t.textContent="Скрыть")}))},f=0;f<s.length;f++)m(f);var p=document.querySelectorAll(".button-closed"),v=document.querySelector(".modal--type--call"),S=document.querySelector(".modal--type--feedback"),b=document.querySelector(".modal--type--menu"),q=document.querySelector(".body");function w(e){for(var t=0;t<p.length;t++)p[t].addEventListener("click",(function(t){t.preventDefault(),e.classList.remove("open-modal"),q.style.overflow="auto"}))}w(v),w(S),w(b);var L=document.querySelectorAll(".modal"),g=document.querySelectorAll(".content-modal"),_=document.querySelector(".modal--type--call"),h=document.querySelector(".modal--type--feedback"),k=document.querySelector(".modal--type--menu"),A=document.querySelector(".body");function P(e){for(var t=0;t<L.length;t++)g[t].addEventListener("click",(function(e){e.stopPropagation()})),L[t].addEventListener("click",(function(t){t.preventDefault(),e.classList.remove("open-modal"),A.style.overflow="auto"}))}P(_),P(h),P(k);var x=document.querySelector(".modal--type--call"),E=document.querySelectorAll(".body__button-call"),j=document.querySelector(".modal--type--feedback"),O=document.querySelector(".modal--type--menu"),D=document.querySelectorAll(".body__button-chat"),M=document.querySelectorAll(".body__button-menu"),V=document.querySelector(".body");function z(e,t){for(var o=0;o<t.length;o++)t[o].addEventListener("keydown",(function(t){e.classList.contains("open-modal")&&e.classList.remove("open-modal"),t.preventDefault(),e.classList.add("open-modal"),V.style.overflow="hidden"}))}z(x,E),z(j,D),z(O,M);var C=document.querySelectorAll(".button-closed"),T=document.querySelector(".modal--type--call"),W=document.querySelector(".modal--type--feedback"),B=document.querySelector(".modal--type--menu"),F=document.querySelector(".body");function G(e){for(var t=0;t<C.length;t++)C[t].addEventListener("keydown",(function(t){t.preventDefault(),e.classList.remove("open-modal"),F.style.overflow="auto"}))}G(T),G(W),G(B);var H,I=document.querySelectorAll(".swiper"),J=document.querySelector(".swiper-brands"),K=document.querySelector(".swiper-types"),N=document.querySelector(".swiper-services");function Q(e,t){if(window.innerWidth<768)H=new Swiper(e,{breakpoints:{320:{slidesPerView:1.3},375:{slidesPerView:1.5},600:{slidesPerView:2}},pagination:{el:t,clickable:!0}});else if(window.innerWidth>=768)for(var o=0;o<I.length;o++)I[o].classList.contains("swiper-initialized")&&H.destroy()}Q(J,".pag-1"),Q(K,".pag-2"),Q(N,".pag-3"),window.addEventListener("resize",(function(){Q(J,".pag-1"),Q(K,".pag-2"),Q(N,".pag-3")}))}]);
//# sourceMappingURL=bundle.js.map