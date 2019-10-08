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
 let toggledTrue = false ; 

const btnEl = document.getElementById("menu-icon-trigger");
const menu = document.getElementById("navigation_menu");
btnEl.addEventListener("click", e => {
  e.preventDefault();
  document.querySelector(".menu-icon-wrapper").classList.toggle("open"); 
  
  if(toggledTrue) {
     menu.style.transform ="translateY(-101%)"
    toggledTrue = !toggledTrue
  } else {
     menu.style.transform ="translateY(0)"
    toggledTrue = !toggledTrue

  }
});



//aos 
AOS.init();
