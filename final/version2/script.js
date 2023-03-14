(function () {
	"use strict";
	console.log("reading js");
	const image = document.querySelector(".image1");
    const image2 = document.querySelector(".sri1");
    const image3 = document.querySelector(".image3");
    const image4 = document.querySelector(".image4");
    const image5 = document.querySelector(".image5");
    const image6 = document.querySelector(".image6");
    const image7 = document.querySelector(".image7");
     // Closes the instructions pane
	// updates left position of the image as user scrolls down

	// this does not work...only works when I remove the horizontal scroll animation, but I need both to work

	// Intended effect: as user scrolls up the horizontal scroll will move left, alongside the bike, but will end where the frame ends
	// window.addEventListener("scroll", (evt) => {
	// 	// evt.preventDefault();
	// 	evt.preventDefault();
	// 	const scrollPosition = window.scrollY;
	// 	console.log("yes");
	// 	image.scrollLeft += scrollPosition;
	// 	console.log(image.scrollLeft);
	// });
    alert("There are three tasks for you to do: 1. Scroll through each frame! 2. Find the way to view the image within each frame 3. Reach the end screen. Thank you for your cooperation")
	const scrollContainer = document.querySelector("main");
    console.log('yes');
    

	// allows for horizontal scroll
	scrollContainer.addEventListener("wheel", (evt) => {
		evt.preventDefault();
		scrollContainer.scrollLeft += evt.deltaY;
		//this changes the left value of image. You can have if else statements based on the frame size to stop changing its value
        image.style.left = `${scrollContainer.scrollLeft}px`;
        image3.style.left = `${scrollContainer.scrollLeft - 480}px`;
        image3.style.top = `${900 - scrollContainer.scrollLeft }px`;
        image4.style.left = `${scrollContainer.scrollLeft + 550}px`;
        image4.style.top = `${1550 - scrollContainer.scrollLeft}px`;
        image5.style.left = `${2650 - scrollContainer.scrollLeft}px`;
        image6.style.left = `${scrollContainer.scrollLeft - 3200}px`;
        image7.style.left = `${scrollContainer.scrollLeft - (2700 * 1.2)}px`;

        
	});
})();

//Divjeet Comment
// you cannot have both "scroll" and "wheel" eventlistener in one js function i think that is why earlier your "scroll" eventlistener was never called