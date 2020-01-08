(function(){

 var headerWrapper = document.querySelector(".header-wrapper");
 var hamburgerButton = document.querySelector(".hamburger-button");
 
 function openMenu() {
  headerWrapper.classList.toggle("open-menu")
 }
 hamburgerButton.addEventListener("click", openMenu);
 

 var slideNext = document.querySelector('.js-slide-next');
 var slidePrev = document.querySelector('.js-slide-prev');
 var elem = document.querySelector('.carousel');
 var flkty = new Flickity( elem, {
   contain: true,
   pageDots: false,
   prevNextButtons: false
 });

 if (slideNext) slideNext.addEventListener('click', function() { flkty.next(); });
 if (slidePrev) slidePrev.addEventListener('click', function() { flkty.previous(); });
  
})();

