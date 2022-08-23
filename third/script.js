let circle = document.documentElement.querySelector(".circle")
let button = document.documentElement.querySelector("button")
function debounce(fn, delay = 200) {
  let timmer = null
  return function () {
    if (timmer) clearTimeout(timmer)
    timmer = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}
// function trottle(fn, delay = 200) {
//   let run = false
//   return function () {
//     if (run) run
//     run = true
//     setTimeout(() => {
//       fn.apply(this, arguments)
//       run = false
//     }, delay)
//   }
// }
function scrollTop() {
  if (scrollY > 100) {
    if (circle.className == "circle scroll") return
    circle.classList.add("scroll")
  } else {
    if (circle.className == "circle") return
    circle.classList.remove("scroll")
  }
}

window.addEventListener("scroll", debounce(scrollTop))
