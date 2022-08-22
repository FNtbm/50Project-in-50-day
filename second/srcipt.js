let allCircle = document.documentElement.querySelectorAll(".circle")
let buttons = document.documentElement.querySelector(".footer")
let Prev = document.documentElement.querySelector("[name=Prev]")
let Next = document.documentElement.querySelector("[name=Next]")
let progress = document.documentElement.querySelector(".progress")

let currentIndex = 0
let lastIndex = allCircle.length - 1

window.addEventListener("load", () => {
  readSession()
  refrensh()
  buttonDisable()
})
window.addEventListener("beforeunload", recordSession)

buttons.addEventListener("click", (e) => {
  if (e.target.name == "Next") NextClick()
  if (e.target.name == "Prev") PervClick()
  progress.style.width = 33 * currentIndex + "%"
  buttonDisable()
})

function refrensh() {
  if (!currentIndex) {
    return
  }
  for (let i = 0; i <= currentIndex; i++) {
    allCircle[i].classList.add("active")
    progress.style.width = 33 * i + "%"
    // console.log(i)
  }
}

function NextClick() {
  if (currentIndex < lastIndex) currentIndex++ //3
  else return
  allCircle[currentIndex].classList.add("active")
}

function PervClick() {
  if (currentIndex === 0) return
  allCircle[currentIndex].classList.remove("active")
  if (currentIndex >= 1) currentIndex-- //0
}

function buttonDisable() {
  if (currentIndex === 0) {
    Prev.disabled = true
  } else if (currentIndex === lastIndex) {
    Next.disabled = true
  } else {
    Prev.disabled = false
    Next.disabled = false
  }
}

function readSession() {
  if (sessionStorage.getItem("currentIndex")) {
    currentIndex = Number(sessionStorage.getItem("currentIndex"))
  }
}
function recordSession() {
  sessionStorage.setItem("currentIndex", currentIndex)
}
