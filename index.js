var randomNumber1 = Math.floor(Math.random() * 6) +1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "./assets/images/" + randomDiceImage;


    
var image1 = document.querySelectorAll("img")[0]
image1.setAttribute("src", randomImageSource);


var image1 = document.querySelectorAll("img")[1]
image1.setAttribute("src", randomImageSource);



// document.getElementById("button").addEventListener("click", image);


// image2 = document.querySelectorAll("img")[1].setAttribute("img", "randomImageSource");

// document.getElementById("action").addEventListener("click", img);

// function dice(){
//     document.querySelector("img").setAttribute("img", "image1");
// }