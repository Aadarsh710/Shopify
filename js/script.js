// getSiblings
var getSiblings = function (elem) {
  const siblings = [];
  let sibling = elem.parentNode.firstChild;
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== elem) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
  return siblings;
};

/* Slide Up */
var slideUp = (target, time) => {
  const duration = time ? time : 500;
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.boxSizing = "border-box";
  target.style.height = target.offsetHeight + "px";
  target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = 0;
  window.setTimeout(() => {
    target.style.display = "none";
    target.style.removeProperty("height");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
  }, duration);
};

/* Slide Down */
var slideDown = (target, time) => {
  const duration = time ? time : 500;
  target.style.removeProperty("display");
  let display = window.getComputedStyle(target).display;
  if (display === "none") display = "block";
  target.style.display = display;
  const height = target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = 0;
  target.offsetHeight;
  target.style.boxSizing = "border-box";
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.height = height + "px";
  window.setTimeout(() => {
    target.style.removeProperty("height");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
  }, duration);
};

// Animated Headline
if (document.querySelector(".txt-type")) {
  class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = "";
      this.wordIndex = 0;
      this.wait = parseInt(wait, 8);
      this.type();
      this.isDeleting = false;
    }

    type() {
      // Current index of word
      const current = this.wordIndex % this.words.length;
      // Get full text of current word
      const fullTxt = this.words[current];

      // Check if deleting
      if (this.isDeleting) {
        // Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        // Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      // Insert txt into element
      this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

      // change color for data-text
      this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

      // Initial Type Speed
      let typeSpeed = 100;

      if (this.isDeleting) {
        typeSpeed /= 2;
      }

      // If word is complete
      if (!this.isDeleting && this.txt === fullTxt) {
        // Make pause at end
        typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        // Move to next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 300;
      }

      setTimeout(() => this.type(), typeSpeed);
    }
  }

  // Init On DOM Load

  document.addEventListener("DOMContentLoaded", init);

  // Init App
  function init() {
    const txtElement = document.querySelector(".txt-type");
    const words = JSON.parse(txtElement.getAttribute("data-words"));
    const wait = txtElement.getAttribute("data-wait");
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
  }
}

/*--- Magnific Popup Video---*/
// lightbox Activation
const customLightboxHTML = `<div id="glightbox-body" class="glightbox-container">
    <div class="gloader visible"></div>
    <div class="goverlay"></div>
    <div class="gcontainer">
    <div id="glightbox-slider" class="gslider"></div>
    <button class="gnext gbtn" tabindex="0" aria-label="Next" data-customattribute="example">{nextSVG}</button>
    <button class="gprev gbtn" tabindex="1" aria-label="Previous">{prevSVG}</button>
    <button class="gclose gbtn" tabindex="2" aria-label="Close">{closeSVG}</button>
    </div>
    </div>`;
const lightbox = GLightbox({
  touchNavigation: true,
  lightboxHTML: customLightboxHTML,
  loop: true,
});

// Scroll up activation
const scrollTop = document.getElementById("scroll__top");
scrollTop.addEventListener("click", function () {
  window.scroll({ top: 0, left: 0, behavior: "smooth" });
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    scrollTop.classList.add("active");
  } else {
    scrollTop.classList.remove("active");
  }
});

// exclusive column6 activation
var swiper = new Swiper(".exclusive__column6", {
  slidesPerView: 6,
  loop: true,
  clickable: true,
  spaceBetween: 20,
  speed: 500,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1366: {
      slidesPerView: 6,
    },
    1200: {
      slidesPerView: 5,
    },
    992: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    576: {
      slidesPerView: 3,
    },
    200: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
});

// exclusive column6 activation
var swiper = new Swiper(".exclusive__column6--style2", {
  slidesPerView: 6,
  loop: true,
  clickable: true,
  spaceBetween: 20,
  speed: 600,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1366: {
      slidesPerView: 6,
    },
    1200: {
      slidesPerView: 5,
    },
    992: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    576: {
      slidesPerView: 3,
    },
    200: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
});

// reviews column2 activation
var swiper = new Swiper(".reviews__column2", {
  slidesPerView: 1,
  loop: true,
  clickable: true,
  spaceBetween: 20,
  speed: 800,
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 25,
    },
    0: {
      slidesPerView: 1,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// reviews column2 activation
var swiper = new Swiper(".customizer-gallery-slider", {
  slidesPerView: 3,
  loop: true,
  clickable: true,
  spaceBetween: 10,
  speed: 800,
  breakpoints: {
    575: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
  autoplay: {
    delay: 1500,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// exclusive column6 activation
var swiper = new Swiper(".store__column4", {
  slidesPerView: 4,
  loop: true,
  clickable: true,
  spaceBetween: 20,
  duration: 3000,
  speed: 1500,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    200: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
});

/* Offcanvas Mobile Menu Function */
const offcanvasHeader = function () {
  const offcanvasOpen = document.querySelector(".mobile__menu--open"),
    offcanvasClose = document.querySelector(".offcanvas__close--btn"),
    offcanvasHeader = document.querySelector(".offcanvas__header"),
    offcanvasMenu = document.querySelector(".offcanvas__menu"),
    body = document.querySelector("body");
  /* Offcanvas SubMenu Toggle */
  if (offcanvasMenu) {
    offcanvasMenu
      .querySelectorAll(".offcanvas__sub_menu")
      .forEach(function (ul) {
        const subMenuToggle = document.createElement("button");
        subMenuToggle.classList.add("offcanvas__sub_menu_toggle");
        ul.parentNode.appendChild(subMenuToggle);
      });
  }
  /* Open/Close Menu On Click Toggle Button */
  if (offcanvasOpen) {
    offcanvasOpen.addEventListener("click", function (e) {
      e.preventDefault();
      offcanvasHeader.classList.add("open");
      body.classList.add("mobile_menu_open");
    });
  }
  if (offcanvasClose) {
    offcanvasClose.addEventListener("click", function (e) {
      e.preventDefault();
      offcanvasHeader.classList.remove("open");
      body.classList.remove("mobile_menu_open");
    });
  }
  /* Open/Close Sub Menu On Click Toggle Button */
  if (offcanvasMenu) {
    offcanvasMenu
      .querySelectorAll(".offcanvas__sub_menu_toggle")
      .forEach(function (toggle) {
        toggle.addEventListener("click", function (e) {
          e.preventDefault();
          const parent = this.parentElement;
          if (parent.classList.contains("active")) {
            this.classList.remove("active");
            parent.classList.remove("active");
            parent
              .querySelectorAll(".offcanvas__sub_menu")
              .forEach(function (subMenu) {
                subMenu.parentElement.classList.remove("active");
                subMenu.nextElementSibling.classList.remove("active");
                slideUp(subMenu);
              });
          } else {
            this.classList.add("active");
            parent.classList.add("active");
            slideDown(this.previousElementSibling);
            getSiblings(parent).forEach(function (item) {
              item.classList.remove("active");
              item
                .querySelectorAll(".offcanvas__sub_menu")
                .forEach(function (subMenu) {
                  subMenu.parentElement.classList.remove("active");
                  subMenu.nextElementSibling.classList.remove("active");
                  slideUp(subMenu);
                });
            });
          }
        });
      });
  }
  document.addEventListener("click", function (event) {
    if (
      !event.target.closest(".mobile__menu--open") &&
      !event.target.classList.contains(".mobile__menu--open".replace(/\./, ""))
    ) {
      if (
        !event.target.closest(".offcanvas__header") &&
        !event.target.classList.contains(".offcanvas__header".replace(/\./, ""))
      ) {
        offcanvasHeader.classList.remove("open");
        body.classList.remove("mobile_menu_open");
      }
    }
  });
  /* Remove Mobile Menu Open Class & Hide Mobile Menu When Window Width in More Than 991 */
  window.addEventListener("resize", function () {
    if (window.outerWidth >= 992) {
      offcanvasHeader.classList.remove("open");
      body.classList.remove("mobile_menu_open");
    }
  });
};
/* Mobile Menu Active */
offcanvasHeader();

//  Sticky header
function TopOffset(el) {
  let rect = el.getBoundingClientRect(),
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop };
}
function ScrollSticky() {
  const headerStickyWrapper = document.querySelector("header");
  const headerStickyTarget = document.querySelector(".header__sticky");

  if (headerStickyTarget) {
    window.addEventListener("scroll", function () {
      let StickyTargetElement = TopOffset(headerStickyWrapper);
      let TargetElementTopOffset = StickyTargetElement.top;

      if (window.scrollY > TargetElementTopOffset) {
        headerStickyTarget.classList.add("sticky");
      } else {
        headerStickyTarget.classList.remove("sticky");
      }
    });
  }
}
ScrollSticky();

// Isotope filter js
var btnContainer = document.getElementById("myBtnContainer");

if (btnContainer) {
  filterSelection("all");
  function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
  }

  // Show filtered elements
  function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
  }

  // Hide elements that are not selected
  function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }

  // Add active class to the current control button (highlight it)
  var buttons = btnContainer.querySelectorAll(".btn");
  if (buttons.length > 0) {
    buttons.forEach((button) => {
      button?.addEventListener("click", function (event) {
        buttons.forEach((childItem) => {
          childItem.classList.remove("active");
        });
        this.classList.add("active");
      });
    });
  }
}

// Accordion
function customAccordion(accordionWrapper, singleItem, accordionBody) {
  let accoridonButtons = document.querySelectorAll(accordionWrapper);
  accoridonButtons.forEach(function (item) {
    item.addEventListener("click", function (evt) {
      let itemTarget = evt.target;
      if (
        itemTarget.classList.contains("faq__section--button") ||
        itemTarget.classList.contains("widget__categories--menu__label")
      ) {
        let singleAccordionWrapper = itemTarget.closest(singleItem),
          singleAccordionBody =
            singleAccordionWrapper.querySelector(accordionBody);
        if (singleAccordionWrapper.classList.contains("active")) {
          singleAccordionWrapper.classList.remove("active");
          slideUp(singleAccordionBody);
        } else {
          singleAccordionWrapper.classList.add("active");
          slideDown(singleAccordionBody);
          getSiblings(singleAccordionWrapper).forEach(function (item) {
            let sibllingSingleAccordionBody = item.querySelector(accordionBody);
            item.classList.remove("active");
            slideUp(sibllingSingleAccordionBody);
          });
        }
      }
    });
  });
}

customAccordion(
  ".accordion__container",
  ".faq__section--item",
  ".faq__section--body"
);

// CounterUp Activation
const wrapper = document.getElementById("funfactId");
if (wrapper) {
  const counters = wrapper.querySelectorAll(".js-counter");
  const duration = 500;

  let isCounted = false;
  document.addEventListener("scroll", function () {
    const wrapperPos = wrapper.offsetTop - window.innerHeight;
    if (!isCounted && window.scrollY > wrapperPos) {
      counters.forEach((counter) => {
        const countTo = counter.dataset.count;

        const countPerMs = countTo / duration;

        let currentCount = 0;
        const countInterval = setInterval(function () {
          if (currentCount >= countTo) {
            clearInterval(countInterval);
          }
          counter.textContent = Math.round(currentCount);
          currentCount = currentCount + countPerMs;
        }, 1);
      });
      isCounted = true;
    }
  });
}

// Pricing table view more button
const priceTableViewMore = document.getElementById("pricing__table--view-more");
if (priceTableViewMore) {
  const pricingTableContainer = document.getElementById(
    "pricing--table-container"
  );
  const priceTableList = document.querySelector(".price--table-list");
  const priceTableListRow = priceTableList.querySelectorAll("tr");
  if (priceTableListRow.length > 0) {
    priceTableViewMore?.addEventListener("click", (event) => {
      pricingTableContainer.classList.add("table--list-extended");
      priceTableViewMore.classList.add("d-none");
      priceTableListRow.forEach((tr) => {
        if (tr.classList.contains("d-none")) {
          tr.classList.remove("d-none");
        }
      });
    });
  }
}

// Function to create a glowing effect around the cursor
const createGlowEffect = () => {
  // Get the canvas element
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  // Create a radial gradient
  const gradient = ctx.createRadialGradient(800, 800, 0, 800, 800, 400);

  // Define color stops for the gradient
  gradient.addColorStop(0, "rgba(135, 206, 250, .11)"); // Light Blue
  gradient.addColorStop(0.1, "rgba(135, 206, 250, .10)"); // Light Blue
  gradient.addColorStop(0.2, "rgba(135, 206, 250, .09)"); // Light Blue
  gradient.addColorStop(0.3, "rgba(135, 206, 250, .08)"); // Light Blue
  gradient.addColorStop(0.4, "rgba(135, 206, 250, .07)"); // Light Blue
  gradient.addColorStop(0.5, "rgba(135, 206, 250, .06)"); // Light Blue
  gradient.addColorStop(0.6, "rgba(135, 206, 250, .05)"); // Light Blue
  gradient.addColorStop(0.7, "rgba(135, 206, 250, .04)"); // Light Blue
  gradient.addColorStop(0.8, "rgba(135, 206, 250, .03)"); // Light Blue
  gradient.addColorStop(0.9, "rgba(135, 206, 250, .02)"); // Light Blue
  gradient.addColorStop(1, "transparent");

  // Set the fill style and draw a rectangle to cover the canvas
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1600, 1600);
};

// Invoke the function to create the glow effect
createGlowEffect();

// Add event listener to update the position of the glow effect based on mouse movement
if (window.innerWidth > 992) {
  document.addEventListener("mousemove", (e) => {
    // Get the coordinates of the mouse pointer
    let x = e.clientX;
    let y = e.clientY;

    // Update the position of the glow effect
    document.querySelector(".cursor-glow-effect canvas").style.top = `${y}px`;
    document.querySelector(".cursor-glow-effect canvas").style.left = `${x}px`;
  });
}
