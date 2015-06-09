"use strict";

/**
 * The view of a GameDie
 * Created by kurmasz on 2/11/15.
 */


GameDie.View = (function () {

    /**
     * Constructor
     * @param container_in  The DOM element that will contain this Die.
     * @returns {{updateDice: updateDice}}
     */
    var init = function () {

        // update the dice value
        var updateDice = function(value) {
            document.getElementById("dice").className = value;
        };

        return {
            updateDice : updateDice
        };
    }; // end init

    return {
        init: init
    };
})();
