import './io.css'

export default function io({ direction, duration, easing, threshold }) {
  if (!threshold) {
    threshold = 0.2
  }
  const options = {
    root: null,
    rootMargin: '0px',
    threshold,
  }

  const itemsToObserve = document.querySelectorAll('.ules-io')
  let observer

  function callback(entries, observer) {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        if (entry.target.tagName === 'IMG' && entry.target.dataset.src) {
          entry.target.src = entry.target.dataset.src
        } 
        entry.target.classList.add('animate')
        setTimeout(
          () => entry.target.classList.add('ules-io-done'),
          duration ? duration : 1000
        )
        observer.unobserve(entry.target)
      }
    })
  }

  if (
    !('IntersectionObserver' in window) ||
    !('IntersectionObserverEntry' in window) ||
    !('intersectionRatio' in window.IntersectionObserverEntry.prototype)
  ) {
    function debounce(func, wait = 20, immediate = true) {
      let timeout
      return function() {
        let context = this,
          args = arguments
        let later = function() {
          timeout = null
          if (!immediate) func.apply(context, args)
        }
        let callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
      }
    }

    function checkSlide(e) {
      itemsToObserve.forEach(item => {
        const slideInAt =
          window.scrollY + window.innerHeight - item.height * threshold
        const isShown = slideInAt > item.offsetTop
        if (isShown) {
          if (entry.target.tagName === 'IMG' && entry.target.dataset.src) {
            entry.target.src = entry.target.dataset.src
          }
          item.classList.add('animate')
          setTimeout(
            () => item.classList.add('ules-io-done'),
            duration ? duration : 1000
          )
        }
      })
    }

    window.addEventListener('scroll', debounce(checkSlide))
  } else {
    observer = new IntersectionObserver(callback, options)
  }

  itemsToObserve.forEach(item => {
    if (direction) {
      item.style.setProperty('--animation-name', `fade-in-${direction}`)
    } else if (item.dataset.direction) {
      item.style.setProperty(
        '--animation-name',
        `fade-in-${item.dataset.direction}`
      )
    }

    if (duration) {
      item.style.setProperty('--duration', duration)
    } else if (item.dataset.duration) {
      item.style.setProperty('--duration', item.dataset.duration)
    }

    if (easing) {
      item.style.setProperty('--easing', easing)
    } else if (item.dataset.easing) {
      item.style.setProperty('--easing', item.dataset.easing)
    }

    if (observer) {
      observer.observe(item)
    }
  })
}
