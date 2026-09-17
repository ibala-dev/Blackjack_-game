let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let message_el = document.getElementById("message-el")
function start_game (){
if(sum<=20){
 message =  "Do you want to draw a new card? ☹️"
}
else if( sum == 21)
{
    message = "Wahoo! you have got  a blackjack 🤑"
    hasBlackJack = true

}
else {
   message = "You're out of the game! 😭"
    isAlive = false
    console.log(isAlive)
}


console.log(message)
message_el.textContent = message
}
 