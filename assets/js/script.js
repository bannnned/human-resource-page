import {rightButtons, videoInterview, salary} from './html-content.js'

/* Slider mini */
$(document).ready(function () {
  $(".portfolio__slider").slick({
    arrows: true,
    dots: false,
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 1000,
    easing: "easeOutExpo",
    infinite: false,
    initialSlide: 0,
    autoplay: false,
    pauseOnFocused: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    draggable: true, //Swipe on desktops
    swipe: true, //Swipe on mobile
    variableWidth: true, //Адаптивная ширина
    rows: 1,
    slidesPerRow: 3, //Columns
    vertical: false, //
    verticalSlider: false, //
    fade: false, //Slideshow
  });
});
/* Slider big */
$(document).ready(function () {
  $(".full-slider").slick({
    arrows: true,
    dots: false,
    adaptiveHeight: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    easing: "easeOutExpo",
    infinite: false,
    initialSlide: 0,
    autoplay: false,
    pauseOnFocused: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    draggable: true, //Swipe on desktops
    swipe: true, //Swipe on mobile
    variableWidth: false, //Адаптивная ширина
    rows: 1,
    slidesPerRow: 3, //Columns
    vertical: false, //
    verticalSlider: false, //
    fade: true, //Slideshow
  });
});


console.log()

/* Appear buttons */
const leftHeader = document.querySelector(".left__header")
const leftProfTitle = document.querySelector(".left__profession-title")
const rightHistory = document.querySelector(".right__history")
if($(window).width() > 950) {
    rightHistory.insertAdjacentHTML('beforebegin', salary);
    rightHistory.insertAdjacentHTML('beforebegin', videoInterview);
    rightHistory.insertAdjacentHTML('beforebegin', rightButtons);

} else {
    leftHeader.insertAdjacentHTML('afterend', videoInterview);
    leftHeader.insertAdjacentHTML('afterend', rightButtons);
    leftProfTitle.insertAdjacentHTML('afterend', salary);
}



/* Read more buttons */
const readMoreButton = document.querySelectorAll(".read-more-btn");

for (let i = 0; i < readMoreButton.length; i++) {
  readMoreButton[i].addEventListener("click", (e) => {
    const current = e.target;
    const currentText = current.parentNode.querySelector(".read-more-text");
    currentText.classList.toggle("read-more-text--show");
    current.textContent = current.textContent.includes("Показать полностью")
      ? "Скрыть"
      : "Показать полностью...";
  });
}

/* Heart */

const heartButton = document.querySelector(".right__buttons-like");
const heartSVG = document.querySelector(".right__buttons-like-svg");

heartButton.addEventListener("click", () => {
  heartSVG.classList.toggle("right__buttons-like-svg--active");
});

/* Offer button */
let cancelButton = document.querySelector('.right__cancel-button')
const offerButton = document.querySelector(".right__buttons-offer");
const offerButtonText = document.querySelector(".right__buttons-offer-text");
const offerButtonCheck = document.querySelector(
  ".right__buttons-offer-checkmark"
);
const vacancyList = document.querySelector(".right__vacancy-list");
const vacancyItem = document.querySelectorAll(".right__vacancy");

offerButton.addEventListener("click", () => {
  vacancyList.classList.toggle("inactive");
  cancelButton.classList.toggle("inactive");

});

for (let i = 0; i < vacancyItem.length; i++) {
  vacancyItem[i].addEventListener("click", () => {
    offerButtonText.textContent = "Приглашение отправлено";
    offerButtonCheck.classList.remove("inactive-display");
    vacancyList.classList.toggle("inactive");
  });
}



cancelButton.addEventListener('click', () => {
    vacancyList.classList.toggle("inactive");
    cancelButton.classList.toggle("inactive");
})

/* Response history  */

const historyButton = document.querySelector(".right__history");
const historyButtonImg = document.querySelector(".right__history-title-img");
const historyResps = document.querySelector(".right__history-resps");

if($(window).width() > 950) {
    historyButton.addEventListener("click", () => {
        historyButtonImg.classList.toggle("transformY");
        historyResps.classList.toggle("inactive-display");
        historyButton.classList.toggle("border-radius-on");
      });
}


/* PopUp  */

const makeNote = document.querySelector(".header__buttons-file");
const buttonCancel = document.querySelector(".popup__button-cancel");
const buttonConfim = document.querySelector(".popup__button-confirm");
const textArea = document.querySelector(".popup__textarea");
const popUp = document.getElementById("popup");

makeNote.addEventListener("click", () => {
  popUp.classList.toggle("inactive-display");
});

buttonCancel.addEventListener("click", () => {
  popUp.classList.toggle("inactive-display");
  textArea.value = "";
  makeNote.classList.remove("stroke-orange");
});
buttonConfim.addEventListener("click", () => {
  popUp.classList.toggle("inactive-display");
  makeNote.classList.add("stroke-orange");
});

/* Close big slider */
const closeBtn = document.querySelector(".full-slider__close");
const bigSlider = document.querySelector(".bg-dark")
const portfolio = document.querySelector(".portfolio__title-container")

portfolio.addEventListener("click", () => {
    bigSlider.classList.remove('inactive-display-2')
})

closeBtn.addEventListener("click", () => {
    bigSlider.classList.add('inactive-display-2')
})

// Make the DIV element draggable:
dragElement(popUp);

function dragElement(elmnt) {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "draggable")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "draggable").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

window.addEventListener('scroll', function() {
    let header = document.querySelector('.header__buttons')
    let print = document.querySelector('.header__buttons-print')
    let headerAvatar = document.querySelector('.user-container__text')
    let headerText = document.querySelector('.user-container__avatar')
    let buttonBottom = document.querySelector('.right__buttons')
    header.classList.toggle('sticky-header', window.scrollY > 0)
    print.classList.toggle('inactive-small', window.scrollY > 0)
    headerAvatar.classList.toggle('display', window.scrollY > 0)
    headerText.classList.toggle('display', window.scrollY > 0)
    buttonBottom.classList.toggle('sticky-bottom', window.scrollY > 280)

   
    vacancyList.classList.toggle('top', window.scrollY < 310)
    cancelButton.classList.toggle('top', window.scrollY < 310)


})



window.addEventListener('scroll', function() {
    console.log(window.scrollY)
})


