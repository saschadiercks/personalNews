!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(3)},,,function(e,t,n){"use strict";n.r(t);var o=function(e,t,n){let o=new XMLHttpRequest;o.open(e,t,!0),o.send(),o.onreadystatechange=function(){4===o.readyState&&o.readyState&&n(o.response)}};var r=function(e){return document.querySelectorAll(e)};var a=function(){window.location.reload()};var i=function(e){let t=window.location.search;return new URLSearchParams(t).get(e)};var l=function(){window.scrollTo({left:0,top:0,behavior:"smooth"})};var s=function(e,t){e.forEach(e=>{e.classList.contains(t)?e.classList.remove(t):e.classList.add(t)})};var c=function(){window.isScrollable?(window.scrollPosition=window.pageYOffset,document.body.style.cssText=`overflow: hidden; position: fixed; top: -${window.scrollPosition}px`,window.isScrollable=!1):(document.body.style.cssText=null,window.scrollTo(0,scrollPosition),window.isScrollable=!0)};var d=function(e,t=0,n=0,o){let r=e?e.offsetTop-n:0,a=t;window.scrollTo({left:a,top:r}),o&&o()};var u=function(e,t){window.addEventListener("scroll",(function n(){pageYOffset<=e&&(t(),window.removeEventListener("scroll",n))}))};function f(e,t){e.forEach(e=>{if(e.intersectionRatio>0){let n=localStorage.getItem("lastReadItems"),o=e.target.dataset.timestamp,r=e.target.dataset.count;n<o&&(localStorage.setItem("lastReadItems",o),r>0&&(unreadItemsElementCount.innerHTML=r)),e.target.classList.add("timeline__item--read"),t.unobserve(e.target)}})}var m=function(e){let t=new IntersectionObserver(f,{root:null,rootMargin:"0px",threshold:1});e.forEach(e=>t.observe(e)),u(48,(function(){s(r("#unread-items"),"js-hidden")}))};var p=function(e){document.getElementById("application-content").innerHTML=e,window.unreadItemsCount=document.getElementById("unread-items").dataset.unreaditems,window.unreadItemsElementCount=document.getElementById("unread-items__count");let t=r(".timeline__item"),n=t[unreadItemsCount-1];s(r("#unread-items"),"js-hidden"),s(r("#application-loading"),"js-hidden"),d(n,0,52,()=>{m(t)})};window.isScrollable=!0,window.lastReadTimestamps=localStorage.getItem("lastReadItems"),lastReadTimestamps||(lastReadTimestamps=0),o("GET","middleware.php?return=content&channel="+i("channel")+"&timestamp="+lastReadTimestamps,p),o("GET","middleware.php?return=channels",(function(e){document.getElementById("channels").innerHTML=e})),r(".js-overlay-toggle").forEach(e=>{e.addEventListener("click",()=>{s(r(e.dataset.target),"js-hidden"),c(document.querySelector("body"),document.querySelector("#application-content")),event.preventDefault()},!0)}),r(".js-reload").forEach(e=>{e.addEventListener("click",a,!0)}),r(".js-scroll-top").forEach(e=>{e.addEventListener("click",()=>{l()},!0)})}]);