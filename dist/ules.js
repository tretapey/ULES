(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Ules = factory());
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

  var css = ":root {\n  --easing: cubic-bezier(0.390, 0.575, 0.565, 1.000);\n  --duration: 1s;\n  --animation-name: fade-in;\n}\n\n.animate {\n\t-webkit-animation: var(--animation-name) var(--duration) var(--easing);\n\t        animation: var(--animation-name) var(--duration) var(--easing);\n}\n\n.ules-io {\n  opacity: 0;\n}\n\n.ules-io.ules-io-done {\n  opacity: 1;\n}\n\n@-webkit-keyframes fade-in{0%{opacity:0}100%{opacity:1}}@keyframes fade-in{0%{opacity:0}100%{opacity:1}}\n@-webkit-keyframes fade-in-bottom{0%{-webkit-transform:translateY(50px);transform:translateY(50px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes fade-in-bottom{0%{-webkit-transform:translateY(50px);transform:translateY(50px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}\n@-webkit-keyframes fade-in-top{0%{-webkit-transform:translateY(-50px);transform:translateY(-50px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes fade-in-top{0%{-webkit-transform:translateY(-50px);transform:translateY(-50px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}\n@-webkit-keyframes fade-in-left{0%{-webkit-transform:translateX(-50px);transform:translateX(-50px);opacity:0}100%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}@keyframes fade-in-left{0%{-webkit-transform:translateX(-50px);transform:translateX(-50px);opacity:0}100%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}\n@-webkit-keyframes fade-in-right{0%{-webkit-transform:translateX(50px);transform:translateX(50px);opacity:0}100%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}@keyframes fade-in-right{0%{-webkit-transform:translateX(50px);transform:translateX(50px);opacity:0}100%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}\n@-webkit-keyframes fade-in-fwd{0%{-webkit-transform:translateZ(-80px);transform:translateZ(-80px);opacity:0}100%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}@keyframes fade-in-fwd{0%{-webkit-transform:translateZ(-80px);transform:translateZ(-80px);opacity:0}100%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}\n@-webkit-keyframes fade-in-bck{0%{-webkit-transform:translateZ(80px);transform:translateZ(80px);opacity:0}100%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}@keyframes fade-in-bck{0%{-webkit-transform:translateZ(80px);transform:translateZ(80px);opacity:0}100%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}\n@-webkit-keyframes fade-in-br{0%{-webkit-transform:translateX(50px) translateY(50px);transform:translateX(50px) translateY(50px);opacity:0}100%{-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0);opacity:1}}@keyframes fade-in-br{0%{-webkit-transform:translateX(50px) translateY(50px);transform:translateX(50px) translateY(50px);opacity:0}100%{-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0);opacity:1}}\n@-webkit-keyframes fade-in-bl{0%{-webkit-transform:translateX(-50px) translateY(50px);transform:translateX(-50px) translateY(50px);opacity:0}100%{-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0);opacity:1}}@keyframes fade-in-bl{0%{-webkit-transform:translateX(-50px) translateY(50px);transform:translateX(-50px) translateY(50px);opacity:0}100%{-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0);opacity:1}}\n@-webkit-keyframes fade-in-tr{0%{-webkit-transform:translateX(50px) translateY(-50px);transform:translateX(50px) translateY(-50px);opacity:0}100%{-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0);opacity:1}}@keyframes fade-in-tr{0%{-webkit-transform:translateX(50px) translateY(-50px);transform:translateX(50px) translateY(-50px);opacity:0}100%{-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0);opacity:1}}\n@-webkit-keyframes fade-in-tl{0%{-webkit-transform:translateX(-50px) translateY(-50px);transform:translateX(-50px) translateY(-50px);opacity:0}100%{-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0);opacity:1}}@keyframes fade-in-tl{0%{-webkit-transform:translateX(-50px) translateY(-50px);transform:translateX(-50px) translateY(-50px);opacity:0}100%{-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0);opacity:1}}\n";
  styleInject(css);

  function io(_ref) {
    var direction = _ref.direction,
        duration = _ref.duration,
        easing = _ref.easing,
        threshold = _ref.threshold;

    if (!threshold) {
      threshold = 0.2;
    }

    var options = {
      root: null,
      rootMargin: '0px',
      threshold: threshold
    };
    var itemsToObserve = document.querySelectorAll('.ules-io');
    var observer;

    function callback(entries, observer) {
      entries.forEach(function (entry) {
        if (entry.intersectionRatio > 0) {
          if (entry.target.tagName === 'IMG' && entry.target.dataset.src) {
            entry.target.src = entry.target.dataset.src;
          }

          entry.target.classList.add('animate');
          setTimeout(function () {
            return entry.target.classList.add('ules-io-done');
          }, duration ? duration : 1000);
          observer.unobserve(entry.target);
        }
      });
    }

    if (!('IntersectionObserver' in window) || !('IntersectionObserverEntry' in window) || !('intersectionRatio' in window.IntersectionObserverEntry.prototype)) {
      var debounce = function debounce(func) {
        var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
        var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        var timeout;
        return function () {
          var context = this,
              args = arguments;

          var later = function later() {
            timeout = null;
            if (!immediate) func.apply(context, args);
          };

          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
        };
      };

      var checkSlide = function checkSlide(e) {
        itemsToObserve.forEach(function (item) {
          var slideInAt = window.scrollY + window.innerHeight - item.height * threshold;
          var isShown = slideInAt > item.offsetTop;

          if (isShown) {
            if (entry.target.tagName === 'IMG' && entry.target.dataset.src) {
              entry.target.src = entry.target.dataset.src;
            }

            item.classList.add('animate');
            setTimeout(function () {
              return item.classList.add('ules-io-done');
            }, duration ? duration : 1000);
          }
        });
      };

      window.addEventListener('scroll', debounce(checkSlide));
    } else {
      observer = new IntersectionObserver(callback, options);
    }

    itemsToObserve.forEach(function (item) {
      if (direction) {
        item.style.setProperty('--animation-name', "fade-in-".concat(direction));
      } else if (item.dataset.direction) {
        item.style.setProperty('--animation-name', "fade-in-".concat(item.dataset.direction));
      }

      if (duration) {
        item.style.setProperty('--duration', duration);
      } else if (item.dataset.duration) {
        item.style.setProperty('--duration', item.dataset.duration);
      }

      if (easing) {
        item.style.setProperty('--easing', easing);
      } else if (item.dataset.easing) {
        item.style.setProperty('--easing', item.dataset.easing);
      }

      if (observer) {
        observer.observe(item);
      }
    });
  }

  var ules = {
    io: io
  };

  return ules;

})));
