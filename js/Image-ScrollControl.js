"use strict";

{ // start scope
         
let elementsToShow = document.querySelectorAll('.show-on-scroll');
//this is a nodelist
let elementsToShowArray = Array.from(elementsToShow);
//array.from converts elements into array

for(let i = 0; i < elementsToShowArray.length; ++i)
{
    let item = elementsToShowArray[i];
    
    //trigger the first animation when load
    if(isElementInViewport(item))
    {
      item.classList.add('is-visible');
    }
    else
    {
      item.classList.remove('is-visible');
    }   
    
    //trigger events on scroll
    window.addEventListener('scroll', (event) => {
        if(isElementInViewport(item))
        {
          item.classList.add('is-visible');
          console.log(item.id + " becomes visible");
        }
        else
        {
          item.classList.remove('is-visible');
          console.log(item.id + " becomes invisible");
        }          
    }, false);   
}

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






