"use strict";

const get = (select) => document.querySelector(select);

const hamburger_menu = get(".hamburger-menu");
const mobile_menu = get(".mobile");

hamburger_menu.addEventListener('click', displayMenu);

function displayMenu(event) {
  event.stopImmediatePropagation();

}
