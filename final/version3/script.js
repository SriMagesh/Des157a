(function () {
	"use strict";
	console.log("reading js");
    alert('set the viewport settings to 1200 by 750 px for best experience :)');
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
	const scrollContainer = document.querySelector("main");
    console.log('yes');
	document.querySelector('.hex1').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('overlay1').className = 'showing';
    })
	document.querySelector('.close1').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('overlay1').className = 'hidden';
    })
	document.querySelector('.hex2').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('overlay2').className = 'showing';
    })
	document.querySelector('.close2').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('overlay2').className = 'hidden';
    })
	document.querySelector('.hex3').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('overlay3').className = 'showing';
    })
	document.querySelector('.close3').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('overlay3').className = 'hidden';
    })
	document.querySelector('.hex4').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('overlay4').className = 'showing';
    })
	document.querySelector('.close4').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('overlay4').className = 'hidden';
    })
	// allows for horizontal scroll
	scrollContainer.addEventListener("wheel", (evt) => {
		evt.preventDefault();
		scrollContainer.scrollLeft += evt.deltaY;
		const increment = 1.1 + (scrollContainer.scrollLeft / 200);
		//this changes the left value of image. You can have if else statements based on the frame size to stop changing its value
        image.style.left = `${scrollContainer.scrollLeft}px`;
        image3.style.left = `${scrollContainer.scrollLeft - 480}px`;
        image3.style.top = `${900 - scrollContainer.scrollLeft }px`;
        image4.style.left = `${scrollContainer.scrollLeft - 1200}px`;
        image4.style.top = `${1100 - scrollContainer.scrollLeft}px`;
        image5.style.left = `${2650 - scrollContainer.scrollLeft}px`;
        image6.style.left = `${scrollContainer.scrollLeft - 3200}px`;
        image7.style.left = `${scrollContainer.scrollLeft - (2700 + (increment*25))}px`;

        
	});
})();

//Divjeet Comment
// you cannot have both "scroll" and "wheel" eventlistener in one js function i think that is why earlier your "scroll" eventlistener was never called