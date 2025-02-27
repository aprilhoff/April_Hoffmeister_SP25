// get the button elements 
var onButton = document.querySelector('button[name="on"]');
var offButton = document.querySelector('button[name="off"]');

// get the lightbulb element 

var lightBulb = document.querySelector('.lightbulb')
console.log(lightBulb)

// log the element to the console
console.log(onButton);
console.log(offButton);
console.log(lightBulb)




// add event listener to on button
onButton.addEventListener('click', () =>{
    lightBulb.classList.add('is-on');
})


// add event listener to off button 
offButton.addEventListener('click', ()=>{
    lightBulb.classList.remove('is-on');
})