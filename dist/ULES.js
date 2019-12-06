(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.ULES = factory());
}(this, (function () { 'use strict';

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css = ":root {\n  --easing: cubic-bezier(0.390, 0.575, 0.565, 1.000);\n  --duration: 1s;\n  --animation-name: fade-in;\n}\n\n.animate {\n\t-webkit-animation: var(--animation-name) var(--duration) var(--easing);\n\t        animation: var(--animation-name) var(--duration) var(--easing);\n}\n\n@-webkit-keyframes fade-in{0%{opacity:0}100%{opacity:1}}@keyframes fade-in{0%{opacity:0}100%{opacity:1}}\n@-webkit-keyframes fade-in-bottom{0%{-webkit-transform:translateY(50px);transform:translateY(50px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes fade-in-bottom{0%{-webkit-transform:translateY(50px);transform:translateY(50px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}\n@-webkit-keyframes fade-in-top{0%{-webkit-transform:translateY(-50px);transform:translateY(-50px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes fade-in-top{0%{-webkit-transform:translateY(-50px);transform:translateY(-50px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}\n@-webkit-keyframes fade-in-left{0%{-webkit-transform:translateX(-50px);transform:translateX(-50px);opacity:0}100%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}@keyframes fade-in-left{0%{-webkit-transform:translateX(-50px);transform:translateX(-50px);opacity:0}100%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}\n@-webkit-keyframes fade-in-right{0%{-webkit-transform:translateX(50px);transform:translateX(50px);opacity:0}100%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}@keyframes fade-in-right{0%{-webkit-transform:translateX(50px);transform:translateX(50px);opacity:0}100%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}\n@-webkit-keyframes fade-in-fwd{0%{-webkit-transform:translateZ(-80px);transform:translateZ(-80px);opacity:0}100%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}@keyframes fade-in-fwd{0%{-webkit-transform:translateZ(-80px);transform:translateZ(-80px);opacity:0}100%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}\n@-webkit-keyframes fade-in-bck{0%{-webkit-transform:translateZ(80px);transform:translateZ(80px);opacity:0}100%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}@keyframes fade-in-bck{0%{-webkit-transform:translateZ(80px);transform:translateZ(80px);opacity:0}100%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}\n@-webkit-keyframes fade-in-br{0%{-webkit-transform:translateX(50px) translateY(50px);transform:translateX(50px) translateY(50px);opacity:0}100%{-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0);opacity:1}}@keyframes fade-in-br{0%{-webkit-transform:translateX(50px) translateY(50px);transform:translateX(50px) translateY(50px);opacity:0}100%{-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0);opacity:1}}\n@-webkit-keyframes fade-in-bl{0%{-webkit-transform:translateX(-50px) translateY(50px);transform:translateX(-50px) translateY(50px);opacity:0}100%{-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0);opacity:1}}@keyframes fade-in-bl{0%{-webkit-transform:translateX(-50px) translateY(50px);transform:translateX(-50px) translateY(50px);opacity:0}100%{-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0);opacity:1}}\n@-webkit-keyframes fade-in-tr{0%{-webkit-transform:translateX(50px) translateY(-50px);transform:translateX(50px) translateY(-50px);opacity:0}100%{-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0);opacity:1}}@keyframes fade-in-tr{0%{-webkit-transform:translateX(50px) translateY(-50px);transform:translateX(50px) translateY(-50px);opacity:0}100%{-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0);opacity:1}}\n@-webkit-keyframes fade-in-tl{0%{-webkit-transform:translateX(-50px) translateY(-50px);transform:translateX(-50px) translateY(-50px);opacity:0}100%{-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0);opacity:1}}@keyframes fade-in-tl{0%{-webkit-transform:translateX(-50px) translateY(-50px);transform:translateX(-50px) translateY(-50px);opacity:0}100%{-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0);opacity:1}}\n";
  styleInject(css);

  function io() {
    return {
      start: function start() {
        var options = {
          rootMargin: '0px',
          threshold: 0.2
        };
        var observer = new IntersectionObserver(callback, options);
        var itemsToObserve = document.querySelectorAll('.lazy');

        function callback(entries, observer) {
          entries.forEach(function (entry) {
            if (entry.intersectionRatio > 0) {
              entry.target.classList.add('animate');
              observer.unobserve(entry.target);
            } else {
              console.log('Not intersecting');
            }
          });
        }

        itemsToObserve.forEach(function (item) {
          if (item.dataset.direction) {
            item.style.setProperty('--animation-name', "fade-in-".concat(item.dataset.direction));
          }

          if (item.dataset.duration) {
            item.style.setProperty('--duration', item.dataset.duration);
          }

          if (item.dataset.easing) {
            item.style.setProperty('--easing', item.dataset.easing);
          }

          observer.observe(item);
        });
      }
    };
  }

  function ULES() {
    return {
      io: io
    };
  }

  return ULES;

})));
