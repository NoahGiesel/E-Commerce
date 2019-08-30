function resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
    shrinkOn = 150,
    headerEl = document.getElementById('js-header');
    
    if (distanceY > shrinkOn) {
      headerEl.classList.add("smaller");
    } else {
      headerEl.classList.remove("smaller");
    }
  }
  
  window.addEventListener('scroll', resizeHeaderOnScroll);
  


  //slick carousel cdn imported 
  $('.slider').slick({
    infinite: true,
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2500,
      fade: true,
      fadeSpeed: 1500
  });