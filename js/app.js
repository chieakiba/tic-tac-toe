//global variables
var cross = "X";
var circle = "O";
var counter = 0;
var clickedCell = $('.square');
var randomNumberArray = new Array();
var randomNumber;
var randomSquare;
var crossLocation;
var checkRepeatNumber;


//function that randomly puts circles in the cell
function playerAI() { 
    do {
        randomNumber = Math.floor((Math.random() * 9) - 1);
        randomSquare = $('.square').eq(randomNumber);
    } while (randomSquare.children().text() != '' && counter < 9)
    randomSquare.children().append(circle);
    counter++;
}


$(document).ready(function() {
    //function that allows player to put the cross on the cell they click
    $('.square').one("click", function() {
        $(this).children().append(cross);
        counter++;
        if (counter == 9) {
            return;
        }
        playerAI();
    })
    //function to determine winner
    if ($('#third-row .square').children().html() == cross && $('#third-row .square.sides').children().html() == cross && $('#third-row .square').children().html() == cross) {
        console.log('this works');
        $('.feedback').append('Congratulations! You won!');
    }
});