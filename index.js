var btn = document.getElementById('new');
var text = document.querySelectorAll('h1');

btn.addEventListener("click", function() {
    var randomNumber1 = Math.random() * 6;
    randomNumber1 = Math.floor(randomNumber1) + 1;

    var randomDiceImage = "images/dice" + randomNumber1 + ".png";

    document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);

    var randomNumber2 = Math.random() * 6;
    randomNumber2 = Math.floor(randomNumber2) + 1;

    var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

    document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

    if (randomNumber1 > randomNumber2) {
        text[0].innerHTML = "Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
        text[0].innerHTML = "Player 2 Wins!";
    } else if (randomNumber1 === randomNumber2) {
        text[0].innerHTML = "Draw!";
    }
});
