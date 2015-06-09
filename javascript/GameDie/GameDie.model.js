"use strict";

/**
 * A model of a game die.
 *
 * Created by kurmasz on 2/11/15.
 */


GameDie.Model = (function () {

    var init = function () {

        // simulates rolling the dice
        var random = Math.floor((Math.random() * 6) + 1);
        var value;

        return {
            roll : roll
        }
    }; // end init

    return {
        init: init
    }

})();