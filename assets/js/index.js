"use strict";

let features = document.querySelector("#features");

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav_item");

window.addEventListener("scroll", () => {
  let currentSectionId = "";

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    console.log(rect, "rect");
    console.log(window.innerHeight, "window.innerHeight");
    
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      currentSectionId = section.getAttribute("id");
    }
  });

  navItems.forEach(item => {
    const anchor = item.querySelector("a");
    console.log(item, "item");
    
    const href = anchor.getAttribute("href");

    item.classList.remove("nav_active");

    // Check if href matches current section
    if (href === `#${currentSectionId}`) {
      item.classList.add("nav_active");
    }

    // Optional: reset to 'Home' if scrolled to top
    if (window.scrollY < 200 && href === './index.html') {
      item.classList.add("nav_active");
    }
  });
});
