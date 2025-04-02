// get the entries 
var request = await fetch('entries.json');
var entries = await request.json();

console.log(entries); 

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



// get input elements
var characterSelect = document.querySelector('input[name="character"]');
var adjectiveSelect = document.querySelectorAll('input[name="adjective"]'); 
var cheatSelect = document.querySelector('select[name="cheat"]');

console.log(characterSelect, adjectiveSelect, cheatSelect);

// get the sumbmit button 
var submitButton = document.querySelector('input[name="Submit"]');

console.log(submitButton);

// get the output elements
var output = document.querySelector('.output');
var main = document.querySelector('main');
var keyImage = document.querySelector('.key');



// add event listener to the button 

submitButton.addEventListener('click', () => {
    // get the active settings
    var characterIndex = characterSelect.value;  
    var character;
    if (characterIndex === "0") character = "introvert";
    if (characterIndex === "1") character = "ambivert";
    if (characterIndex === "2") character = "extrovert";

    var adjective;
    if (document.getElementById('Obsessive').checked) {
        adjective = "obsessive";
    } else if (document.getElementById('Greedy').checked) {
        adjective = "greedy";
    } else if (document.getElementById('Pessimistic').checked) {
        adjective = "pessimistic";
    }
    var cheat = cheatSelect.value;

    console.log(character, adjective, cheat);

    // get the matching entry
    var matchingEntry = entries.find((entry)=>{
        return entry.character == character
            && entry.adjective == adjective
            && entry.cheat == cheat;

    }); 
    console.log(matchingEntry);

   

    if (matchingEntry) {
        output.innerHTML = `<img src="../assets/card.png" id="card_1"> 
                            <img src="../assets/card.png" id="card_2"> 
                            <img src="../assets/card.png" id="card_3">`
                            

                            
        keyImage.innerHTML = `<img src="key.png" id="key_image_style">`;
    
        var cards = [
            document.getElementById("card_1"),
            document.getElementById("card_2"),
            document.getElementById("card_3")
        ];
    
        var cardImages = [
            matchingEntry.card_1, 
            matchingEntry.card_2, 
            matchingEntry.card_3  
        ];
    
        var randomIndex = Math.floor(Math.random() * 3); 
        var card_isChosen = false;
    
        var q_isDown = false, e_isDown = false, f_isDown = false;
        var p_isDown = false, i_isDown = false, h_isDown = false;
    
        var keyPressTimes = {
            q: 0,
            e: 0,
            f: 0,
            p: 0,
            i: 0,
            h: 0
        };
    
        var requiredHoldTime = 3000; 
        var allKeysPressedAndHeld = false;
    
        window.addEventListener('keydown', (event) => {
            if (!card_isChosen) { 
                if (event.key === 'q' && !q_isDown) {
                    q_isDown = true;
                    keyPressTimes.q = Date.now();
                }
                if (event.key === 'e' && !e_isDown) {
                    e_isDown = true;
                    keyPressTimes.e = Date.now();
                }
                if (event.key === 'f' && !f_isDown) {
                    f_isDown = true;
                    keyPressTimes.f = Date.now();
                }
                if (event.key === 'p' && !p_isDown) {
                    p_isDown = true;
                    keyPressTimes.p = Date.now(); 
                }
                if (event.key === 'i' && !i_isDown) {
                    i_isDown = true;
                    keyPressTimes.i = Date.now(); 
                }
                if (event.key === 'h' && !h_isDown) {
                    h_isDown = true;
                    keyPressTimes.h = Date.now();
                }
    
                if (
                    q_isDown && e_isDown && f_isDown && p_isDown && i_isDown && h_isDown &&
                    (Date.now() - keyPressTimes.q >= requiredHoldTime) &&
                    (Date.now() - keyPressTimes.e >= requiredHoldTime) &&
                    (Date.now() - keyPressTimes.f >= requiredHoldTime) &&
                    (Date.now() - keyPressTimes.p >= requiredHoldTime) &&
                    (Date.now() - keyPressTimes.i >= requiredHoldTime) &&
                    (Date.now() - keyPressTimes.h >= requiredHoldTime)
                ) {
                    allKeysPressedAndHeld = true;
                }

            
    
                if (allKeysPressedAndHeld && !card_isChosen) {
                    card_isChosen = true;
                    var randomCard = cards[randomIndex];
                    randomCard.src = `cards/${cardImages[randomIndex]}`; 
                


                    cards.forEach((card, index) => {
                        if (index !== randomIndex) {
                            card.style.display = "none";
                        }
                        keyImage.style.display = 'none';
                    });
                    
                    // randomCard.style.transition = "transform 0.5s ease-in-out"; 
                    randomCard.style.transform = "scale(1.2) translateX(-120px) translateY(50px)"; 

                    console.log(`Chosen card: ${randomCard.src}`);
            
                    var characterParagraph = document.querySelector('.character_paragraph');

                    if (randomIndex === 0) {
                        characterParagraph.innerText = matchingEntry.card_1_paragraph;
                    } else if (randomIndex === 1) {
                        characterParagraph.innerText = matchingEntry.card_2_paragraph;
                    } else if (randomIndex === 2) {
                        characterParagraph.innerText = matchingEntry.card_3_paragraph;
                    }

                    characterParagraph.style.display = "inline-block";

               
                }
                
            }
        });
    
        window.addEventListener('keyup', (event) => {
            if (event.key === 'q' && q_isDown) q_isDown = false;
            if (event.key === 'e' && e_isDown) e_isDown = false;
            if (event.key === 'f' && f_isDown) f_isDown = false;
            if (event.key === 'p' && p_isDown) p_isDown = false;
            if (event.key === 'i' && i_isDown) i_isDown = false;
            if (event.key === 'h' && h_isDown) h_isDown = false;
        });
    
        main.style.display = 'none'; 
    } else {
        output.innerHTML = `<p class="message"><em>YOUR INPUT IS INVALID</em><br>Re-evaluate your answers to the questions and try submitting the form again.</p>, <button class="exit">X</button>`;
    }
    
    // target exit button 
    var exitButton = document.querySelector(".exit")

    exitButton.addEventListener('click', ()=>{
        window.location.href = "index.html";
})
}) 




