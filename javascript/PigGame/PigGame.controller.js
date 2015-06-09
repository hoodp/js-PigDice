"use strict";
/**
 *
 * Controller for the PigGame MVC triad.
 *
 * Created by kurmasz on 3/23/15.
 */

PigGame.Controller = (function () {

    /**
     * Constructor
     * @param playerNames  An array containing the names of the players
     * @param targetScore  The score at which the game is over.
     */
    var init = function (playerNames, targetScore) {
        var view = PigGame.View.init();
        var model = PigGame.Model.init(playerNames, targetScore);
       // var gameDie = GameDie.init();

        // handles roll events
        var rollEvent = function(event) {
            var roll = model.roll();
            view.updateDie(model.currentDieValue());
            view.updateCurrentPoint(model.getCurrentPoint());
            if (roll === false) {
                view.displayBustedMessage();
                passEvent(event);
            }
        };

        // handles pass event
        var passEvent = function(event) {

            // update the data
            model.pass();

            // update the view
            view.updatePlayerScores(model.getPrevPlayer(),
                model.getPlayerScores(model.getPrevPlayer()));

            // check for winner
            if (model.getWinner() !== null) {
                console.log(model.getWinner());
                view.showWinner(model.getWinner());
            }

            // remove active elements for previous player
            view.updateCurrentPlayer(model.getPrevPlayer(), false);

            // update form for current player
            view.updateCurrentPlayer(model.getCurrentPlayer(), true);
        };
        view.setRollHandler(rollEvent);
        view.setPassHandler(passEvent);
        view.showBoard(playerNames, targetScore);
    };
    return {
        init: init
    };
})();