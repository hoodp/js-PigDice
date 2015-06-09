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

        // game die view for updating dice images
        var gameDieView = GameDie.View.init();
        var gameDieModel = GameDie.Model.init();

        // handles roll events
        var rollEvent = function(event) {
            var roll = model.roll();
            var currPoint = model.getCurrentPoint();
            gameDieView.updateDice(gameDieModel.spellValue(gameDieModel.value()));
            view.updateCurrentPoint(currPoint);
            if (roll === false) {
                view.displayBustedMessage();
                passEvent(event);
            }
        };

        // handles pass event
        var passEvent = function(event) {

            // update the data
            model.pass();

            // previous player index
            var prev = model.getPrevPlayer();

            // update the view
            view.updatePlayerScores(prev, model.getPlayerScore(prev));

            // check for winner
            if (model.getWinner() !== null)
                view.showWinner(model.getWinner());

            // remove active elements for previous player
            view.updateCurrentPlayer(prev, false);

            // update form for current player
            view.updateCurrentPlayer(model.getCurrentPlayer(), true);
        };

        // set game die model
        model.setGameDie(gameDieModel);
        view.setRollHandler(rollEvent);
        view.setPassHandler(passEvent);
        view.showBoard(playerNames, targetScore);
    };
    return {
        init: init
    };
})();