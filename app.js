"use strict";


const menuBtn = document.querySelector(".hamburger");
// const btn = document.querySelector(".menu-btn");
const navUl = document.querySelector(".popNav");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("is-active");
});


menuBtn.addEventListener("click", function () {
  navUl.classList.toggle("show");
});

