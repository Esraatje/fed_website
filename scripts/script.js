// JavaScript Document
// met hulp van donna
console.log("hi");
 
const main = document.querySelector("main");
const darkmodeHeader = document.querySelector("header");
const hamburgerMenu = document.querySelector("header nav:nth-of-type(2)");
const knopOpen = document.querySelector("header nav:first-of-type ul li:last-of-type");
const knopDicht = document.querySelector("header nav:nth-of-type(2) ul:first-of-type button:first-of-type");
const svgMenu1 = document.querySelector("header nav:first-of-type ul li:nth-of-type(4) a svg:nth-of-type(1)")
const svgMenu2 = document.querySelector("header nav:first-of-type ul li:nth-of-type(4) a svg:nth-of-type(2)")

function openMenu() {
    hamburgerMenu.classList.toggle("zichtbaar");
    main.classList.toggle("wazig");
    console.log("Het werkt!!!")
    svgMenu1.classList.toggle("open")
    svgMenu2.classList.toggle("open")
}
 
function sluitMenu() {
    hamburgerMenu.classList.remove("zichtbaar");
    main.classList.remove("wazig");
    console.log("Het werkt alweer!!!")
}
 
knopOpen.addEventListener('click', openMenu);
knopDicht.addEventListener('click', sluitMenu);

// DARK MODE
darkmodeHeader.addEventListener('toggle', dark-mode);

function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}
