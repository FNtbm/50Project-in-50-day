let boxs = document.documentElement.querySelectorAll(".content");

window.addEventListener("scroll", throttle(scrollShow));
window.addEventListener("load", () => {
  scrollShow();
});

function throttle(fn) {
  let run = false;
  return function () {
    if (run) return;
    setTimeout(() => {
      fn();
      run = false;
    }, 200);
  };
}

function scrollShow() {
  let heigth = window.innerHeight - boxs[0].offsetHeight;
  boxs.forEach((box) => {
    let top = box.getBoundingClientRect().top;
    if (top <= heigth) {
      box.classList.add("active");
    } else {
      box.classList.remove("active");
    }
  });
}
