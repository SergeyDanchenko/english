let isMenuHide = true;

function menu() {
  const menu = document.querySelector(".menu-wrapper");
  menu.style.left = isMenuHide ? "0" : "-37rem";
  isMenuHide = !isMenuHide
}

function changeBurger() {
  const topLine = document.querySelector(".top-line");
  const middleLine = document.querySelector(".middle-line");
  const bottomLine = document.querySelector(".bottom-line");

  if (isMenuHide) {
    topLine.style.transform = "translateY(.9rem) rotate(45deg) scaleX(1.2)";
    bottomLine.style.transform = "translateY(-.9rem) rotate(-45deg) scaleX(1.2)";
    middleLine.style.width = "0rem";
  } else {
    topLine.style.transform = "none";
    bottomLine.style.transform = "none";
    middleLine.style.width = "3.3rem";
  }
}

document.querySelector(".burger").addEventListener("click", () => {
  changeBurger()
  menu();
});