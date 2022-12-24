import * as flsFunctions from "./modules/functions.js";
import "./spollers.js";
import "./tel-mask.js";
flsFunctions.isWebp();

//Добавление кнопке класса active и его элементу
const tabsBtn   = document.querySelectorAll(".nav_link");
const tabsItems = document.querySelectorAll(".content");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
   item.addEventListener("click", function() {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);

      if( ! currentBtn.classList.contains('_active') ) {
         tabsBtn.forEach(function(item) {
               item.classList.remove('_active');
            });
    
            tabsItems.forEach(function(item) {
               item.classList.remove('_active');
            });

          currentBtn.classList.add('_active');
          currentTab.classList.add('_active');
        }
    });
}

