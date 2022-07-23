function FixedCardWidget(e,t,n){if("id"===e)var o=document.getElementById(t);else o=document.getElementsByClassName(t)[n];o&&(o.className.indexOf("fixed-card-widget")>-1?RemoveFixedCardWidget():(RemoveFixedCardWidget(),CreateQuitBox(),o.classList.add("fixed-card-widget")))}function CreateQuitBox(){document.getElementById("aside-content").insertAdjacentHTML("beforebegin",'<div id="quit-box" onclick="RemoveFixedCardWidget()"></div>')}function RemoveFixedCardWidget(){var e=document.querySelectorAll(".fixed-card-widget");if(e)for(i=0;i<e.length;i++)e[i].classList.remove("fixed-card-widget");var t=document.getElementById("quit-box");t&&t.remove()}function refreshCache(){"serviceWorker"in window.navigator&&navigator.serviceWorker.controller?confirm("是否确定刷新全站缓存")&&navigator.serviceWorker.controller.postMessage("refresh"):GLOBAL_CONFIG.Snackbar?btf.snackbarShow("ServiceWorker未激活,请刷新浏览器"):alert("ServiceWorker未激活,请刷新浏览器")}RemoveFixedCardWidget(),navigator.serviceWorker.addEventListener("message",(e=>{"success"===e.data&&window.location.reload(!0)}));let kk={showRightMenu:function(e,t=0,n=0){let o=$("#rightMenu");o.css("top",t+"px").css("left",n+"px"),e?o.show():o.hide()},switchDarkMode:function(){"light"==("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme(),"object"==typeof FB&&window.loadFBComment(),window.DISQUS&&document.getElementById("disqus_thread").children.length&&setTimeout((()=>window.disqusReset()),200)},copySelect:function(){document.execCommand("Copy",!1,null),GLOBAL_CONFIG.Snackbar?btf.snackbarShow("你的剪切板已被窝占领惹~"):console.log("你的剪切板已被窝占领惹~")},scrollToTop:function(){btf.scrollToDest(0,500)}};if(!navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)){let e=$("#rightMenu").width(),t=$("#rightMenu").height();window.oncontextmenu=function(n){$(".rightMenu-group.hide").hide(),document.getSelection().toString()&&$("#menu-text").show();let o=n.clientX+10,r=n.clientY;return o+e>window.innerWidth&&(o-=e),r+t>window.innerHeight&&(r-=t),kk.showRightMenu(!0,r,o),!1}}function categoriesBarActive(){var e=window.location.pathname;if(e=decodeURIComponent(e),console.log(e),"/"==e)document.querySelector("#category-bar")&&document.getElementById("首页").classList.add("select");else{var t=/\/categories\/.*?\//.test(e);if(console.log(t),t){var n=e.split("/");console.log(n[2]);var o=n[2];document.querySelector("#category-bar")&&document.getElementById(o).classList.add("select")}}}function tagsBarActive(){var e=window.location.pathname;if("/"==(e=decodeURIComponent(e)))document.querySelector("#tags-bar")&&document.getElementById("首页").classList.add("select");else if(/\/tags\/.*?\//.test(e)){var t=e.split("/")[2];document.querySelector("#category-bar")&&document.getElementById(t).classList.add("select")}}function topCategoriesBarScroll(){if(document.getElementById("category-bar-items")){let e=document.getElementById("category-bar-items");e.addEventListener("mousewheel",(function(t){let n=-t.wheelDelta/2;e.scrollLeft+=n,t.preventDefault()}),!1)}}function getNowURL(){return location.protocol+"//"+location.host+location.pathname}window.addEventListener("click",(function(){kk.showRightMenu(!1)})),$("#menu-backward").on("click",(function(){window.history.back()})),$("#menu-forward").on("click",(function(){window.history.forward()})),$("#menu-refresh").on("click",(function(){window.location.reload()})),$("#menu-darkmode").on("click",kk.switchDarkMode),$("#menu-top").on("click",kk.scrollToTop),$("#menu-home").on("click",(function(){window.location.href=window.location.origin})),categoriesBarActive(),topCategoriesBarScroll(),tagsBarActive(),
/*!
 * clipboard.js v2.0.10
 * https://clipboardjs.com/
 */
function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ClipboardJS=t():e.ClipboardJS=t()}(this,(function(){return function(){var e={686:function(e,t,n){"use strict";n.d(t,{default:function(){return k}});var o=n(279),r=n.n(o),i=n(370),c=n.n(i),a=n(817),u=n.n(a);function l(e){try{return document.execCommand(e)}catch(e){return!1}}var d=function(e){var t=u()(e);return l("cut"),t};function s(e){var t="rtl"===document.documentElement.getAttribute("dir"),n=document.createElement("textarea");n.style.fontSize="12pt",n.style.border="0",n.style.padding="0",n.style.margin="0",n.style.position="absolute",n.style[t?"right":"left"]="-9999px";var o=window.pageYOffset||document.documentElement.scrollTop;return n.style.top="".concat(o,"px"),n.setAttribute("readonly",""),n.value=e,n}var f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body},n="";if("string"==typeof e){var o=s(e);t.container.appendChild(o),n=u()(o),l("copy"),o.remove()}else n=u()(e),l("copy");return n};function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}function g(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function b(e,t){var n="data-clipboard-".concat(e);if(t.hasAttribute(n))return t.getAttribute(n)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(i,e);var t,n,o,r=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=v(e);if(t){var r=v(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return g(this,n)}}(i);function i(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(n=r.call(this)).resolveOptions(t),n.listenClick(e),n}return t=i,n=[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===p(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=c()(e,"click",(function(e){return t.onClick(e)}))}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget,n=this.action(t)||"copy",o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.action,n=void 0===t?"copy":t,o=e.container,r=e.target,i=e.text;if("copy"!==n&&"cut"!==n)throw new Error('Invalid "action" value, use either "copy" or "cut"');if(void 0!==r){if(!r||"object"!==m(r)||1!==r.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===n&&r.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===n&&(r.hasAttribute("readonly")||r.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')}return i?f(i,{container:o}):r?"cut"===n?d(r):f(r,{container:o}):void 0}({action:n,container:this.container,target:this.target(t),text:this.text(t)});this.emit(o?"success":"error",{action:n,text:o,trigger:t,clearSelection:function(){t&&t.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(e){return b("action",e)}},{key:"defaultTarget",value:function(e){var t=b("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return b("text",e)}},{key:"destroy",value:function(){this.listener.destroy()}}],o=[{key:"copy",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body};return f(e,t)}},{key:"cut",value:function(e){return d(e)}},{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach((function(e){n=n&&!!document.queryCommandSupported(e)})),n}}],n&&y(t.prototype,n),o&&y(t,o),i}(r()),k=w},828:function(e){if("undefined"!=typeof Element&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}e.exports=function(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}},438:function(e,t,n){var o=n(828);function r(e,t,n,o,r){var c=i.apply(this,arguments);return e.addEventListener(n,c,r),{destroy:function(){e.removeEventListener(n,c,r)}}}function i(e,t,n,r){return function(n){n.delegateTarget=o(n.target,t),n.delegateTarget&&r.call(e,n)}}e.exports=function(e,t,n,o,i){return"function"==typeof e.addEventListener?r.apply(null,arguments):"function"==typeof n?r.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return r(e,t,n,o,i)})))}},879:function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},370:function(e,t,n){var o=n(879),r=n(438);e.exports=function(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!o.string(t))throw new TypeError("Second argument must be a String");if(!o.fn(n))throw new TypeError("Third argument must be a Function");if(o.node(e))return function(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}(e,t,n);if(o.nodeList(e))return function(e,t,n){return Array.prototype.forEach.call(e,(function(e){e.addEventListener(t,n)})),{destroy:function(){Array.prototype.forEach.call(e,(function(e){e.removeEventListener(t,n)}))}}}(e,t,n);if(o.string(e))return function(e,t,n){return r(document.body,e,t,n)}(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},817:function(e){e.exports=function(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var o=window.getSelection(),r=document.createRange();r.selectNodeContents(e),o.removeAllRanges(),o.addRange(r),t=o.toString()}return t}},279:function(e){function t(){}t.prototype={on:function(e,t,n){var o=this.e||(this.e={});return(o[e]||(o[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var o=this;function r(){o.off(e,r),t.apply(n,arguments)}return r._=t,this.on(e,r,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),o=0,r=n.length;o<r;o++)n[o].fn.apply(n[o].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),o=n[e],r=[];if(o&&t)for(var i=0,c=o.length;i<c;i++)o[i].fn!==t&&o[i].fn._!==t&&r.push(o[i]);return r.length?n[e]=r:delete n[e],this}},e.exports=t,e.exports.TinyEmitter=t}},t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}return n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n(686)}().default}));const clipboard=new ClipboardJS("button#share-link",{text:function(){return document.title+"："+getNowURL()}});function RemoveFixedComment(){var e=document.querySelectorAll(".fixedcomment");if(e)for(i=0;i<e.length;i++)e[i].classList.remove("fixedcomment")}function AddFixedComment(){var e=document.getElementById("post-comment"),t=document.getElementById("quit-board");e.classList.add("fixedcomment"),t.classList.add("fixedcomment")}function CreateQuitBoard(){document.getElementById("post-comment").insertAdjacentHTML("beforebegin",'<div id="quit-board" onclick="RemoveFixedComment()"></div>')}function FixedCommentBtn(){var e=document.getElementById("post-comment");e&&(e.className.indexOf("fixedcomment")>-1?RemoveFixedComment():(CreateQuitBoard(),AddFixedComment()))}clipboard.on("success",(function(){btf.snackbarShow("成功复制本页的分享链接，快去粘贴吧~")})),clipboard.on("error",(function(){btf.snackbarShow("复制失败")})),kk.copyURL=function(){btf.snackbarShow("成功复制本页的分享链接，快去粘贴吧~"),new ClipboardJS("#share-chuckle",{text:function(){return document.title+"："+getNowURL()}})},$("#share-chuckle").on("click",kk.copyURL),kk.postURL=function(){btf.snackbarShow("成功复制本页的分享链接，快去粘贴吧~"),new ClipboardJS("#share-post",{text:function(){return document.title+"："+getNowURL()}})},RemoveFixedComment();