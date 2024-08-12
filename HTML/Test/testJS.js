const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let currentCard = 0;

prevBtn.addEventListener('click', () => {
  currentCard = (currentCard - 1 + cards.length) % cards.length;
  updateCards();
});

nextBtn.addEventListener('click', () => {
  currentCard = (currentCard + 1) % cards.length;
  updateCards();
});

function updateCards() {
  cards.forEach((card, index) => {
    card.classList.remove('active', 'prev', 'next');
    if (index === currentCard) {
      card.classList.add('active');
    } else if (index === (currentCard - 1 + cards.length) % cards.length) {
      card.classList.add('prev');
    } else if (index === (currentCard + 1) % cards.length) {
      card.classList.add('next');
    }
  });
}

updateCards();