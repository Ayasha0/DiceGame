let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let result = document.querySelector("h1");

let rand1 = Math.floor(Math.random() * 6) + 1;
let rand2 = Math.floor(Math.random() * 6) + 1;

let img1Src = "./images/dice" + rand1 + ".png";
let img2Src = "./images/dice" + rand2 + ".png";

if (rand1 > rand2) {
	result.innerHTML = "Player 1 Wins 🏴";
} else if (rand2 > rand1) {
	result.innerHTML = "Player 2 Wins 🏳️";
} else {
	result.innerHTML = "Draw!";
}

img1.setAttribute("src", img1Src);
img2.setAttribute("src", img2Src);
