
// nav circle 

// define elements
let revealNav = document.querySelector('.circle_hover');
let changeOpacityCollection = document.querySelector('.collection');
let changeAboutCollection = document.querySelector('.about');

// event listener
revealNav.addEventListener('click', function(){
    changeOpacityCollection.classList.toggle('collection_reveal');
    changeAboutCollection.classList.toggle('about_reveal');
});