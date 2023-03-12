
(function(){
    'use strict';
    console.log('reading js')
    const image = document.querySelector(".image1");


    // updates left position of the image as user scrolls down

    // this does not work...only works when I remove the horizontal scroll animation, but I need both to work

    // Intended effect: as user scrolls up the horizontal scroll will move left, alongside the bike, but will end where the frame ends
    window.addEventListener("scroll", (evt) => {
        // evt.preventDefault();
        evt.preventDefault();
        const scrollPosition = window.scrollY;
        console.log('yes');
        image.scrollLeft+= scrollPosition;
        console.log(image.scrollLeft);
    });
    const scrollContainer = document.querySelector("main");

    // allows for horizontal scroll 
    scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
    });


  }());