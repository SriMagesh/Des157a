
(function(){
    'use strict';
    console.log('reading js')

    const scrollContainer = document.querySelector("main");

    // const frame = document.querySelector('.image-frame');
    // const image = frame.querySelector('.image1');

    // Set the width and height of the frame to match the image size
    // frame.style.width = `${image.offsetWidth}px`;
    // frame.style.height = `${image.offsetHeight}px`;

    scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
    });
}());