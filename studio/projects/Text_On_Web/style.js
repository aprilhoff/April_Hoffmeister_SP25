// with the slider
var input = document.querySelector('input');
let changeFont = document.querySelector('p');
let changeHeader = document.querySelector('.header');
let changeHome = document.querySelector('h1');
let changeNav = document.querySelector('.nav');
let changeStar = document.querySelector('.nav_star');
let changeTrack = document.querySelector('#slider');


input.addEventListener('input', function() {
    styleBox();
});

styleBox();

function styleBox(){
    changeFont.classList.remove("p_font_change", "p_color_change", "p_border_add");
    changeHeader.classList.remove("header_change");
    changeHome.classList.remove("h1_change");
    changeNav.classList.remove("nav_change");
    changeStar.classList.remove("nav_star_change");
    changeTrack.classList.remove("change_track", "change_thumb")

    let inputValue = parseInt(input.value);

    (if (inputValue === 1) ){
        console.log('change 1');
        changeFont.classList.add("p_font_change");
    } else if (inputValue === 2) {
        console.log('change two');
        changeFont.classList.add("p_border_add");
    } else if (inputValue === 3) {
        console.log('change three');
        changeFont.classList.add("p_color_change");
    } else if (inputValue === 4) {
        console.log('change four');
        changeFont.classList.add("p_color_change");
        changeHeader.classList.add("header_change");
        changeHome.classList.add("h1_change");
        changeNav.classList.add("nav_change");
        changeStar.classList.add("nav_star_change");
        changeTrack.classList.add("change_track", "change_thumb");
    }
};






// let clickCount = 0;
// let circleButton = document.querySelector(".circle"); 
// let borderElement = document.querySelector(".border"); 
// let changeFont = document.querySelector("p");


// circleButton.addEventListener("click", function() {
//     clickCount++;

//     if (clickCount === 1) {
//         console.log("First Click");
//         changeFont.classList.add("p_font_change");
//         circleButton.classList.add("circle_one");
//     } else if (clickCount === 2) {
//         console.log("Second Click");
//         borderElement.classList.add("border_1");
//         changeFont.classList.add("p_font_change");
//         circleButton.classList.add("circle_two");
//         clickCount = 0;
//     } else if (clickCount === 3){
//         console.log("Third CLick");
//         borderElement.classList.add("border_1");
//         changeFont.classList.add("p_font_change");
//         circleButton.classList.add("circle_three");
//     }
// });



// let changeClassFont = () => {
//     changeFont.classList.toggle("p_font_change");
// };



// let changePosition = () => {
//     changeCircle.forEach(circle => {
//         circle.classList.toggle("circle_one"); 
//     });
// };

// circleButton.addEventListener("click", () => {
//     // changeClassFont(); 
//     changePosition(); 
// });





// test slider

// const slider = document.getElementById("slider");

// const root = document.documentElement;

// slider.addEventListener("input", (e) =>{
//     root.style.setP

// })



// testers from before

// let changeFont = document.querySelector("p");
// let buttonClick = document.querySelector(".circle");

// let changeClassFont = () => {
//     changeFont.classList.toggle("p_font_change");
// };

// let changeCircle = document.querySelectorAll(".circle");

// let changePosition = () => {
//     changeCircle.forEach(circle => {
//         circle.classList.toggle("circle_one");
//     });
// };

// buttonClick.addEventListener("click", () => {
//     changeClassFont(); 
//     changePosition(); 
// });


// testing the click amounts
// let clickCount = 0;
// const button = document.getElementById('.circle');
// let borderElement = document.querySelector(".border");

// button.addEventListener('click', function() {
//     clickCount++; // Increment click count

//     if (clickCount === 1) {
//         console.log('First Click');
//     } else if (clickCount === 2) {
//         console.log('Second Click');
//         borderElement.classList.add('border_1'); // Add 'border_1' class
//         clickCount = 0; // Optionally reset click count after second click
//     }
// });

// let changeFont = document.querySelector("p");
// let buttonClick = document.querySelector(".circle");

// let changeClassFont = () => {
//     changeFont.classList.toggle("p_font_change");
// };

// let changeCircle = document.querySelectorAll(".circle");

// let changePosition = () => {
//     changeCircle.forEach(circle => {
//         circle.classList.toggle("circle_one");
//     });
// };

// buttonClick.addEventListener("click", () => {
//     changeClassFont(); 
//     changePosition(); 
// }); 