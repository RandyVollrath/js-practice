
inputNumber = prompt("Enter your guess of a number: ")
var computerNumber = Math.floor((Math.random() *50) +1);

while (inputNumber != computerNumber) {

inputNumber = prompt("Enter your guess of a number: ")

if (inputNumber > computerNumber) {
	alert("Too high!")
}
else if (inputNumber < computerNumber) {
	alert("Too low!")
}
else {
	alert("You got it!")
}
}

alert("You are one sexy guy")

alert("Love that you're still clicking okay")

alert("Like why? You already won! You did it! Why are you still here?")