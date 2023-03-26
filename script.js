//your JS code here. If required.
const imageUrls = [/* 6 image URLs */];
const duplicatedClass = `img${Math.floor(Math.random() * 5) + 1}`;

const images = document.querySelectorAll('img');
const verifyBtn = document.getElementById('verify');
const resetBtn = document.getElementById('reset');
const para = document.getElementById('para');

let selectedImages = [];

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function resetState() {
  selectedImages = [];
  images.forEach(image => image.classList.remove('selected'));
  verifyBtn.style.display = 'none';
  para.innerText = '';
}

function handleImageClick(e) {
  const clickedImage = e.target;
  if (clickedImage.classList.contains('selected')) {
    return;
  }

  clickedImage.classList.add('selected');
  selectedImages.push(clickedImage);

  if (selectedImages.length === 2) {
    verifyBtn.style.display = '

