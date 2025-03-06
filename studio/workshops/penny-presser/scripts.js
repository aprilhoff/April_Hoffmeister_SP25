// get the press button 
var pressButton = document.querySelector('button[name="press"]');
var pennySelect = document.querySelector('select[name="penny"]');
var pennyImage = document.querySelector('.penny');
var studentSelect = document.querySelector('select[name="student"]');

// console log elements
console.log(pressButton);
console.log(pennySelect.value);
// log student value 
console.log(studentSelect.value);

// add event listener to the press button 
pressButton.addEventListener('click', ()=>{
    console.log(pennySelect.value);
    // set the penny Image src
    // pennyImage.src = 'img/' + pennySelect.value;

    pennyImage.src = 'https://' + studentSelect.value + '.interactive.rodeo/studio/workshops/penny-presser/img/' + pennySelect.value

    // console log penny image 
    console.log(pennyImage);
});



