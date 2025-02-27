// get the press button 
var pressButton = document.querySelector('button[name="press"]');
var pennySelect = document.querySelector('select[name="penny"]');
var pennyImage = document.querySelector('.penny');


// console log elements
console.log(pressButton);
console.log(pennySelect.value);


// add event listener to the press button 
pressButton.addEventListener('click', ()=>{
    console.log(pennySelect.value);
    // set the penny Image src
    pennyImage.src = 'img/' + pennySelect.value;

    // console log penny image 
    console.log(pennyImage);
});



