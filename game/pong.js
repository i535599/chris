// script.js
document.addEventListener('DOMContentLoaded', () => {
  // Array of random drinking game challenges
  const cards = [
    "Take 2 sips!",
    "Give out 3 sips.",
    "Everyone drinks 1 sip.",
    "Make a rule!",
    "Take a shot!",
    "Swap drinks with someone.",
    "The person to your left drinks.",
    "The person to your right drinks.",
    "Do 5 pushups or take 2 sips.",
    "Tell a funny story or take a shot.",
    "Sing a song or take 3 sips.",
    "Everyone drinks twice.",
    "Last person to touch the floor drinks.",
    "Everyone with a red shirt drinks.",
    "Drink if you've ever been to another country."
  ];

  // Get the card display element and button
  const cardDisplay = document.getElementById('card-text');
  const drawButton = document.getElementById('draw-card');

  // Function to draw a random card
  const drawCard = () => {
    const randomIndex = Math.floor(Math.random() * cards.length);
    cardDisplay.textContent = cards[randomIndex];
  };

  // Add event listener to the button
  drawButton.addEventListener('click', drawCard);
});
