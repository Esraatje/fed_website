// JavaScript Document
// met hulp van donna
console.log("hi");
 
const main = document.querySelector("main");
const hamburgerMenu = document.querySelector("header nav:nth-of-type(2)");
const knopOpen = document.querySelector("header nav:first-of-type ul li:last-of-type");
const knopDicht = document.querySelector("header nav:nth-of-type(2) ul:first-of-type button:first-of-type");

 
function openMenu() {
    hamburgerMenu.classList.add("zichtbaar");
    main.classList.add("wazig");
    console.log("Het werkt!!!")
}
 
function sluitMenu() {
    hamburgerMenu.classList.remove("zichtbaar");
    main.classList.remove("wazig");
    console.log("Het werkt alweer!!!")
}
 
knopOpen.addEventListener('click', openMenu);
knopDicht.addEventListener('click', sluitMenu);