// document.addEventListener("DOMContentLoaded", rem);
// window.addEventListener("resize", rem);

let firstBox = document.documentElement.querySelector(".box");
let content = document.documentElement.querySelector(".content");
let prebox = firstBox;

firstBox.className += " active";
content.addEventListener("click", (e) => {
  if (prebox === e.target || e.target.className === "content") return;
  if (prebox) {
    prebox.className = "box";
  }
  e.target.className += " active";
  prebox = e.target;
});

// s

// function device() {
//   let userDevice = navigator.userAgent.toLocaleLowerCase();
//   let device = /iphon|ipad/;
//   if (device.test(userDevice)) {
//     window.location.href = "index.html";
//   } else {
//     window.location.href = "2.html";
//   }
// }
// device();
// document.addEventListener("DOMContentLoaded", function () {
//   setRem();
// });

// window.onresize = function () {
//   setRem();
// };

// function setRem() {
//   console.log("resize");

//   let html = document.documentElement;
//   let Width = document.body.clientWidth || document.documentElement.clientWidth;
//   html.style.fontSize = (Width / 1920) * 80 + "px";
// }
