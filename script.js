let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
  renderGame()
}

function renderGame() {
  cardsEl.textContent = "Cards: " + cards[0] + "," + " " + cards[1]
  sumEl.textContent = "Sum: " + sum
  if (sum <= 20) {
      message = "Do you want to draw a new card?"
  } else if (sum === 21) {
      message = "You've got Blackjack!"
      hasBlackJack = true
  } else {
      message = "!"
      isAlive = false
  }
  messageEl.textContent = message
  
}

function newCard(){
  console.log("Drawing a new card from the deck!")
    let randomCard = 7
    sum += randomCard
    cards.push(randomCard)
    console.log(cards)
    renderGame(newCard)
}
