(window.blocksyJsonP=window.blocksyJsonP||[]).push([[6],{10:function(e,t,r){"use strict";function n(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,"a",(function(){return i}));var i=function(e){return e&&n(e.querySelectorAll('[class*="ct-image-container"].ct-lazy')).map((function(e){e.querySelector("img")&&(Array.from(e.parentNode.querySelectorAll('[class*="ct-image-container"] > img')).map((function(e){e.setAttribute("src",e.dataset.ctLazy),e.dataset.ctLazySet&&e.setAttribute("srcset",e.dataset.ctLazySet)})),e.classList.remove("ct-lazy"),e.classList.add("ct-lazy-loaded"))}))}},11:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return i}));var n=r(12),o=function(e){Object(n.enableBodyScroll)(e,{reserveScrollBarGap:!0})},i=function(e){Object(n.disableBodyScroll)(e,{reserveScrollBarGap:!0})}},12:function(e,t,r){var n,o,i;o=[t],void 0===(i="function"==typeof(n=function(e){"use strict";function t(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}Object.defineProperty(e,"__esModule",{value:!0});var r=!1;if("undefined"!=typeof window){var n={get passive(){r=!0}};window.addEventListener("testPassive",null,n),window.removeEventListener("testPassive",null,n)}function o(e){return s.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))}function i(e){var t=e||window.event;return!!o(t.target)||1<t.touches.length||(t.preventDefault&&t.preventDefault(),!1)}function c(){setTimeout((function(){void 0!==f&&(document.body.style.paddingRight=f,f=void 0),void 0!==d&&(document.body.style.overflow=d,d=void 0)}))}var a="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&1<window.navigator.maxTouchPoints),s=[],l=!1,u=-1,d=void 0,f=void 0;e.disableBodyScroll=function(e,n){if(a){if(!e)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(e&&!s.some((function(t){return t.targetElement===e}))){var c={targetElement:e,options:n||{}};s=[].concat(t(s),[c]),e.ontouchstart=function(e){1===e.targetTouches.length&&(u=e.targetTouches[0].clientY)},e.ontouchmove=function(t){var r,n,c,a;1===t.targetTouches.length&&(n=e,a=(r=t).targetTouches[0].clientY-u,o(r.target)||(n&&0===n.scrollTop&&0<a||(c=n)&&c.scrollHeight-c.scrollTop<=c.clientHeight&&a<0?i(r):r.stopPropagation()))},l||(document.addEventListener("touchmove",i,r?{passive:!1}:void 0),l=!0)}}else{g=n,setTimeout((function(){if(void 0===f){var e=!!g&&!0===g.reserveScrollBarGap,t=window.innerWidth-document.documentElement.clientWidth;e&&0<t&&(f=document.body.style.paddingRight,document.body.style.paddingRight=t+"px")}void 0===d&&(d=document.body.style.overflow,document.body.style.overflow="hidden")}));var m={targetElement:e,options:n||{}};s=[].concat(t(s),[m])}var g},e.clearAllBodyScrollLocks=function(){a?(s.forEach((function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null})),l&&(document.removeEventListener("touchmove",i,r?{passive:!1}:void 0),l=!1),s=[],u=-1):(c(),s=[])},e.enableBodyScroll=function(e){if(a){if(!e)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");e.ontouchstart=null,e.ontouchmove=null,s=s.filter((function(t){return t.targetElement!==e})),l&&0===s.length&&(document.removeEventListener("touchmove",i,r?{passive:!1}:void 0),l=!1)}else(s=s.filter((function(t){return t.targetElement!==e}))).length||c()}})?n.apply(t,o):n)||(e.exports=i)},35:function(e,t,r){"use strict";r.r(t),r.d(t,"mount",(function(){return L}));var n=r(2),o=r(1),i=r.n(o),c=r(0),a=r.n(c);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function m(){try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}}var g=function(){var e={shareEl:!1,closeOnScroll:!1,history:!1,hideAnimationDuration:0,showAnimationDuration:0},t=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=i()(".pswp")[0],o=i()(t),c=o,a=d(t.closest(".ct-product-view").querySelectorAll(".flexy-items .ct-image-container img:not(.zoomImg), .ct-product-view > .ct-image-container img:not(.zoomImg)")).map((function(e){return{img:e,src:e.closest("a")?e.closest("a").href:e.src,w:(e.closest("a")?e.closest("a").dataset.width:e.width)||e.width,h:(e.closest("a")?e.closest("a").dataset.height:e.width)||e.width,title:e.getAttribute("title")}}));if(1!==a.length||!a[0].img.closest("a")||a[0].img.closest("a").getAttribute("href")){var s=i.a.extend({index:0===r?0:r||i()(c).index(),addCaptionHTMLFn:function(e,t){return e.title?(t.children[0].textContent=e.title,!0):(t.children[0].textContent="",!1)}},e),l=new PhotoSwipe(n,PhotoSwipeUI_Default,a,s);l.init()}},r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.onlyZoom,n=void 0!==r&&r;d(document.querySelectorAll(".single-product .flexy-items .ct-image-container, .single-product .ct-product-view > .ct-image-container")).map((function(e){if((wp.customize&&wp.customize("has_product_single_lightbox")&&"yes"===wp.customize("has_product_single_lightbox")()||!wp.customize)&&!n&&e.addEventListener("click",(function(r){r.preventDefault();var n=document.querySelector(".single-product .flexy-pills");if(n){var o=Array.from(n.children).indexOf(n.querySelector(".active"));document.querySelector(".ct-product-view .woocommerce-product-gallery__trigger")||window.PhotoSwipe&&t(e,o)}else window.PhotoSwipe&&t(e,d(e.parentNode.children).indexOf(e))})),i.a.fn.zoom&&(wp.customize&&wp.customize("has_product_single_zoom")&&"yes"===wp.customize("has_product_single_zoom")()||!wp.customize)){var r=e.getBoundingClientRect();i()(e).zoom(l(l({url:e.href,touch:!1,duration:50},r.width>parseFloat(e.dataset.width)||r.height>parseFloat(e.dataset.height)?{magnify:2}:{}),m()?{on:"toggle"}:{}))}}));var o=document.querySelector(".ct-product-view > .woocommerce-product-gallery__trigger");o&&o.addEventListener("click",(function(e){if(e.preventDefault(),document.querySelector(".single-product .ct-product-view > .ct-image-container")&&window.PhotoSwipe&&t(document.querySelector(".single-product .ct-product-view > .ct-image-container")),document.querySelector(".single-product .flexy-items .ct-image-container")){var r=document.querySelector(".single-product .flexy-pills"),n=Array.from(r.children).indexOf(r.querySelector(".active"));window.PhotoSwipe&&t(document.querySelector(".single-product .flexy-items").children[n].firstElementChild,n)}}))};if(r(),i.a&&i.a.fn&&i.a.fn.wc_variations_image_update){var n=i.a.fn.wc_variations_image_update,o=function(e){var t=e.context,o=e.variation,i=e.args;if(t[0].closest(".single-product").querySelector(".ct-product-view > .ct-image-container")){var c=t[0].closest(".single-product").querySelector(".ct-product-view > .ct-image-container");if(c.querySelector(".zoomImg")&&c.querySelector(".zoomImg").remove(),o){if(o.image&&o.image.src&&o.image.src.length>0){var a=c.querySelector("img");c.classList.remove("ct-no-image"),c.querySelector("img")||(a=document.createElement("img")).classList.add("ct-variation-image"),a.classList.contains("ct-variation-image")||a.dataset.originalSrc||(c.dataset.originalHref=c.href,a.src&&(a.dataset.originalSrc=a.src),a.srcset&&(a.dataset.originalSrcSet=a.srcset),a.sizes&&(a.dataset.originalSizes=a.sizes)),c.href=o.image.full_src,o.image.srcset&&(a.srcset=o.image.srcset),o.image.sizes&&(a.sizes=o.image.sizes),a.src=o.image.src,c.appendChild(a)}}else{var s=c.querySelector("img");s&&c.querySelector(".ct-variation-image")?(s.remove(),c.classList.add("ct-no-image")):(c.href=c.dataset.originalHref||c.href,(s.dataset.originalSrc||s.src)&&(s.src=s.dataset.originalSrc||s.src),(s.dataset.originalSrcSet||s.srcset)&&(s.srcset=s.dataset.originalSrcSet||s.srcset),(s.dataset.originalSizes||s.sizes)&&(s.sizes=s.dataset.originalSizes||s.sizes))}return r({onlyZoom:!0}),void(n&&n.apply(t,i))}if(t[0].closest(".single-product").querySelector(".flexy-pills")){var l=function(){t[0].closest(".single-product").querySelector(".flexy-container").dataset.flexy||t[0].closest(".single-product").querySelector(".flexy-pills").firstElementChild.click()},u=function(){var e=t[0].closest(".single-product").querySelector(".flexy-pills [data-original-src]"),r=t[0].closest(".single-product").querySelector(".flexy-items [data-original-src]");e&&(e.parentNode.href=e.parentNode.dataset.originalHref||e.parentNode.href,(e.dataset.originalSrc||e.src)&&(e.src=e.dataset.originalSrc||e.src),(e.dataset.originalSrcSet||e.srcset)&&(e.srcset=e.dataset.originalSrcSet||e.srcset),(e.dataset.originalSizes||e.sizes)&&(e.sizes=e.dataset.originalSizes||e.sizes),r.parentNode.href=r.parentNode.dataset.originalHref||r.parentNode.href,(r.dataset.originalSrc||r.src)&&(r.src=r.dataset.originalSrc||r.src),(r.dataset.originalSrcSet||r.srcset)&&(r.srcset=r.dataset.originalSrcSet||r.srcset),(r.dataset.originalSizes||r.sizes)&&(r.sizes=r.dataset.originalSizes||r.sizes))};if(!o)return l(),u(),void(n&&n.apply(t,i));u();var f=t[0].closest(".single-product").querySelector('.flexy-items [srcset*="'.concat(o.image.src,'"]'));if(f){var m=t[0].closest(".single-product").querySelector(".flexy-pills").children[d(t[0].closest(".single-product").querySelector(".flexy-items").children).indexOf(f.closest("div"))];m&&m.click()}else{l();var g=t[0].closest(".single-product").querySelector(".flexy-pills").firstElementChild.firstElementChild,p=t[0].closest(".single-product").querySelector(".flexy-items").firstElementChild.querySelector(".ct-image-container img");g.dataset.originalSrc||(g.parentNode.dataset.originalHref=g.parentNode.href,g.dataset.originalSrc=g.src,g.dataset.originalSrcSet=g.srcset,g.dataset.originalSizes=g.sizes,p.parentNode.dataset.originalHref=p.parentNode.href,p.dataset.originalSrc=p.src,p.dataset.originalSrcSet=p.srcset,p.dataset.originalSizes=p.sizes),g.parentNode.href=o.image.full_src,o.image.srcset&&(g.srcset=o.image.srcset),o.image.sizes&&(g.sizes=o.image.sizes),g.src=o.image.src,p.parentNode.href=o.image.full_src,o.image.srcset&&(p.srcset=o.image.srcset),o.image.sizes&&(p.sizes=o.image.sizes),p.src=o.image.src,l()}n&&n.apply(t,i)}else n&&n.apply(t,i)};i.a.fn.wc_variations_image_update=function(e){var t=arguments,r=this;if(window.wc_additional_variation_images_local&&parseInt(e.variation_id)!==parseInt(document.querySelector(".ct-product-view").dataset.currentVariation)){var n=new FormData;return n.append("action","blocksy_get_product_view_for_variation"),n.append("variation_id",e.variation_id),void fetch(ct_localizations.ajax_url,{method:"POST",body:n}).then((function(e){return e.json()})).then((function(n){var i=n.success,c=n.data;if(i)return jQuery(document.querySelector(".ct-product-view")).replaceWith(c.html),void setTimeout((function(){a.a.trigger("ct:flexy:update"),setTimeout((function(){o({context:r,args:t,variation:e})}))}));o({context:r,args:t,variation:e})}))}o({context:this,args:arguments,variation:e})}}};function p(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var v=function(){return p(document.querySelectorAll(".quantity")).map((function(e){e.querySelector(".ct-increase")&&!e.querySelector(".ct-increase").ctHasListener&&(e.querySelector(".ct-increase").ctHasListener=!0,e.querySelector(".ct-increase").addEventListener("click",(function(t){var r=e.querySelector("input"),n=r.getAttribute("max")?parseInt(r.getAttribute("max"),0):1/0,o=parseInt(r.value,10)||0;r.value=o<n?o+1:n,i()(r).trigger("change")}))),e.querySelector(".ct-decrease")&&!e.querySelector(".ct-decrease").ctHasListener&&(e.querySelector(".ct-decrease").ctHasListener=!0,e.querySelector(".ct-decrease").addEventListener("click",(function(t){var r=e.querySelector("input"),n=r.getAttribute("min")?parseInt(r.getAttribute("min"),0):0,o=parseInt(r.value,10)||0;r.value=o>n?o-1:n,i()(r).trigger("change")})))}))},h=function(){i.a&&i()(document.body).on("updated_cart_totals",v),v()};function S(e){return function(e){if(Array.isArray(e))return w(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return w(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function b(e){if(i.a){var t=e.closest("form"),r=t.find(".button"),n=t.attr("action"),o=t.attr("method");void 0!==o&&""!=o||(o="POST");var c=new FormData(t[0]);c.append(r.attr("name"),r.val());var a=S(c.entries()).reduce((function(e,t){return e+(t[0].indexOf("quantity")>-1?parseInt(t[1],10):0)}),0);t.closest(".quick-view-modal").length&&(t.closest(".quick-view-modal").find(".ct-quick-add").removeClass("added"),t.closest(".quick-view-modal").find(".ct-quick-add").addClass("loading")),r.removeClass("added"),r.addClass("loading"),i()(document.body).trigger("adding_to_cart",[r,{}]),fetch(n,{method:o,body:c}).then((function(e){return e.text()})).then((function(e,n,o){var c=document.createElement("div");c.innerHTML=e;var s=c.querySelector(".woocommerce-error");if(s){var l=document.querySelector(".woocommerce-notices-wrapper");return l.querySelector(".woocommerce-error")&&l.querySelector(".woocommerce-error").remove(),void(l&&l.appendChild(s))}i()(document.body).trigger("wc_fragment_refresh"),i.a.ajax({url:wc_cart_fragments_params.wc_ajax_url.toString().replace("%%endpoint%%","get_refreshed_fragments"),type:"POST",success:function(e){e&&e.fragments&&(i.a.each(e.fragments,(function(e,t){i()(e).replaceWith(t)})),i()(document.body).trigger("wc_fragments_refreshed")),t.closest(".quick-view-modal").length&&(t.closest(".quick-view-modal").find(".ct-quick-add").addClass("added"),t.closest(".quick-view-modal").find(".ct-quick-add").removeClass("loading")),i()(document.body).trigger("added_to_cart",[e.fragments,e.cart_hash,r,a])}})})).catch((function(){return r.removeClass("loading")})).finally((function(){return r.removeClass("loading")}))}}var q=function(){return function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0],i.a&&(i()(".cart").toArray().map((function(e){e.closest(".product-type-external")||e.hasAddToCartListener||(e.hasAddToCartListener=!0,i()(e).on("submit",(function(e){e.preventDefault(),b(i()(this))})))})),i()(".quick-view-modal .ct-quick-add").toArray().map((function(e){e.hasAddToCartListener||(e.hasAddToCartListener=!0,i()(e).on("click",(function(t){t.preventDefault(),e.closest(".product-type-external")?e.closest(".product-type-external").querySelector(".cart").submit():b(i()(this).closest(".quick-view-modal").find(".cart"))})))})))}()},_=r(10),A=r(11);function z(e){return function(e){if(Array.isArray(e))return O(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return O(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return O(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var x=!1,j=function(){z(document.querySelectorAll(".ct-header-cart")).map((function(e){setTimeout((function(){Object(_.a)(e)})),document.querySelector("#woo-cart-panel")&&Object(_.a)(document.querySelector("#woo-cart-panel"))}))},E=function(){if(i.a){x||(j(),x=!0,i()(document.body).on("adding_to_cart",(function(){return z(document.querySelectorAll(".ct-header-cart")).map((function(e){e.classList.remove("ct-added"),e.classList.add("ct-adding")}))})),i()(document.body).on("click",".remove_from_cart_button",(function(){if(document.querySelector("#woo-cart-panel.active .ct-panel-content")){var e=document.querySelector("#woo-cart-panel .ct-panel-content");e&&Object(A.b)(e)}})),i()(document.body).on("wc_fragments_loaded",(function(){if(setTimeout((function(){return a.a.trigger("ct:images:lazyload:update")})),setTimeout((function(){return a.a.trigger("ct:popper-elements:update")})),setTimeout((function(){return a.a.trigger("blocksy:frontend:init")})),document.querySelector("#woo-cart-panel.active .ct-panel-content")){var e=document.querySelector("#woo-cart-panel .ct-panel-content");e&&Object(A.a)(e)}})),i()(document.body).on("wc_fragments_refreshed",(function(){j()})),i()(document.body).on("added_to_cart",(function(e,t,r,n,o){n=n[0],z(document.querySelectorAll(".ct-header-cart")).map((function(e){e.classList.remove("ct-adding"),e.classList.add("ct-added"),(!document.body.classList.contains("single-product")&&e.querySelector('[data-auto-open*="archive"]')||document.body.classList.contains("single-product")&&e.querySelector('[data-auto-open*="product"]'))&&setTimeout((function(){e.querySelector("[data-auto-open]").click()}),500),document.querySelector(".ct-cart-content")&&(e.querySelector(".ct-cart-content")&&(e.querySelector(".ct-cart-content").innerHTML=Object.values(t)[0],e.querySelector(".ct-cart-total")&&e.querySelector(".ct-cart-content .woocommerce-mini-cart__total .woocommerce-Price-amount")&&(e.querySelector(".ct-cart-total").firstElementChild.innerHTML=e.querySelector(".ct-cart-content .woocommerce-mini-cart__total .woocommerce-Price-amount").innerHTML)),Object(_.a)(e)),j()}))})),i()(document.body).on("removed_from_cart",(function(e,t,r,n){return z(document.querySelectorAll(".ct-header-cart")).map((function(e){if(n)try{n[0].closest("li").parentNode.removeChild(n[0].closest("li"))}catch(e){}}))})))}},L=function(){Object(n.a)([{els:"body.single-product",load:function(){return new Promise((function(e){return e({mount:g})}))},forcedEvents:["ct:flexy:update"]},{els:".quantity .ct-increase",load:function(){return new Promise((function(e){return e({mount:h})}))},events:["ct:add-to-cart:update"],forcedEvents:["ct:add-to-cart:quantity"]},{els:"body.ct-ajax-add-to-cart",load:function(){return new Promise((function(e){return e({mount:q})}))},events:["ct:add-to-cart:update"],forcedEvents:["ct:flexy:update"]},{els:".ct-header-cart",load:function(){return new Promise((function(e){return e({mount:E})}))},events:["ct:header:update"]}],{immediate:!0})}}}]);