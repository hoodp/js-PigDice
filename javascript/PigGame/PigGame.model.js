"use strict";
/**
 * Created by kurmasz on 2/11/15.
 */

PigGame.Model = (function () {
    var init = function (playerNames, targetScore_in) {

        // This shows you the instance variables I used when I implemented PigDice.
        // Feel free to change this list as you see fit.
        var gameDie;
        var prevPlayer;
        var players = playerNames;
        var currentPlayer = 0;
        var currentPoint = 0;
        var targetScore = targetScore_in;
        var scores = [0, 0, 0, 0];
        var winner = null;

        var currentDieValue = function() {
            return gameDie;
        };

        var getTargetScore = function() {
            return targetScore;
        };

        var setGameDie = function(dice) {
            gameDie = dice;
        };

        var getPlayerScores = function(index) {
            return scores[index];
        };

        var getPlayerScore = function(index) {
            return players[index].getScore();
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
            var points = gameDie.value();

            // check if user rolled a 1
            if (points === 1) {

                // go to next player and reset score
                resetPoints();
                return false;
            } else {

                // increment current point value
                currentPoint += points;
            }
        };

        var pass = function() {

            // add current score to users array
            /*if (currentPoint > 0)
                scores[currentPlayer] += currentPoint;

            // check for winner
            if (scores[currentPlayer] >= getTargetScore())
                winner = players[currentPlayer];*/
            if (currentPoint > 0)
                players[currentPlayer].incScore(currentPoint);

            /*// check for winner
            if (players[currentPlayer].getScore() >= getTargetScore())
                winner = players[currentPlayer];*/

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

        var getWinner = function(player) {
            return winner;
        };

        // This shows you the list of instance methods I created for my view.
        // Feel free to change this list as you see fit.
        return {
            currentDieValue: currentDieValue,
            getTargetScore: getTargetScore,
            getPlayerScore: getPlayerScore,
            getCurrentPoint: getCurrentPoint,
            getCurrentPlayer: getCurrentPlayer,
            getPrevPlayer: getPrevPlayer,
            getWinner: getWinner,
            setGameDie: setGameDie,
            roll: roll,
            pass: pass
        }
    };

    // If you want your model to have static methods, they would go here.
    return {
        init: init
    }
})();