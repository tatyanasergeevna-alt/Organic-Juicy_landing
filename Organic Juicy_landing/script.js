const menuIcon = document.querySelector(".menu-icon"),
  header = document.querySelector("header");
// body = document.querySelector("body");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("menu-icon--active");
  header.classList.toggle("header--mobile");
  // body.classList.toggle("no-scroll");
});

//Slider-arrows

const sliderArrows = document.querySelector(".slider-arrows"),
  slidesArrows = sliderArrows.querySelectorAll(".slider-arrows__item"),
  prev = sliderArrows.querySelector(".slider-arrows__arrow--left"),
  next = sliderArrows.querySelector(".slider-arrows__arrow--right");

let slideIndex = 0;

prev.addEventListener("click", () => showSlideArrows(-1));
next.addEventListener("click", () => showSlideArrows(1));

function showSlideArrows(n = 0) {
  slideIndex += n;

  if (slideIndex < 0) slideIndex = slidesArrows.length - 1;
  if (slideIndex >= slidesArrows.length) slideIndex = 0;

  slidesArrows.forEach((item) => (item.style.display = "none"));
  slidesArrows[slideIndex].style.display = "block";
}

showSlideArrows();

// Slider-dots-arrows

const sliderDots = document.querySelector(".slider-dots"),
  slidesDots = sliderDots.querySelectorAll(".slider-dots__item"),
  wrapperDots = sliderDots.querySelector(".slider-dots-nav");

const dots = [];

for (let i = 0; i < slidesDots.length; i++) {
  console.log(i);
  const dot = document.createElement("button"); // создаем кнопку
  // console.log(dot);
  dot.dataset.slideTo = i;

  dot.classList.add("slider-dots__nav-item");
  if (i == 0) dot.classList.add("slider-dots__nav-item--active"); // если первая итерация равна 0, то делаем ее активной и показываем

  if (i != 0) slidesDots[i].style.display = "none"; // отключаем другие картинки, кроме первой, чтобы не выстраивались в ряд
  dot.addEventListener("click", showSlideDots);

  wrapperDots.append(dot);
  dots.push(dot);
}

function showSlideDots(e) {
  console.log(e.target);

  const slideTo = e.target.dataset.slideTo;
  console.log(slideTo);

  slidesDots.forEach((item) => (item.style.display = "none"));
  slidesDots[slideTo].style.display = "block";

  dots.forEach((dot) => dot.classList.remove("slider-dots__nav-item--active"));
  e.target.classList.add("slider-dots__nav-item--active");
}
