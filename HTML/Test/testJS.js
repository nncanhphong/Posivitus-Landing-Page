const cards = document.querySelectorAll('.Card');

cards.forEach((card) => {
  const expandButton = card.querySelector('.expandInformation #Plus');
  const collapseButton = card.querySelector('.expandInformation #Subtraction');
  const information = card.querySelector('#information');

  expandButton.addEventListener('click', () => {
    card.classList.add('expanded');
  });

  collapseButton.addEventListener('click', () => {
    card.classList.remove('expanded');
  });
});