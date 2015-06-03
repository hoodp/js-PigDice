"use strict";
/**
 * Created by kurmasz on 2/11/15.
 */


PigGame.Model = (function () {

    var init = function (playerNames, targetScore_in) {

        // This shows you the instance variables I used when I implemented PigDice.
        // Feel free to change this list as you see fit.
        var gameDie;
        var players;
        var currentPlayer;
        var currentPoint;
        var targetScore;
        var bustedHandler;

        //TODO:  Add any other necessary instance variables and instance methods 

        // This shows you the list of instance methods I created for my view.
        // Feel free to change this list as you see fit.
        return {
            currentDieValue: currentDieValue,
            getTargetScore: getTargetScore,
            getPlayerScores: getPlayerScores,
            getCurrentPoint: getCurrentPoint,
            getCurrentPlayer: getCurrentPlayer,
            setBustedHandler: setBustedHandler,
            roll: roll,
            pass: pass
        }
    };

    // If you want your model to have static methods, they would go here.
    return {
        init: init
    }
})();