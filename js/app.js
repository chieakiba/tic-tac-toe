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
        return true;
    } else if ($('.fourth').text() == cross && $('.fifth').text() == cross && $('.sixth').text() == cross) {
        return true;
    } else if ($('.seventh').text() == cross && $('.eighth').text() == cross && $('.ninth').text() == cross) {
        return true;
    } else if ($('.first').text() == cross && $('.fifth').text() == cross && $('.ninth').text() == cross) {
        return true;
    } else if ($('.third').text() == cross && $('.fifth').text() == cross && $('.seventh').text() == cross) {
        return true;
    } else if ($('.first').text() == cross && $('.fourth').text() == cross && $('.seventh').text() == cross) {
        return true;
    } else if ($('.second').text() == cross && $('.fifth').text() == cross && $('.eighth').text() == cross) {
        return true;
    } else if ($('.third').text() == cross && $('.sixth').text() == cross && $('.ninth').text() == cross) {
        return true;
    } else {
        return false;
    }
}

//function to determine if the player lost
var lose = function() {
    if ($('.first').text() == circle && $('.second').text() == circle && $('.third').text() == circle) {
        return true;
    } else if ($('.fourth').text() == circle && $('.fifth').text() == circle && $('.sixth').text() == circle) {
        return true;
    } else if ($('.seventh').text() == circle && $('.eighth').text() == circle && $('.ninth').text() == circle) {
        return true;
    } else if ($('.first').text() == circle && $('.fifth').text() == circle && $('.ninth').text() == circle) {
        return true;
    } else if ($('.third').text() == circle && $('.fifth').text() == circle && $('.seventh').text() == circle) {
        return true;
    } else if ($('.first').text() == circle && $('.fourth').text() == circle && $('.seventh').text() == circle) {
        return true;
    } else if ($('.third').text() == circle && $('.sixth').text() == circle && $('.ninth').text() == circle) {
        return true;
    } else if ($('.second').text() == circle && $('.fifth').text() == circle && $('.eighth').text() == circle) {
        return true;
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
    } while (randomSquare.children().text() != '' && counter <= 9)
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
    })
}

//function that allows player to start game
var game = function() {
    $('.square').on("click", function(event) {
        if ($(this).children().text() == '') {
            $(this).children().append(cross);
            counter++;
            playerAI();
            var win = winner();
            var loser = lose();
            if (win) {
                $('.feedback').html('Congratulations! You won!');
                button.show();
            } else if (loser) {
                $('.feedback').html('Darn! You lost!');
                button.show();
            }
            if (counter == 9) {
                if (winner()) {

                } else if (lose()) {
                    $('.feedback').html('Darn! You lost!');
                    button.show();
                } else {
                    $('.feedback').html('Cat\'s Game!');
                    button.show();
                }
            } else {
                lose();
            }
        } else {
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