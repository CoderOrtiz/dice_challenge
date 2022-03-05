// Enter Your Name
player = prompt("What is your name?");

// This Ensures if "Player 2 Wins" will be Displayed, if User Hits "Cancel" when Prompt is Displayed
player = player || "Player 2";

// Capitalize's the First Letter & Decapitalizes the remaining letters
namePart1 = player.slice(0, 1);
namePart2 = player.slice(1, 15);

// Adds "namePart1" & "namePart2" to Make the Player's Name Grammatically Correct
player2 = namePart1.toUpperCase() + namePart2.toLowerCase() || "Player 2";

// Welcome Message
alert("Welcome " + player2 + ", prepare to lose! 😈");

// Adds Player 2's Name Above Player Two in Game
if (player2) {
    document.querySelectorAll("p")[1].textContent = player2;
}
else { };

// When You Click, "Click Me!", The Game Begins
function run() {

    // Dice 1
    number1 = Math.floor(Math.random() * 6) + 1;
    dice1 = "./assets/images/dice" + number1 + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", dice1);

    //  Dice 2
    number2 = Math.floor(Math.random() * 6) + 1;
    dice2 = "./assets/images/dice" + number2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", dice2);

    // Selecting Winner & Pronouncing Winner
    if (number1 > number2) {
        document.querySelector("h3").textContent = "Skynet wins 😝 😎";
    }
    else if (number1 < number2) {
        document.querySelector("h3").textContent = player2 + " Wins 😭";
    }
    else {
        document.querySelector("h3").textContent = "Its a Draw 🪖 🏳";
    }

}
