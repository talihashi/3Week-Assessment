console.log("hello world");



function handleSubmit() {
	alert('form submitted successfuly');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

// // STEP 1: Grab and HTML element
let giveCompliment = document.querySelector('#crazyCat')

// // STEP 2: Write out a function
function giveAlert() {
	alert('The cat loves you');
}

// // STEP 3: Combine steps one and two using an event listener
giveCompliment.addEventListener("mouseover", giveAlert);