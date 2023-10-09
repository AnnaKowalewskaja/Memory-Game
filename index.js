const memoryCards = document.querySelectorAll('.memory__card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let steps = 0;
memoryCards.forEach(card => card.addEventListener('click', flipCard));








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


function checkForMatchCard() {
    let isMatch = firstCard.dataset.cardname === secondCard.dataset.cardname;
    steps++;
console.log(steps);
    console.log(firstCard.dataset.cardname, secondCard.dataset.cardname);
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
    memoryCards.forEach(card => {
        let randomPosition = Math.floor(Math.random() * 12);
        card.style.order = randomPosition;
    })
})();