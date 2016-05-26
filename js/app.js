//global variables
var cross = "X";
var circle = "O";
var counter = 0;
var randomNumber;
var randomSquare;
var button = $('.play-again');

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
    } else {
        return false;
    }
}

//function that randomly puts circles in the cell
function playerAI() {
    do {
        randomNumber = Math.floor((Math.random() * 9) - 1);
        randomSquare = $('.square').eq(randomNumber);
        if (counter == 9) {
            return;
        }
    } while (randomSquare.children().text() != '' && counter < 9)
    randomSquare.children().append(circle);
    counter++;
}

//play again button function
var playAgain = function() {
    button.click(function() {
        $('.square').children().empty();
        $('.feedback').empty();
        button.hide();
        counter = 0;
        // game();
    })
}

//function that allows player to start game
var game = function() {
    $('.square').on("click", function(event) {
        if ($(this).children().text() == '') {
            $(this).children().append(cross);
            counter++;
            playerAI();
            winner();
            if (counter == 9 && !winner()) {
                $('.feedback').append('Cat\'s Game!');
                button.show();
            }
        }
        else {
            alert('A move has been already made on this cell!');
        }
        return;
    })
}

$(document).ready(function() {
    button.hide();
    game();
    playAgain();
});