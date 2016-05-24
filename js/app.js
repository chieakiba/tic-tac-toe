//global variables
var cross = "X";
var circle = "O";
var td = $('td');
var turn = 0;
var won;
var player = 1;

//function that randomly puts circles in the remaining squares where "X" doesn't exist
function playerAI() {
	//determine location of the "X"
	var crossLocation = $('.square:contains(X)').text();
	var location = $('.square');
	if (location != crossLocation) {
		var randomNumber = Math.floor(Math.random() * 9);
		var randomSquare = $('td').eq(randomNumber - 1);
		randomSquare.append(circle);
	}
}
	



$(document).ready(function() {
	//if player clicks the squares in the table, put a cross or circle
	$('.square').one("click", function() {
		console.log(cross);
		$(this).children().append(cross);
	})
	//make a function that randomly puts "O" in one of the nine squares (but not the one taken)
	playerAI();
	$('.square.tb.sides span').append(circle).hide();
	//function to determine winner
		//
});
//for looping and recursive function like factorial functions n!