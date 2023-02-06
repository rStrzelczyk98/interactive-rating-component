'use strict';

const thankYouCard = document.querySelector('.thank-you');
const ratingCard = document.querySelector('.rating-card');
const form = document.querySelector('.form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (!document.querySelector('input[name="rate"]:checked')) return;
  const rating = document.querySelector('input[name="rate"]:checked').value;
  ratingCard.classList.add('hidden');
  thankYouCard.children[1].textContent = `You selected ${rating} out of 5`;
  thankYouCard.classList.remove('hidden');
});
