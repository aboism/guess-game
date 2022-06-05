function checkGuess() {
    if ((!won && score == 0) || won) {
        return;
    }

    const guess = parseInt(document.querySelector(".input").value);
    if (!guess) {
        document.querySelector(".answer").innerHTML = "Please enter a valid integer";
        return;
    }
    
    if (guess === number) {
        document.querySelector(".answer").innerHTML = "Yup! it's" + number + " :)";
        document.querySelector("body").style.backgroundColor = "#60b347"
        won = true;
    } else if (guess > number) {
        document.querySelector(".answer").innerHTML = "Your guess is greater than the number";
        score -= 1;
    } else if (guess < number) {
        document.querySelector(".answer").innerHTML = "Your guess is less than the number";
        score -= 1;
    }
    
    document.querySelector(".times").innerHTML = "Score: " + score;
    
    if (!won && score == 0) {
        document.querySelector(".answer").innerHTML = "You lost. It's " + number + " :(";
        document.querySelector("body").style.backgroundColor = "#ff4a4a";
        document.querySelector(".reset").style.backgroundColor = "#eedf5a";
        return;
    }

    guessed.push(guess);
    document.querySelector(".guessed").innerHTML = "You guessed: " + guessed;

    document.querySelector(".input").value = "";
}

const number = Math.floor(Math.random() * 100) + 1;
let score = 15;
const guessed = [];
let won = false;

document.querySelector(".btn").addEventListener("click", checkGuess);
document.querySelector(".input").addEventListener("keypress", 
function (event) {
    if (event.key === "Enter") {
        checkGuess();
    }
});
document.querySelector(".reset").addEventListener("click", 
function() {
    window.location.reload();
});
