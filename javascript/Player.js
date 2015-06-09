"use strict";

/**
 * Represents a Pig Dice player.
 *
 * Created by kurmasz on 2/11/15.
 */
var Player = (function () {

// Notice that this is just one class.  It is not an MVC triad.  That is because the Player object is 
// for data only (i.e., it is effectively just a model.)

    var init = function (name_in) {
        var name = name_in;
        var score = 0;

        var getName = function() {
            return name;
        };

        var getScore = function() {
            return score;
        };

        var incScore = function(value) {
            score += value;
        };

        return {
            getName : getName,
            getScore : getScore,
            incScore : incScore
        };
    };

    return {
        init: init
    };
})();