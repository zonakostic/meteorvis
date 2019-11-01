"use strict";

/* let waypoint = new Waypoint({
    element: document.getElementById("final-img-container"),
    handler: function(direction) {
        alert('I am 90px from the top of the window')
    },
    offset: 90
}) */


/* let finalImageGroup = document.getElementById("final-img-container");

function isScrolledIntoView(finalImageGroup, $window){
    
}

document.on("scroll", function (){
    if (isScrolledIntoView(finalImageGroup, $window)) {
        
    }
});
 */

{ // start scope
         
let elementsToShow = document.querySelectorAll('.show-on-scroll');
let counter = 0;
function animationLoop() {     
  elementsToShow.forEach(function (el) {
    if (isElementInViewport(el)) {
      el.classList.add('is-visible');
    } else {
      el.classList.remove('is-visible');
    }
  });

  window.requestAnimationFrame(animationLoop);
}

// Call the animationLoop for the first time
animationLoop();


// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  let rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

} // end scope






