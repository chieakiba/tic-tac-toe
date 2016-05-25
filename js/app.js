//global variables
var cross = "X";
var circle = "O";
var counter = 0;
var randomNumber;
var randomSquare;
var button = $('.play-again');
var board = [{
    cell: 1,
    point: 2,
}, {
    cell: 2,
    point: 7,
}, {
    cell: 3,
    point: 6,
}, {
    cell: 4,
    point: 9,
}, {
    cell: 5,
    point: 5,
}, {
    cell: 6,
    point: 1,
}, {
    cell: 7,
    point: 4,
}, {
    cell: 8,
    point: 3,
}, {
    cell: 9,
    point: 8,
}];

//function to determine winner
function winner() {
        if ($('.first').text() == cross && $('.second').text() == cross && $('.third').text() == cross) {
            $('.feedback').append('Congratulations! You won!');
            button.show();
        } else if ($('.fourth').text() == cross && $('.fifth').text() == cross && $('.sixth').text() == cross) {
            $('.feedback').append('Congratulations! You won!');
            button.show();
        } else if ($('.seventh').text() == cross && $('.eighth').text() == cross && $('.ninth').text() == cross) {
            $('.feedback').append('Congratulations! You won!');
            button.show();
        } else if ($('.first').text() == cross && $('.fifth').text() == cross && $('.ninth').text() == cross) {
            $('.feedback').append('Congratulations! You won!');
            button.show();
        } else if ($('.third').text() == cross && $('.fifth').text() == cross && $('.seventh').text() == cross) {
            $('.feedback').append('Congratulations! You won!');
            button.show();
        } else if ($('.first').text() == cross && $('.fourth').text() == cross && $('.seventh').text() == cross) {
            $('.feedback').append('Congratulations! You won!');
            button.show();
        } else if ($('.third').text() == cross && $('.sixth').text() == cross && $('.ninth').text() == cross) {
            $('.feedback').append('Congratulations! You won!');
            button.show();
        } else if ($('.second').text() == cross && $('.fifth').text() == cross && $('.eighth').text() == cross) {
            $('.feedback').append('Congratulations! You won!');
            button.show();
        } 

}

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
    button.hide();
    //function that allows player to put the cross on the cell they click
    $('.square').one("click", function() {
        $(this).children().append(cross);
        counter++;
        if (counter == 9) {
            return;
        }
        playerAI();
        winner();
        if (counter == 9 && !winner()) {
            $('.feedback').append('Cat\s Game!');
            button.show();
        }
    })

});