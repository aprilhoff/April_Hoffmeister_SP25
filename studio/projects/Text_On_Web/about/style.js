// with the slider
var input = document.querySelector('input');
let changeFont = document.querySelector('p');
let changeHeader = document.querySelector('.header');
let changeHome = document.querySelector('h1');
let changeNav = document.querySelector('.nav');
let changeStar = document.querySelector('.nav_star');
let changeTrack = document.querySelector('#slider');
let changeLast = document.querySelector('.nav_star_new');

input.addEventListener('input', function() {
    styleBox();
});

styleBox();

function styleBox() {
    changeFont.classList.remove("p_font_change", "p_color_change_about", "p_border_add_about");
    changeHeader.classList.remove("header_change_about");
    changeHome.classList.remove("h1_change_about");
    changeNav.classList.remove("nav_change_about");
    changeStar.classList.remove("nav_star_change_about");
    changeTrack.classList.remove("change_track_about", "change_thumb_about")
    changeLast.classList.remove("nav_star_about");


    let inputValue = parseInt(input.value);

    if (inputValue === 1) {
        console.log('change 1');
        changeFont.classList.add("p_font_change");
    } else if (inputValue === 2) {
        console.log('change two');
        changeFont.classList.add("p_border_add_about");
    } else if (inputValue === 3) {
        console.log('change three');
        changeFont.classList.add("p_color_change_about");
    } else if (inputValue === 4) {
        console.log('change four');
        changeFont.classList.add("p_color_change_about");
        changeHeader.classList.add("header_change_about");
        changeHome.classList.add("h1_change_about");
        changeNav.classList.add("nav_change_about");
        changeStar.classList.add("nav_star_change_about");
        changeTrack.classList.add("change_track_about", "change_thumb_about");
        changeLast.classList.add("nav_star_about");

    }
}

