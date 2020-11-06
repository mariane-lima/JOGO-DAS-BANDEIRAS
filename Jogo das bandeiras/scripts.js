const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let counter = 0;

//audio
let audio = new Audio('audio/match.wav'); //https://freesound.org/people/aji_/sounds/66136/
let audio2 = new Audio('audio/shuffle.wav'); //https://freesound.org/people/f4ngy/sounds/240778/

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;

    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    setTimeout(function() {audio.play()}, 1);
    setTimeout(openPopup, 500);
}

function openPopup() {
    if (firstCard.dataset.framework && secondCard.dataset.framework === "brasil"){
        document.getElementById("buttonPop").style.backgroundImage = "url('img/brasil.jpg')"; //form1
        document.getElementById("popButton").style.display = "block"; //form1
    }
    else if (firstCard.dataset.framework && secondCard.dataset.framework === "alemanha") {
        document.getElementById("buttonPop").style.backgroundImage = "url('img/alemanha.jpg')";
        document.getElementById("popButton").style.display = "block";
    }
    else if (firstCard.dataset.framework && secondCard.dataset.framework === "argentina"){
        document.getElementById("buttonPop").style.backgroundImage = "url('img/argentina.jpg')";
        document.getElementById("popButton").style.display = "block";
    }
    else if (firstCard.dataset.framework && secondCard.dataset.framework === "australia"){
        document.getElementById("buttonPop").style.backgroundImage = "url('img/australia.jpg')";
        document.getElementById("popButton").style.display = "block";
    }
    else if (firstCard.dataset.framework && secondCard.dataset.framework === "canada"){
        document.getElementById("buttonPop").style.backgroundImage = "url('img/canada.jpg')";
        document.getElementById("popButton").style.display = "block";
    }
    else if (firstCard.dataset.framework && secondCard.dataset.framework === "suica"){
        document.getElementById("buttonPop").style.backgroundImage = "url('img/suica.jpg')";
        document.getElementById("popButton").style.display = "block";
    }
    else if (firstCard.dataset.framework && secondCard.dataset.framework === "japao"){
        document.getElementById("buttonPop").style.backgroundImage = "url('img/japao.jpg')";
        document.getElementById("popButton").style.display = "block";
    }
    else {
        document.getElementById("buttonPop").style.backgroundImage = "url('img/USA.jpg')";
        document.getElementById("popButton").style.display = "block";
    }

}

function changePopup() {
    if (firstCard.dataset.framework && secondCard.dataset.framework === "brasil"){
        document.getElementById("popButton").style.display = "none";
        document.getElementById("form1").style.display = "block"; //form1
    }
    else if (firstCard.dataset.framework && secondCard.dataset.framework === "alemanha"){
        document.getElementById("popButton").style.display = "none";
        document.getElementById("form2").style.display = "block"; //form1
    }
    else if (firstCard.dataset.framework && secondCard.dataset.framework === "argentina"){
        document.getElementById("popButton").style.display = "none";
        document.getElementById("form3").style.display = "block"; //form1
    }
    else if (firstCard.dataset.framework && secondCard.dataset.framework === "australia"){
        document.getElementById("popButton").style.display = "none";
        document.getElementById("form4").style.display = "block"; //form1
    }
    else if (firstCard.dataset.framework && secondCard.dataset.framework === "canada"){
        document.getElementById("popButton").style.display = "none";
        document.getElementById("form5").style.display = "block"; //form1
    }
    else if (firstCard.dataset.framework && secondCard.dataset.framework === "suica"){
        document.getElementById("popButton").style.display = "none";
        document.getElementById("form6").style.display = "block"; //form1
    }
    else if (firstCard.dataset.framework && secondCard.dataset.framework === "japao"){
        document.getElementById("popButton").style.display = "none";
        document.getElementById("form7").style.display = "block"; //form1
    }
    else {
        document.getElementById("popButton").style.display = "none";
        document.getElementById("form8").style.display = "block"; //form1
    }
}

function openFinal(){
    document.getElementById("form1").style.display = "none";
    document.getElementById("form2").style.display = "none";
    document.getElementById("form3").style.display = "none";
    document.getElementById("form4").style.display = "none";
    document.getElementById("form5").style.display = "none";
    document.getElementById("form6").style.display = "none";
    document.getElementById("form7").style.display = "none";
    document.getElementById("form8").style.display = "none";
    document.getElementById("formFinal").style.display = "block";
}

function closePopup() {
    document.getElementById("form1").style.display = "none";
    document.getElementById("form2").style.display = "none";
    document.getElementById("form3").style.display = "none";
    document.getElementById("form4").style.display = "none";
    document.getElementById("form5").style.display = "none";
    document.getElementById("form6").style.display = "none";
    document.getElementById("form7").style.display = "none";
    document.getElementById("form8").style.display = "none";
    document.getElementById("formFinal").style.display = "none";

    firstCard.classList.add('flipped');
    secondCard.classList.add('flipped');

    setTimeout(resetBoard, 1);

    counter ++;

    if (counter === 8) {
        unshuffle();
        setTimeout(openFinal, 2500);
    }
}

function callPopup(c) {
    if (c.classList.contains('flipped') && c.dataset.framework === "mukkuri") {
        document.getElementById("form1").style.display = "block";
    }
    else if (c.classList.contains('flipped') && c.dataset.framework === "tonkori") {
        document.getElementById("form2").style.display = "block";
    }
    else if (c.classList.contains('flipped') && c.dataset.framework === "birdDance") {
        document.getElementById("form3").style.display = "block";
    }
    else if (c.classList.contains('flipped') && c.dataset.framework === "chaChaPiya") {
        document.getElementById("form4").style.display = "block";
    }
    else if (c.classList.contains('flipped') && c.dataset.framework === "embroidery1") {
        document.getElementById("form5").style.display = "block";
    }
    else if (c.classList.contains('flipped') && c.dataset.framework === "embroidery2") {
        document.getElementById("form6").style.display = "block";
    }
    else if (c.classList.contains('flipped') && c.dataset.framework === "object1") {
        document.getElementById("form7").style.display = "block";
    }
    else if (c.classList.contains('flipped') && c.dataset.framework === "object2") {
        document.getElementById("form8").style.display = "block";
    }
}

// function matchSound() {
//
// }


function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    },1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

function unshuffle() {
    cards.forEach(card => {
        card.style.order = Math.floor(Math.random() * 1);
    });
}

function playAgain() {
    setTimeout(function(){window.location.reload()}, 3000);
    audio2.play();
}

 (function shuffle() {
       cards.forEach(card => {
           card.style.order = Math.floor(Math.random() * 16);
          });
    })();


cards.forEach(card => card.addEventListener('click', flipCard));
cards.forEach(card => card.addEventListener('click', function(){ callPopup(card)}));
