const MEMORY_CARDS = document.querySelectorAll('.memory__card');
const INFORMATION_STEPS = document.getElementById('information__steps');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let steps = 0;
MEMORY_CARDS.forEach(card => card.addEventListener('click', flipCard));



function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip__card');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    lockBoard = true;

    checkForMatchCard();
}


function addInformationSteps() {
    steps++;
    INFORMATION_STEPS.textContent = `Steps: ${steps}`;
    localStorage.setItem('test', steps);
  
}

console.log(localStorage);


function checkForMatchCard() {
    let isMatch = firstCard.dataset.cardname === secondCard.dataset.cardname;
    addInformationSteps();
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip__card');
        secondCard.classList.remove('flip__card');
        resetBoard();
    }, 1500);

}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffleCards() {
    MEMORY_CARDS.forEach(card => {
        let randomPosition = Math.floor(Math.random() * 12);
        card.style.order = randomPosition;
    })
})();