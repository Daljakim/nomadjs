 const images = [ "2.jpg", "3.jpg", "4.jpg",
     "5.jpg", "6.jpg" ];


const imageRandom = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${imageRandom}`;

document.body.appendChild(bgImage);
bgImage.classList.add("randomimg");