"use strict";

/**
 * A model of a game die.
 *
 * Created by kurmasz on 2/11/15.
 */

// define the model if not set for testing
if (GameDie === undefined)
    var GameDie = {};

GameDie.Model = (function () {

    var init = function () {
        var value;

        // simulates rolling the dice
        var random = function() {
            value = Math.floor((Math.random() * 6) + 1);
        };

        // stores latest random value
        value = function() {
            return value;
        };

        /** return spelling of roll value */
        var spellValue = function(value) {
            switch (value) {
                case 1:
                    return "one";
                case 2:
                    return "two";
                case 3:
                    return "three";
                case 4:
                    return "four";
                case 5:
                    return "five";
                case 6:
                    return "six";
            }
            return null;
        };

        return {
            random : random,
            value: value,
            spellValue: spellValue
        };
    }; // end init

    return {
        init: init
    };

})();