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
     *
     * @param targetScore  The score at which the game is over.
     */
    var init = function (playerNames, targetScore) {

        var view = PigGame.View.init();
        var model = PigGame.Model.init(playerNames, targetScore);

        //TODO:  Add any other necessary instance variables and instance methods 
    };

    return {
        init: init
    };


})();