
// (function(){
//     'use strict';
//     console.log('reading js')

//     const scrollContainer = document.querySelector("main");

//     scrollContainer.addEventListener("wheel", (evt) => {
//         evt.preventDefault();
//         scrollContainer.scrollLeft += evt.deltaY;
//     });
//     const container = document.getElementById("container");
//     const image = document.getElementsByClassName("image1");

//     console.log('hi');
//     window.addEventListener("scroll", () => {
//       // Get the current scroll position
//       const scrollPosition = window.scrollY;
//       console.log('yes');
//       // Move the image to the right based on the scroll position
//       image.style.left = `${scrollPosition}px`;
//     });
// }());
(function(){
    'use strict';
    console.log('reading js')
    const image = document.querySelector(".image1");
    window.addEventListener("scroll", (evt) => {
        // evt.preventDefault();
        evt.preventDefault();
        console.log('yes');
        const scrollPosition = window.scrollY;
        console.log('yes');
        image.scrollLeft+= scrollPosition;
        console.log(image.scrollLeft);
    });
    const scrollContainer = document.querySelector("main");

    scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
    });

    // window.addEventListener("scroll", function() {
    //     // evt.preventDefault();
    //     console.log('yes');
    //     const scrollPosition = window.scrollY;
    //     image.style.left = `${scrollPosition * 10}px`;
    // });

  }());