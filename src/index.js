import generateJoke from "./generateJoke";
import "../styles/main.scss";
import corn from "./assets/Corn.svg";

const CornImg = document.getElementById("cornImg");
CornImg.src = corn;

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke);

generateJoke();
