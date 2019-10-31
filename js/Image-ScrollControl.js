"use strict";

let waypoint = new Waypoint({
    element: document.getElementById("final-img-container"),
    handler: function(direction) {
        alert('I am 90px from the top of the window')
    },
    offset: 90
})


/* let finalImageGroup = document.getElementById("final-img-container");

function isScrolledIntoView(finalImageGroup, $window){
    
}

document.on("scroll", function (){
    if (isScrolledIntoView(finalImageGroup, $window)) {
        
    }
});
 */