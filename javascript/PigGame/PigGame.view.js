"use strict";
/**
 * Created by kurmasz on 2/16/15.
 */

PigGame.View = (function () {

    /**
     * Constructor
     * @returns {{setRollHandler: setRollHandler, setPassHandler: setPassHandler, showBoard: showBoard, initScoreList: initScoreList, updateDie: updateDie, updateWinningScore: updateWinningScore, updatePlayerScores: updatePlayerScores, updateCurrentPoint: updateCurrentPoint, updateCurrentPlayer: updateCurrentPlayer, displayBustedMessage: displayBustedMessage}}
     */
    var init = function () {

        //TODO:  Add any other necessary instance variables and instance methods 

        // This shows you the list of instance methods I created for my view.
        // Feel free to change this list as you see fit.
        return {
            setRollHandler: setRollHandler,
            setPassHandler: setPassHandler,
            showBoard: showBoard,
            initScoreList: initScoreList,
            updateDie: updateDie,
            updateWinningScore: updateWinningScore,
            updatePlayerScores: updatePlayerScores,
            updateCurrentPoint: updateCurrentPoint,
            updateCurrentPlayer: updateCurrentPlayer,
            displayBustedMessage: displayBustedMessage
        }
    };


    return {
        init: init
    }
})();