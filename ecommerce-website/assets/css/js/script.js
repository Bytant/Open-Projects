'use strict';

// Notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// Notification toast event listener
if (toastCloseBtn) {
  toastCloseBtn.addEventListener('click', function () {
    if (notificationToast) {
      notificationToast.classList.add('closed');
      console.log("Toast closed");
    }
  });
}

// Mobile menu variables
const mobileMenuOpenBtns = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenus = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtns = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

mobileMenuOpenBtns.forEach((btn, index) => {
  btn.addEventListener('click', function () {
    if (mobileMenus[index]) {
      mobileMenus[index].classList.add('active');
      if (overlay) overlay.classList.add('active');
    }
  });

  if (mobileMenuCloseBtns[index]) {
    mobileMenuCloseBtns[index].addEventListener('click', function () {
      if (mobileMenus[index]) {
        mobileMenus[index].classList.remove('active');
        if (overlay) overlay.classList.remove('active');
      }
    });
  }
});

// Overlay close for mobile menu
if (overlay) {
  overlay.addEventListener('click', function () {
    mobileMenus.forEach(menu => menu.classList.remove('active'));
    overlay.classList.remove('active');
  });
}

// Accordion variables
const accordionBtns = document.querySelectorAll('[data-accordion-btn]');
const accordions = document.querySelectorAll('[data-accordion]');

accordionBtns.forEach((btn, index) => {
  btn.addEventListener('click', function () {
    const isActive = this.nextElementSibling.classList.contains('active');

    // Close other accordions
    if (!isActive) {
      accordions.forEach(acc => acc.classList.remove('active'));
      accordionBtns.forEach(button => button.classList.remove('active'));
    }

    // Toggle current accordion
    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');
  });
});
