import './io.css'

export default function io() {
  return {
    start() {
      const options = {
        rootMargin: '0px',
        threshold: 0.2,
      }

      const observer = new IntersectionObserver(callback, options)

      const itemsToObserve = document.querySelectorAll('.lazy')

      function callback(entries, observer) {
        entries.forEach(entry => {
          if (entry.intersectionRatio > 0) {
            entry.target.classList.add('animate')
            observer.unobserve(entry.target)
          } else {
            console.log('Not intersecting')
          }
        })
      }

      if (
        !('IntersectionObserver' in window) ||
        !('IntersectionObserverEntry' in window) ||
        !('intersectionRatio' in window.IntersectionObserverEntry.prototype)
      ) {
        // load polyfill now
      }

      itemsToObserve.forEach(item => {
        if (item.dataset.direction) {
          item.style.setProperty('--animation-name', `fade-in-${item.dataset.direction}`)
        }

        if (item.dataset.duration) {
          item.style.setProperty('--duration', item.dataset.duration)
        }

        if (item.dataset.easing) {
          item.style.setProperty('--easing', item.dataset.easing)
        }

        observer.observe(item)
      })
    }
  }
}
