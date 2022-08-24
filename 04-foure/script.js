let containt = document.documentElement.querySelector(".containt")
let button = document.documentElement.querySelector("button")
let search = document.documentElement.querySelector("input")

button.addEventListener("click", () => {
  containt.classList.toggle("active")
})
