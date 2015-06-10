"use strict";
/**
 * Created by kurmasz on 2/11/15.
 */

// define pig game if not defined for testing
if (PigGame === undefined)
    var PigGame = {};

PigGame.Model = (function () {
    var init = function (playerNames, targetScore_in) {
        var gameDie;
        var prevPlayer;
        var players = playerNames;
        var currentPlayer = 0;
        var currentPoint = 0;
        var targetScore = targetScore_in;
        var winner = null;

        var currentDieValue = function() {
            return gameDie.value();
        };

        var getTargetScore = function() {
            return targetScore;
        };

        var setGameDie = function(dice) {
            gameDie = dice;
        };

        var getPlayerScore = function(index) {
            return players[index].getScore();
        };

        var getPlayerName = function(index) {
            return players[index].getName();
        };

        var getCurrentPoint = function() {
            return currentPoint;
        };

        var getCurrentPlayer = function() {
            return currentPlayer;
        };

        var getPrevPlayer = function() {
            return prevPlayer;
        };

        var roll = function() {

            // simulates rolling the dice
            gameDie.random();

            // check if user rolled a 1
            if (currentDieValue() === 1) {

                // go to next player and reset score
                resetPoints();
                return false;
            } else {

                // increment current point value
                currentPoint += currentDieValue();
            }
        };

        var pass = function() {

            // increment the score
            if (currentPoint > 0)
                players[currentPlayer].add(currentPoint);

            // check for winner
            if (players[currentPlayer].getScore() >= getTargetScore())
                winner = players[currentPlayer].getName();

            // update current player index
            prevPlayer = currentPlayer;
            currentPlayer = currentPlayer < players.length - 1 ? currentPlayer + 1 : 0;
            resetPoints();
        };

        var resetPoints = function() {
            currentPoint = 0;
        };

        var getWinner = function() {
            return winner;
        };
        return {
            currentDieValue: currentDieValue,
            getTargetScore: getTargetScore,
            getPlayerScore: getPlayerScore,
            getCurrentPoint: getCurrentPoint,
            getCurrentPlayer: getCurrentPlayer,
            getPrevPlayer: getPrevPlayer,
            getWinner: getWinner,
            setGameDie: setGameDie,
            getPlayerName: getPlayerName,
            roll: roll,
            pass: pass
        };
    };

    // If you want your model to have static methods, they would go here.
    return {
        init: init
    };
})();