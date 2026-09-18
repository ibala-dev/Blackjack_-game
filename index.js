let firstCard = 10
let secondCard = 5
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let message_El = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cards_El = document.getElementById("cards-el") 
let card = 5

function startGame () {
    renderGame()
}

function renderGame (){
sumEl.textContent = "sum: " + sum
cards_El.textContent = "cards: " +   firstCard + " " + secondCard
if(sum<=20){
 message =  "Do you want to draw a new card?"
}
else if( sum == 21)
{
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

function newCard () {
    sum += card
    startGame()
}
 