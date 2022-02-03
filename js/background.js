const images = [];

for (let i = 0; i <= 14; i++) {
  images.push(i);
}
console.log(images);

const chosenImage = images[Math.floor(Math.random() * images.length)];

const background = document.createElement("img");
background.src = `/images/${chosenImage}.jpg`;
background.classList.add("bgImg");

document.body.appendChild(background);
