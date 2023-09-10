let isOpen = false;
let popNav = document.getElementById("pop");

document.getElementById("burger").addEventListener("click", () => {
  popNav.style.height = isOpen ? "0px" : "5rem";
  isOpen = !isOpen;
})

window.addEventListener("resize", () => {
  if(window.innerWidth >= 690) {
    popNav.style.height = "0px";
    isOpen = false;
  }
})