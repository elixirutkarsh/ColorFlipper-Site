// Helper function to generate a random hexadecimal color code
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to handle button click event
function flipColor() {
  const colorCode = document.getElementById('color-code');
  const newColor = getRandomColor();
  
  document.body.style.backgroundColor = newColor;
  colorCode.textContent = newColor;
}

// Attach event listener to the button
const flipButton = document.getElementById('flip-button');
flipButton.addEventListener('click', flipColor);
