"use strict";

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav_item");

window.addEventListener("scroll", () => {
  let currentSectionId = "";

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    console.log(rect, "rect");
    console.log(window.innerHeight, "window.innerHeight");

    if (
      rect.top <= window.innerHeight / 2 &&
      rect.bottom >= window.innerHeight / 2
    ) {
      currentSectionId = section.getAttribute("id");
    }
  });

  navItems.forEach((item) => {
    const anchor = item.querySelector("a");
    console.log(item, "item");

    const href = anchor.getAttribute("href");

    item.classList.remove("nav_active");

    // Check if href matches current section
    if (href === `#${currentSectionId}`) {
      item.classList.add("nav_active");
    }

    // Optional: reset to 'Home' if scrolled to top
    if (window.scrollY < 200 && href === "./index.html") {
      item.classList.add("nav_active");
    }
  });
});

const hamburger = document.querySelector("#hamburger");
const sideNav = document.querySelector("#sideNav");
const overlay = document.querySelector("#overlay");
const closeBtn = document.querySelector("#closeBtn");
const navLinks = document.querySelectorAll(".nav_item a");

function callHamburger() {
  console.log(sideNav, "sideNav");

  sideNav.classList.remove("nav");
  sideNav.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.add("no-scroll"); // ✅ disable scroll
}

hamburger.addEventListener("click", callHamburger);

function closeMenu() {
  sideNav.classList.add("nav");
  sideNav.classList.remove("active");
  overlay.classList.remove("active");
   document.body.classList.remove("no-scroll"); // ✅ enable scroll
}

closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

(function closeAfterClick() {
  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
})();



const header = document.querySelector('.header');
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('sticky');
    hero.classList.add('hero_alternate');
  } else {
    header.classList.remove('sticky');
    hero.classList.remove('hero_alternate');
  }
});

AOS.init();
