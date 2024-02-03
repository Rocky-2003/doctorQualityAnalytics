"use strict";

const body = document.querySelector("body");
const menuEls = document.querySelectorAll(".li-el");
const header = document.getElementById("header");

// console.log(menuEls);
function removeMenuEl(el, menuEl) {
  header.addEventListener("mouseout", (e) => {
    // *NOW HERE WE REMOE THE MENUeL

    el.childNodes[2].style.transform = "rotate(0deg)";
    menuEl.classList.remove("hideAndSeek");
    body.style.backgroundColor = ` #f9faf8`;
  });
}

header.addEventListener("mouseenter", () => {
  console.log("header");
});

menuEls.forEach((el) => {
  console.log(el);
  el.addEventListener("mouseenter", (e) => {
    console.log(el);
    // *NOW SELECTING THE TAB USING DATA TYPE AND MAKE DISPLAY BLOCK
    el.childNodes[2].style.transform = "rotate(180deg)";
    let elementDisplay = document.querySelector(`#${e.target.dataset.type}`);

    // elementDisplay.classList.add("hideAndSeek");

    removeMenuEl(el, elementDisplay);
  });
});
