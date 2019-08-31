function resizeHeaderOnScroll() {
  const distanceY = window.pageYOffset || document.documentElement.scrollTop,
    shrinkOn = 150,
    headerEl = document.getElementById("js-header");

  if (distanceY > shrinkOn) {
    headerEl.classList.add("smaller");
  } else {
    headerEl.classList.remove("smaller");
  }
}

window.addEventListener("scroll", resizeHeaderOnScroll);

// hamburger

const btnEl = document.getElementById("menu-icon-trigger");
btnEl.addEventListener("click", e => {
  e.preventDefault();
  document.querySelector(".menu-icon-wrapper").classList.toggle("open");
  document.querySelector(".sidebar").classList.toggle("is-active");
});
