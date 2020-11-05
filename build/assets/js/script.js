document.addEventListener("DOMContentLoaded",function(){function e(e,t){e.classList.add(t)}function t(e,t){e.classList.remove(t)}function n(e,t){window.scrollTo(e,t)}function l(e,t){var n=document.querySelector(e).getAttribute(t);return n}function o(){var t=document.getElementsByTagName("body")[0];e(t,"js")}function s(e){var t=document.getElementsByClassName(e);for(i=0;i<t.length;i++)t[i].onclick=function(e){var t=this.getAttribute("data-target");a(t,e)}}function a(n,l){var o=document.getElementById(n);o.classList.contains("js-visible")?(e(o,"js-hidden"),t(o,"js-visible"),t(E,"js-fx")):(t(o,"js-hidden"),e(o,"js-visible"),e(E,"js-fx")),y("content"),l.preventDefault()}function c(e,t,n){c=document.getElementById(e),c.classList.add("sticky"),stickyHeight=c.clientHeight+"px",document.getElementById(t).style.setProperty(n,stickyHeight)}function m(e){overlayElement=document.getElementById(e),overlayElement.style.top=stickyHeight}function d(n){var l="themeswitch.php?theme=",o=document.getElementsByTagName("html")[0];switchingElement=document.getElementById(n),switchingElement.onclick=function(){xmlhttp=new XMLHttpRequest,this.checked?(e(o,T),t(o,I),xmlhttp.open("GET",l+T,!0),xmlhttp.send(),localStorage.setItem("theme",T),console.log("localStorage Theme is: "+T)):(e(o,I),t(o,T),xmlhttp.open("GET","themeswitch.php?theme="+I,!0),xmlhttp.send(),localStorage.setItem("theme",I),console.log("localStorage Theme is: "+I))}}function r(e){elementContainer=document.getElementById(e),elementContainer.addEventListener("click",u,!1)}function u(e){e.target!==e.currentTarget&&(channelLink=e.target.getAttribute("href"),t(E,"js-fx"),g(channelLink),e.preventDefault()),e.stopPropagation()}function g(o){if(""===o){var s=localStorage.getItem("channel");if(null!==s)var o=s}document.getElementById(v).classList.remove("js-hidden"),renderFile="render-feeds.php",xmlhttp=new XMLHttpRequest,xmlhttp.open("GET",renderFile+o,!0),xmlhttp.send(),overlayContainer=document.getElementById("application-overlay"),e(overlayContainer,"js-hidden"),y("content"),xmlhttp.onreadystatechange=function(){function e(){p(x),lastItemTs?null===document.querySelector("#ts-"+lastItemTs)?(f("Not found"),localStorage.setItem("lastItemTs",latestItemTs)):lastItemTs<oldestItemInTimeline?(f("("+l("#ts-"+oldestItemInTimeline,"data-count")+")"),h("#ts-"+oldestItemInTimeline)):latestItemTs>lastItemTs&&(f(l("#ts-"+lastItemTs,"data-count")),h("#ts-"+lastItemTs)):(f("Welcome"),localStorage.setItem("lastItemTs",latestItemTs))}4===xmlhttp.readyState&&xmlhttp.readyState&&(outputContainer=document.getElementById("content"),outputContainer.innerHTML=xmlhttp.response,n(0,0),document.getElementById("application-overlay").classList.remove("js-visible"),document.getElementById(v).classList.add("js-hidden"),t(elementToFix,"js-fixed"),localStorage.setItem("channel",o),lastItemTs=localStorage.getItem("lastItemTs"),window.latestItemTs=l(x,"data-ts"),setTimeout(e(),100))}}function h(e){var t=document.querySelector(e).offsetTop,l=document.getElementById("application-header").clientHeight;n(0,t-l)}function p(e){var t=document.querySelectorAll(e);for(i=0;i<t.length;i++)t[i].onclick=function(e){localStorage.setItem("offsetTop",window.pageYOffset),localStorage.setItem("lastItemTs",this.getAttribute("data-ts"))},i==t.length-1&&(window.oldestItemInTimeline=t[i].getAttribute("data-ts"))}function f(e){badge="#unread-items",badgeValue="#unread-items__count",e>0||"string"==typeof e?(document.querySelector(badge).classList.remove("js-hidden"),document.querySelector(badge).classList.add("js-show"),document.querySelector(badgeValue).innerText=e):(document.querySelector(badge).classList.remove("js-show"),document.querySelector(badge).classList.add("js-hide"))}function y(l){elementToFix=document.getElementById(l),scrollY=window.pageYOffset,elementToFix.classList.contains("js-fixed")?(t(elementToFix,"js-fixed"),elementToFix.style.top="",n(0,scrollYMem)):(e(elementToFix,"js-fixed"),elementToFix.style.top="-"+scrollY+"px",scrollYMem=scrollY)}var I="light",T="dark",v="application-loading",E=document.getElementsByTagName("body")[0],x="#feed-items li",w=localStorage.getItem("theme"),S=document.getElementsByTagName("html")[0];null!==w&&(t(S,I),t(S,T),e(S,w),w===I&&(document.getElementById("theme-switcher").checked=!1),w===T&&(document.getElementById("theme-switcher").checked=!0)),window.addEventListener("scroll",function(e){scrollDepth=window.pageYOffset,scrollDepth<=0&&(f(),localStorage.setItem("lastItemTs",latestItemTs))}),o(),g(""),c("application-header","content","margin-top"),d("theme-switcher"),s("js-overlay-toggle"),m("application-overlay"),r("channels")});