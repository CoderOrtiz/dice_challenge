// Dice 1
number1 = Math.floor(Math.random() * 6) + 1;

dice1 = "./assets/images/dice" + number1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", dice1);

//  Dice 2

number2 = Math.floor(Math.random() * 6) + 1;

dice2 = "./assets/images/dice" + number2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", dice2);

