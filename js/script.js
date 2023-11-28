// script.js

async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    displayData(data);
    startColorAnimation(); // Inicia la animación de cambio de color
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

function displayData(data) {
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('card-container');

  const card = document.createElement('div');
  card.classList.add('data-card');
  card.innerHTML = `
    <h2>${data.title}</h2>
    <p>${data.body}</p>
  `;

  cardContainer.appendChild(card);
  document.body.appendChild(cardContainer);
}

function startColorAnimation() {
  const dataCard = document.querySelector('.data-card');
  setInterval(() => {
    const randomColor = generateRandomColor();
    dataCard.style.borderColor = randomColor;
  }, 2000); // Cambia el color cada 2 segundos (ajustable según tus preferencias)
}

function generateRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

fetchData();
