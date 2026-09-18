let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let message_El = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cards_El = document.getElementById("cards-el")
let player1Time = 6;
let player2Time = 7;
let fastestRace = getFastestRaceTime()
let totalTime = gameTime()

let randomcard = getRandomCard()
console.log(cards)

function getFastestRaceTime() {
    if (player1Time < player2Time) return player1Time
    else if (player1Time > player2Time) return player2Time
    else return player1Time
}


function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber == 1) return 11
    if (randomNumber > 10) {
        return 10;
    }

    else return randomNumber
}


function gameTime() {
    return player1Time + player2Time
}


console.log(totalTime)



function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards.push(firstCard, secondCard)
    sum = firstCard + secondCard
    renderGame()
}



function renderGame() {

    cards_El.textContent = "Cards:"


    for (let i = 0; i < cards.length; i++) {

        cards_El.textContent += cards[i] + " "

    }

    sumEl.textContent = "sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    }

    else if (sum == 21) {
        message = "Wahoo! you have got  a blackjack"
        hasBlackJack = true

    }

    else {
        message = "You're out of the game!"
        isAlive = false
        console.log(isAlive)
    }

    message_El.textContent = message
}


function newCard() {
    let card = getRandomCard()
    cards.push(card)
    sum += card
    startGame()
}

console.log(message)
