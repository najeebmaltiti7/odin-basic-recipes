const container = document.getElementById('container');
const button = document.getElementById('resizeBtn');

function createGrid(size) {
  container.innerHTML = ''; // Clear previous grid
  const squareSize = 960 / size;
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement('div');
    div.classList.add('square');
    div.style.width = `${squareSize}px`;
    div.style.height = `${squareSize}px`;
    div.addEventListener('mouseover', () => {
      div.style.backgroundColor = 'black';
    });
    container.appendChild(div);
  }
}

button.addEventListener('click', () => {
  let newSize = prompt("Enter new grid size (max 100):", 16);
  newSize = parseInt(newSize);
  if (newSize > 0 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert("Invalid size. Must be 1–100.");
  }
});

createGrid(16);
div.addEventListener('mouseover', () => {
  if (!div.style.backgroundColor) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    div.style.opacity = 0.1;
  } else {
    let opacity = parseFloat(div.style.opacity);
    if (opacity < 1) div.style.opacity = opacity + 0.1;
  }
});
