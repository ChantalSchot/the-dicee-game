// Generate two random numbers between 1-6:

var randomNumber1 = Math.floor( (Math.random() * 6 ) ) + 1;
var randomNumber2 = Math.floor( (Math.random() * 6 ) ) + 1;




// function generateNumbers() {
// 	var newRandomNumber1 = Math.floor( (Math.random() * 6 ) ) + 1;
// 	var newRandomNumber2 = Math.floor( (Math.random() * 6 ) ) + 1;
// 	document.querySelector(".dice-left").setAttribute("src", "images/dice" + newRandomNumber1 + ".png");
// 	document.querySelector(".dice-right").setAttribute("src", "images/dice" + newRandomNumber2 + ".png");
// 	window.location.replace(window.location.href);
// 	console.log(newRandomNumber1,newRandomNumber2);
// }


// // Variable alert to ask for names:
//
// var playerName1 = prompt("Who is player 1?");
// var playerName2 = prompt("Who is player 2?");
//
//
// // Select player 1 & player 2 text variables to replace with actual names:
//
// var player1 = document.querySelector(".player-one");
// var player2 = document.querySelector(".player-two");
//
//
// if (playerName1) {
// 	player1.innerHTML = playerName1;
// }
//
// if (playerName2) {
// 	player2.innerHTML = playerName2;
// }


// Select src attribute of images to replace the random number for dice number in the images:
document.querySelector(".dice-left").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".dice-right").setAttribute("src", "images/dice" + randomNumber2 + ".png");




// Select h1 to make new var which changes depending on outcome:

var titleText = document.querySelector(".title");
// titleText.innerHTML = "Test";

// If-statement for text when player 1 or 2 wins or when there's a draw:


if (randomNumber1 > randomNumber2) { // if player 1 wins
	titleText.innerHTML = "<img src='images/flag.png'> Player 1 wins!";
}

else if (randomNumber2 > randomNumber1 ) { // if player 2 wins
	titleText.innerHTML = "Player 2 wins! <img src='images/flag.png'>";
}

else {
	titleText.innerHTML = "It's a draw!";

}
